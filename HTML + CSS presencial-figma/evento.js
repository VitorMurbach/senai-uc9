document.querySelector("#menu-mobile")
.addEventListener("click",()=>{
  var elemento = document.querySelector("#menu-slide")
  if (elemento.classList.contains("slide-menu-show")){
    elemento.classList.remove("slide-menu-show")
  } else {
    elemento.classList.add("slide-menu-show")
  }
})