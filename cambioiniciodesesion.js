const formtitle = document.getElementById("form-titulo");
const form = document.getElementById("formulario");
const toggleformbtn = document.getElementById("toggle-form-btn");

function toggleform() {
    if (toggleformbtn.textContent === "Iniciar Sesion") {
        formtitle.textContent = "Iniciar Sesion";
        form.innerHTML = `
            <label for="gmaillogin">Correo Electrónico</label>
            <input type="email" id="gmaillogin" name="gmaillogin" placeholder="Ingresa tu correo" required><br><br>

            <label for="passwordlogin">Contraseña</label>
            <input type="password" id="passwordlogin" name="passwordlogin" placeholder="Ingresa tu contraseña" required><br>

            <button type="button" id="login-btn">Iniciar Sesión</button>
        `;
        toggleformbtn.textContent = "Registrate";
    } else {
        formtitle.textContent = "Registro";
        form.innerHTML = `
            <label for="gmailregistro">Correo Electrónico</label>
            <input type="email" id="gmailregistro" name="gmailregistro" placeholder="Ingresa tu correo" required><br><br>

            <label for="passwordregistro">Contraseña</label>
            <input type="password" id="passwordregistro" name="passwordregistro" placeholder="Ingresa tu contraseña" required><br>

            <button type="button" id="registro-btn">Registrar</button>
        `;
        toggleformbtn.textContent = "Iniciar Sesion";
    }
}

toggleformbtn.addEventListener("click", toggleform);


