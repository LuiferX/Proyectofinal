const registrarinput = document.getElementById("gmailregistro");
const passwordinput = document.getElementById("passwordregistro");
const botonregistro = document.querySelector("button");
const nombresregistro = document.getElementById("nombres");
const apellidosregistro = document.getElementById("apellidos");
const generoregistro = document.getElementById("genero");

function guardarlocalestorage() {
    const gmail = registrarinput.value;
    const password = passwordinput.value;
    const nombres = nombresregistro.value;
    const apellidos = apellidosregistro.value;
    const genero = generoregistro.value;

    if (gmail && password && nombres && apellidos && genero) {
        localStorage.setItem("correousuario", gmail);
        localStorage.setItem("contraseñadeusuario", password);
        localStorage.setItem("nombresusuario", nombres); 
        localStorage.setItem("apellidosusuario", apellidos);
        localStorage.setItem("generousuario", genero);
        localStorage.setItem("usuarioActivo", "true"); 
        window.location.href = "iniciar-sesion.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

botonregistro.addEventListener("click", guardarlocalestorage);
