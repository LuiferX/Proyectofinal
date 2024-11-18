const nombreUsuarioSpan = document.getElementById("nombre-usuario");
const cerrarSesionBtn = document.getElementById("cerrar-sesion");
const iniciarSesionBtn = document.getElementById("iniciar-sesion");

function mostrarUsuarioActivo() {
    const usuarioActivo = localStorage.getItem("nombresusuario");
    if (usuarioActivo) {
        nombreUsuarioSpan.textContent = `Hola, ${usuarioActivo}`;
        nombreUsuarioSpan.style.display = "inline";
        cerrarSesionBtn.style.display = "inline-block";
        iniciarSesionBtn.style.display = "none";
    } else {
        nombreUsuarioSpan.textContent = "";
        nombreUsuarioSpan.style.display = "none";
        cerrarSesionBtn.style.display = "none";
        iniciarSesionBtn.style.display = "inline-block";
    }
}

function cerrarSesion() {
    localStorage.removeItem("nombresusuario");
    alert("Has cerrado sesión.");
    mostrarUsuarioActivo();
}

document.addEventListener("DOMContentLoaded", mostrarUsuarioActivo);
cerrarSesionBtn.addEventListener("click", cerrarSesion);
iniciarSesionBtn.addEventListener("click", () => {
    window.location.href = "iniciar-sesion.html";
});
