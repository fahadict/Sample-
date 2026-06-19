// FIXED MOBILE MENU BUG
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

// SIMPLE SCROLL ANIMATION
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show-animation");
    }
  });
});

document.querySelectorAll("section").forEach(el=>{
  observer.observe(el);
});
