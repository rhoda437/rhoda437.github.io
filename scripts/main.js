let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/tabien.png") {
    miImage.setAttribute("src", "images/tamal.png");
  } else {
    miImage.setAttribute("src", "images/tabien.png");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
