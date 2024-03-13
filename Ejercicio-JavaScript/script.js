document.getElementById("cambiarColorBtn").addEventListener("click", function() {
    var contenedorImagen1 = document.querySelector(".imagen-contenedor:first-child");
    contenedorImagen1.style.backgroundColor = "lightblue";
});

document.getElementById("cambiarTamanoBtn").addEventListener("click", function() {
    var imagen1 = document.getElementById("imagen1");
    imagen1.style.width = "400px";
});
