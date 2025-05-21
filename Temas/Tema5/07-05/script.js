function cargarContenido(abrir){
    var contenedor;
    contenedor = document.getElementById('contenido');
    fetch(abrir)
            .then(Response=>Response.text())
            .then(data=>contenedor.innerHTML = data);

}