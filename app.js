let menu = document.getElementById("menu");
let drop = document.getElementById("drop");
let navBar = document.getElementById("drop2");
let cross = document.getElementById("cross");
let body = document.getElementById("body")

menu.addEventListener("click", () => {
  navBar.classList.toggle('hidden');
  if(cross.classList.contains("hidden")){
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    menu.classList.remove("hidden")
    cross.classList.add("hidden")
  }
})

cross.addEventListener("click", () => {
  navBar.classList.toggle('hidden');
  if(cross.classList.contains("hidden")){
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    menu.classList.remove("hidden")
    cross.classList.add("hidden")
  }
})

body.addEventListener("click", () => {
  navBar.classList.toggle('hidden');
  if(cross.classList.contains("hidden")){
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    menu.classList.remove("hidden")
    cross.classList.add("hidden")
  }
})

