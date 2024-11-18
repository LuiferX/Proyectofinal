window.onload = function() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");
    const nombreUsuario = localStorage.getItem("nombresusuarios");

    if (usuarioActivo) {
        document.getElementById("nombre-usuario").textContent = `Bienvenido, ${nombreUsuario}`;
        document.getElementById("cerrar-sesion").style.display = "block";
        document.getElementById("iniciar-sesion").style.display = "none";
    } else {
        document.getElementById("cerrar-sesion").style.display = "none";
        document.getElementById("iniciar-sesion").style.display = "block";
    }
};

document.getElementById("cerrar-sesion").onclick = function() {
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("nombreusuario");
    window.location.reload();
};

document.getElementById("iniciar-sesion").onclick = function() {
    window.location.href = "iniciar-sesion.html";
};
