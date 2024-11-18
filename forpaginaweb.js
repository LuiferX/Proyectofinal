// Elementos del DOM
const nombreUsuarioSpan = document.getElementById("nombre-usuario");
const cerrarSesionBtn = document.getElementById("cerrar-sesion");
const iniciarSesionBtn = document.getElementById("iniciar-sesion");

// Función para mostrar el nombre del usuario activo
function mostrarUsuarioActivo() {
    const usuarioActivo = localStorage.getItem("nombresusuario"); // Nombres guardados
    if (usuarioActivo) {
        nombreUsuarioSpan.textContent = `Hola, ${usuarioActivo}`;
        nombreUsuarioSpan.style.display = "inline"; // Mostrar el nombre
        cerrarSesionBtn.style.display = "inline"; // Mostrar el botón de cerrar sesión
        iniciarSesionBtn.style.display = "none"; // Ocultar el botón de iniciar sesión
    } else {
        nombreUsuarioSpan.textContent = ""; // No mostrar ningún nombre
        nombreUsuarioSpan.style.display = "none"; // Ocultar el elemento
        cerrarSesionBtn.style.display = "none"; // Ocultar el botón de cerrar sesión
        iniciarSesionBtn.style.display = "inline"; // Mostrar el botón de iniciar sesión
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("nombresusuario"); // Eliminar el nombre del usuario activo
    mostrarUsuarioActivo(); // Actualizar la vista
}

// Event Listeners
document.addEventListener("DOMContentLoaded", mostrarUsuarioActivo); // Mostrar datos al cargar la página
cerrarSesionBtn.addEventListener("click", cerrarSesion); // Manejar el cierre de sesión

document.addEventListener("DOMContentLoaded", () => {
    const btnIniciarSesion = document.getElementById("iniciar-sesion");
    const btnCerrarSesion = document.getElementById("cerrar-sesion");
    const usuarioInfo = document.getElementById("nombre-usuario");
    const usuarioActivo = localStorage.getItem("usuarioActivo");

    if (usuarioActivo) {
        // Si el usuario está activo, mostrar su nombre
        usuarioInfo.textContent = `Hola, ${usuarioActivo}`;
        btnIniciarSesion.style.display = "none";
        btnCerrarSesion.style.display = "inline-block";
    } else {
        // Si no hay usuario activo, ocultar el botón de cerrar sesión
        usuarioInfo.textContent = "";
        btnIniciarSesion.style.display = "inline-block";
        btnCerrarSesion.style.display = "none";
    }

    // Redirigir a la página de inicio de sesión
    btnIniciarSesion.addEventListener("click", () => {
        window.location.href = "iniciar-sesion.html";
    });

    // Cerrar sesión
    btnCerrarSesion.addEventListener("click", () => {
        localStorage.removeItem("usuarioActivo");
        alert("Has cerrado sesión.");
        window.location.reload();
    });
});

