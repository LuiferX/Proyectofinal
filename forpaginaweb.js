document.addEventListener("DOMContentLoaded", () => {
    const nombreUsuarioSpan = document.getElementById("nombre-usuario");
    const cerrarSesionBtn = document.getElementById("cerrar-sesion");
    const iniciarSesionBtn = document.getElementById("iniciar-sesion");

    function mostrarUsuarioActivo() {
        const nombresUsuario = localStorage.getItem("nombresusuario");
        const usuarioActivo = localStorage.getItem("usuarioActivo");

        if (usuarioActivo && nombresUsuario) {
            nombreUsuarioSpan.textContent = `Hola, ${nombresUsuario}`;
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
        localStorage.removeItem("usuarioActivo");
        localStorage.removeItem("nombresusuario");
        alert("Has cerrado sesión.");
        mostrarUsuarioActivo();
    }

    iniciarSesionBtn.addEventListener("click", () => {
        window.location.href = "iniciar-sesion.html";
    });

    cerrarSesionBtn.addEventListener("click", cerrarSesion);

    mostrarUsuarioActivo();
});
