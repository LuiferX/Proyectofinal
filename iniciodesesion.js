function iniciarSesion() {
    const email = document.getElementById("gmaillogin").value;
    const password = document.getElementById("passwordlogin").value;
    const emailGuardado = localStorage.getItem("correousuario");
    const passwordGuardada = localStorage.getItem("contraseñadeusuario");

    if (email === emailGuardado && password === passwordGuardada) {
        window.location.href = "paginaweb.html";
    } else {
        alert("Correo o contraseña incorrectos. Por favor, verifica tus datos o regístrate.");
    }
}
