(function(){
  const els=[...document.querySelectorAll('.reveal')];
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('show'));return;}
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('show');io.unobserve(en.target);}})
  },{threshold:.1});
  els.forEach(e=>io.observe(e));
})();
