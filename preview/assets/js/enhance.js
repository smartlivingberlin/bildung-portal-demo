const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
