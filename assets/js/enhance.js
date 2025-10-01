(function(){
  // Scroll-Reveal
  const obs=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  // Ripple-Effekt für Buttons
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('click',e=>{
      const r=document.createElement('span');
      const d=Math.max(b.clientWidth,b.clientHeight);
      r.style.cssText=`position:absolute;pointer-events:none;width:${d}px;height:${d}px;border-radius:50%;left:${e.offsetX-d/2}px;top:${e.offsetY-d/2}px;background:rgba(255,255,255,.18);transform:scale(0);transition:.45s;`;
      b.appendChild(r); requestAnimationFrame(()=>r.style.transform='scale(1)');
      setTimeout(()=>r.remove(),450);
    });
  });

  // FAQ Akkordeon (falls vorhanden)
  document.querySelectorAll('[data-acc-head]').forEach(h=>{
    h.addEventListener('click',()=>{
      const p=h.nextElementSibling; p.style.display = p.style.display==='block'?'none':'block';
    });
  });
})();
