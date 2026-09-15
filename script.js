// MALEELE AGRO-VET DEALERS V5
document.addEventListener("DOMContentLoaded",()=>{
  const backTop=document.querySelector(".back-top");
  window.addEventListener("scroll",()=>{
    if(backTop) backTop.classList.toggle("show",window.scrollY>500);
  },{passive:true});
  backTop?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
});
