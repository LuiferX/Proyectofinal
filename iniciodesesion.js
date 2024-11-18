function iniciarSesion() {
    const email = document.getElementById("gmaillogin").value;
    const password = document.getElementById("passwordlogin").value;
    const emailGuardado = localStorage.getItem("correousuario");
    const passwordGuardada = localStorage.getItem("contraseñadeusuario");
    const nombreUsuario = localStorage.getItem("nombreusuario");

    if (email === emailGuardado && password === passwordGuardada) {
        const nombresGuardados = localStorage.getItem("nombresusuario");
        localStorage.setItem("usuarioActivo", nombresGuardados);
        window.location.href = "paginaweb.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}
