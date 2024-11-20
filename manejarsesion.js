window.onload = function() {
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const nombreUsuarioSpan = document.getElementById("nombre-usuario");
    const botonIniciarSesion = document.getElementById("iniciar-sesion");
    const botonCerrarSesion = document.getElementById("cerrar-sesion");

    if (nombreUsuario) {
        nombreUsuarioSpan.textContent = `Bienvenido, ${nombreUsuario}`;
        botonIniciarSesion.style.display = "none";
        botonCerrarSesion.style.display = "block";
    } else {
        nombreUsuarioSpan.textContent = "";
        botonIniciarSesion.style.display = "block";
        botonCerrarSesion.style.display = "none";
    }
}

function iniciarSesion() {
    const correo = document.getElementById("gmaillogin").value;
    const password = document.getElementById("passwordlogin").value;

    if (correo && password) {
        localStorage.setItem("nombreUsuario", correo.split('@')[0]);
        window.location.href = "paginaweb.html";
    } else {
        alert("Por favor, ingresa tus credenciales");
    }
}

document.getElementById("cerrar-sesion").onclick = function() {
    localStorage.removeItem("nombreUsuario");
    window.location.href = "iniciar-sesion.html";
}
