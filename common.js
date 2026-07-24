function renderHeader(active){
const links=[['/','Home'],['/services','Services'],['/estimator','Get a Quote Estimate'],['/sectors','Sectors'],['/about','About'],['/careers','Careers'],['/contact','Contact']];
document.getElementById('site-header').innerHTML=`
<header class="site-header"><div class="container header-inner">
<a href="/" class="logo-link"><img src="/assets/logo.png" alt="Everglow Commercial Cleaning logo"><span class="logo-text">Everglow<span>CLEANERS LIMITED</span></span></a>
<nav class="main-nav">${links.map(l=>`<a href="${l[0]}" class="${active===l[0]?'active':''}">${l[1]}</a>`).join('')}</nav>
<div class="header-actions">
<a class="phone-link" href="tel:+447459503353"><i data-lucide="phone" style="width:16px;height:16px"></i> 07459 503353</a>
<a class="btn btn-primary" href="/contact">Get a quote</a>
<button class="nav-toggle" aria-label="Menu">☰</button>
</div>
</div></header>`;
}
function renderFooter(){
document.getElementById('site-footer').innerHTML=`
<footer class="site-footer"><div class="container">
<div class="footer-grid">
<div class="footer-col">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px"><img src="/assets/logo.png" alt="Everglow logo" style="height:44px"><span style="font-family:var(--font-display);color:#fff;font-size:18px">Everglow</span></div>
<p style="font-size:14px;color:var(--gray-300);max-width:280px">Commercial cleaning for offices, schools and councils across the North East of England.</p>
</div>
<div class="footer-col"><h4>Services</h4>
<a href="/services">Office Cleaning</a><a href="/services">Deep Cleaning</a><a href="/services">Washroom &amp; Hygiene</a><a href="/services">Window &amp; Glass Cleaning</a>
</div>
<div class="footer-col"><h4>Company</h4>
<a href="/about">About us</a><a href="/sectors">Sectors</a><a href="/careers">Careers</a><a href="/contact">Contact</a>
</div>
<div class="footer-col"><h4>Contact</h4>
<a href="tel:+447459503353">07459 503353</a><a href="mailto:info@everglowcleanerslimited.co.uk">info@everglowcleanerslimited.co.uk</a><span style="display:block;font-size:14px;color:var(--gray-300)">Novus Business Centre, Judson Road, North West Industrial Estate, Peterlee, SR8 2QJ</span>
</div>
</div>
<div class="footer-bottom"><span>© ${new Date().getFullYear()} Everglow Cleaners Limited. All rights reserved.</span><span>Registered in England &amp; Wales — Company No. 16001320</span><a href="/privacy" style="color:var(--gray-300)">Privacy Policy</a>
</div></footer>`;
}
function renderWhatsAppButton(){
const wrapper=document.createElement('a');
wrapper.href='https://wa.me/447459503353?text='+encodeURIComponent("Hi Everglow Cleaners, I'd like to ask about a commercial cleaning quote.");
wrapper.target='_blank';
wrapper.rel='noopener';
wrapper.className='whatsapp-float';
wrapper.setAttribute('aria-label','Chat with us on WhatsApp');
wrapper.innerHTML='<svg viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.386.688 4.62 1.98 6.55L4 29l7.617-1.947A11.93 11.93 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3zm0 21.6c-1.95 0-3.83-.522-5.46-1.51l-.392-.233-4.51 1.153 1.19-4.395-.256-.406A9.55 9.55 0 0 1 6.4 15c0-5.294 4.307-9.6 9.6-9.6 5.294 0 9.6 4.306 9.6 9.6 0 5.293-4.306 9.6-9.599 9.6zm5.264-7.19c-.288-.144-1.706-.842-1.97-.938-.264-.096-.456-.144-.648.144-.192.288-.744.938-.912 1.13-.168.192-.336.216-.624.072-.288-.144-1.217-.449-2.318-1.43-.857-.764-1.436-1.708-1.604-1.996-.168-.288-.018-.444.126-.588.13-.128.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.562-.888-2.14-.234-.562-.472-.486-.648-.495-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.402 0 1.417 1.032 2.786 1.176 2.978.144.192 2.03 3.1 4.917 4.347.687.297 1.223.474 1.641.607.689.219 1.316.188 1.812.114.553-.083 1.706-.697 1.946-1.371.24-.673.24-1.25.168-1.371-.072-.12-.264-.192-.552-.336z"/></svg>';
document.body.appendChild(wrapper);
}
document.addEventListener('DOMContentLoaded',()=>{
renderHeader(document.body.getAttribute('data-page'));
renderFooter();
renderWhatsAppButton();
if(window.lucide) lucide.createIcons();
document.addEventListener('click',e=>{
if(e.target.closest('.nav-toggle')){
const nav=document.querySelector('nav.main-nav');
nav.style.display=nav.style.display==='flex'?'none':'flex';
nav.style.cssText+='position:absolute;top:84px;left:0;right:0;background:var(--navy-900);flex-direction:column;padding:16px 24px;gap:16px;';
}
});
document.querySelectorAll('form[action*="formspree.io"]').forEach(form=>{
const submitBtn=form.querySelector('button[type="submit"]');
const originalBtnText=submitBtn?submitBtn.textContent:'';
form.addEventListener('submit',function(e){
e.preventDefault();
const successMsg=form.querySelector('.form-success');
const errorMsg=form.querySelector('.form-error');
if(errorMsg) errorMsg.style.display='none';
if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='Sending…';}
fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}})
.then(response=>{
if(response.ok){
if(successMsg) successMsg.style.display='block';
form.querySelectorAll('input,textarea,select,button').forEach(el=>el.disabled=true);
}else{
if(errorMsg) errorMsg.style.display='block';
if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=originalBtnText;}
}
})
.catch(()=>{
if(errorMsg) errorMsg.style.display='block';
if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=originalBtnText;}
});
});
});
});
