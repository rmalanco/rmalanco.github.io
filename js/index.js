/* Agregar funciones a el index */

// Funcion para mostrar en el pie de pagina el copyright y el año actual
function footer() {
    var fecha = new Date();
    var year = fecha.getFullYear();
    document.getElementById("footer").innerHTML = "© "+ fecha +" Rafael Malanco. All rights reserved.";
}




