// Función para mostrar el nombre de usuario en la barra de navegación
function cargarUsuarioEnNavegacion() {
    const nombresUsuario = localStorage.getItem("nombresusuario");
    const apellidosUsuario = localStorage.getItem("apellidosusuarios");
    const navBar = document.querySelector(".navbar");

    if (nombresUsuario && apellidosUsuario) {
        // Crear un contenedor para el nombre y cerrar sesión
        const usuarioDiv = document.createElement("div");
        usuarioDiv.classList.add("usuario-nav");

        const nombreSpan = document.createElement("span");
        nombreSpan.textContent = `${nombresUsuario} ${apellidosUsuario}`;

        const cerrarSesionBtn = document.createElement("button");
        cerrarSesionBtn.textContent = "Cerrar Sesión";
        cerrarSesionBtn.classList.add("cerrar-sesion-btn");

        // Acción al hacer clic en "Cerrar Sesión"
        cerrarSesionBtn.addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "paginaweb.html";
        });

        usuarioDiv.appendChild(nombreSpan);
        usuarioDiv.appendChild(cerrarSesionBtn);
        navBar.appendChild(usuarioDiv);
    }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarUsuarioEnNavegacion);
