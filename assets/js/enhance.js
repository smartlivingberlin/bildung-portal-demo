const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.reveal').forEach(x=>io.observe(x));});
