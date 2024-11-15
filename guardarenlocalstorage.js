const registrarinput = document.getElementById("gmailregistro");
const passwordinput = document.getElementById("passwordregistro");
const botonregistro = document.querySelector("button");
const nombresregistro = document.getElementById("nombres");
const apellidosregistro = document.getElementById("apellidos");
const generoregistro = document.getElementById("genero");

function guardarlocalestorage() {
    const gmail = registrarinput.value;
    const password = passwordinput.value;
    const nombres = nombresregistro.value;
    const apellidos = apellidosregistro.value;
    const genero = generoregistro.value;

    if (gmail && password && nombres && apellidos && genero) {
        localStorage.setItem("correousuario", gmail);
        localStorage.setItem("contraseñadeusuario", password);
        localStorage.setItem("nombresusuario", nombres);
        localStorage.setItem("apellidosusuarios", apellidos);
        localStorage.setItem("generousuario", genero);
        window.location.href = "iniciar-sesion.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function mostrardatos() {
    const gmailguardado = localStorage.getItem("correousuario");
    const contraseñaguardada = localStorage.getItem("contraseñadeusuario");
    const nombresguardados = localStorage.getItem("nombresusuario");
    const apellidosguardados = localStorage.getItem("apellidosusuarios");
    const generoguardado = localStorage.getItem("generousuario");

    
    if (gmailguardado && contraseñaguardada && nombresguardados && apellidosguardados && generoguardado) {
        console.log("Datos guardados:");
        console.log("Correo:", gmailguardado);
        console.log("Contraseña:", contraseñaguardada);
        console.log("Nombres:", nombresguardados);
        console.log("Apellidos:", apellidosguardados);
        console.log("Género:", generoguardado);
        nombresregistro.value = nombresguardados;
        apellidosregistro.value = apellidosguardados;
        generoregistro.value = generoguardado;
    }
}

botonregistro.addEventListener("click", guardarlocalestorage);
document.addEventListener("DOMContentLoaded", mostrardatos);
