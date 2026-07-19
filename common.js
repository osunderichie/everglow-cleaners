function renderHeader(active){
const links=[['index.html','Home'],['services.html','Services'],['sectors.html','Sectors'],['about.html','About'],['careers.html','Careers'],['contact.html','Contact']];
document.getElementById('site-header').innerHTML=`
<header class="site-header"><div class="container header-inner">
<a href="index.html" class="logo-link"><img src="assets/logo.png" alt="Everglow Commercial Cleaning logo"><span class="logo-text">Everglow<span>CLEANERS LIMITED</span></span></a>
<nav class="main-nav">${links.map(l=>`<a href="${l[0]}" class="${active===l[0]?'active':''}">${l[1]}</a>`).join('')}</nav>
<div class="header-actions">
<a class="phone-link" href="tel:+447459503353"><i data-lucide="phone" style="width:16px;height:16px"></i> 07459 503353</a>
<a class="btn btn-primary" href="contact.html">Get a quote</a>
<button class="nav-toggle" aria-label="Menu">☰</button>
</div>
</div></header>`;
}
function renderFooter(){
document.getElementById('site-footer').innerHTML=`
<footer class="site-footer"><div class="container">
<div class="footer-grid">
<div class="footer-col">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px"><img src="assets/logo.png" alt="Everglow logo" style="height:44px"><span style="font-family:var(--font-display);color:#fff;font-size:18px">Everglow</span></div>
<p style="font-size:14px;color:var(--gray-300);max-width:280px">Commercial cleaning for offices, schools and councils across the North East of England.</p>
</div>
<div class="footer-col"><h4>Services</h4>
<a href="services.html">Office Cleaning</a><a href="services.html">Deep Cleaning</a><a href="services.html">Washroom &amp; Hygiene</a><a href="services.html">Window &amp; Glass Cleaning</a>
</div>
<div class="footer-col"><h4>Company</h4>
<a href="about.html">About us</a><a href="sectors.html">Sectors</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a>
</div>
<div class="footer-col"><h4>Contact</h4>
<a href="tel:+447459503353">07459 503353</a><a href="mailto:info@everglowcleanerslimited.co.uk">info@everglowcleanerslimited.co.uk</a><span style="display:block;font-size:14px;color:var(--gray-300)">Novus Business Centre, Judson Road, North West Industrial Estate, Peterlee, SR8 2QJ</span>
</div>
</div>
<div class="footer-bottom"><span>© ${new Date().getFullYear()} Everglow Cleaners Limited. All rights reserved.</span><span>Registered in England &amp; Wales — Company No. 16001320</span>
</div></footer>`;
}
document.addEventListener('DOMContentLoaded',()=>{
renderHeader(document.body.getAttribute('data-page'));
renderFooter();
if(window.lucide) lucide.createIcons();
document.addEventListener('click',e=>{
if(e.target.closest('.nav-toggle')){
const nav=document.querySelector('nav.main-nav');
nav.style.display=nav.style.display==='flex'?'none':'flex';
nav.style.cssText+='position:absolute;top:84px;left:0;right:0;background:var(--navy-900);flex-direction:column;padding:16px 24px;gap:16px;';
}
});
});
