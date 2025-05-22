var asente = "asc";
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];


mostrar = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function cargarContenido(abrir) {
  var contenedor = document.getElementById("contenido");
  fetch(abrir)
    .then((response) => response.text())
    .then((data) => (contenedor.innerHTML = data));
}

function crearPersona() {
  var datos = new FormData(document.querySelector("#form-crear"));
  fetch("create.php", { method: "POST", body: datos })
    .then((response) => response.text())
    .then((data) => (document.querySelector("#contenido").innerHTML = data));
}
