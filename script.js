document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".nav");
  menu?.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menu.setAttribute("aria-expanded",open);
    menu.textContent=open?"✕":"☰";
  });
  document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded","false");
    if(menu) menu.textContent="☰";
  }));

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  const top=document.querySelector(".back-top");
  window.addEventListener("scroll",()=>{
    top?.classList.toggle("show",window.scrollY>550);
  },{passive:true});
  top?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  const toast=document.querySelector(".toast");
  document.querySelectorAll(".shop-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const product=btn.dataset.product || "a product";
      const message=`Hello Maleele Agro-Vet Dealers, I would like to enquire about ${product}. Please send me availability and price.`;
      const url=`https://wa.me/260979603185?text=${encodeURIComponent(message)}`;
      if(toast){
        toast.classList.add("show");
        setTimeout(()=>toast.classList.remove("show"),1200);
      }
      setTimeout(()=>window.open(url,"_blank","noopener"),150);
    });
  });

  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();
});