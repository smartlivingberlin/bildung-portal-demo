(function(){
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }});
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  // weiches Scrollen für #links
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]'); if(!a) return;
    const t=document.querySelector(a.getAttribute('href')); if(!t) return;
    e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'});
  });
})();
