function iniciarSesion() {
    const email = document.getElementById("gmaillogin").value;
    const password = document.getElementById("passwordlogin").value;
    const emailGuardado = localStorage.getItem("correousuario");
    const passwordGuardada = localStorage.getItem("contraseñadeusuario");

    if (email === emailGuardado && password === passwordGuardada) {
        alert("Inicio de sesión exitoso");
        window.location.href = "dashboard.html";
    } else {
        alert("Correo o contraseña incorrectos. Por favor, verifica tus datos o regístrate.");
    }
}
