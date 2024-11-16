function iniciarSesion() {
    const email = document.getElementById("gmaillogin").value;
    const password = document.getElementById("passwordlogin").value;
    const emailGuardado = localStorage.getItem("correousuario");
    const passwordGuardada = localStorage.getItem("contraseñadeusuario");
    const nombreUsuario = localStorage.getItem("nombreusuario");

    if (email === emailGuardado && password === passwordGuardada) {
        localStorage.setItem("usuarioActivo", nombreUsuario);
        window.location.href = "paginaweb.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}
