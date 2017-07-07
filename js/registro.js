var cargarPagina = function () {
    $('#login-form').submit(validarAcceso);    
};

var validarAcceso = function(e){
    e.preventDefault();
    var usuario = $("#user-email");
    var contrasena = $("#user-password");
    console.log(usuario.val(),contrasena.val())
    
    if (usuario.val() === "patitoadm@gmail.com" && contrasena.val() === "contra1X") {
        location.href = "files/clients-search.html";
    } else {
        alert("intenta de nuevo")
    }
}


$(document).ready(cargarPagina);
