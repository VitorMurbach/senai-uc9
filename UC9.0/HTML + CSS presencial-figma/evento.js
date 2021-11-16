document.querySelector("#menu-mobile")
  .addEventListener("click", () => {
    var elemento = document.querySelector("#menu-slide")
    if (elemento.classList.contains("slide-menu-show")) {
      elemento.classList.remove("slide-menu-show")
    } else {
      elemento.classList.add("slide-menu-show")
    }
  })
function principal1() {
  window.location.href = "principal.html";
}

$('#toggle-fading').click(function(){
  $('.loja-img').fadeToggle();
});
function logar(){
  window.alert("Você foi cadastrado!")
}