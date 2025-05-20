const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Para evitar que el formulario se envíe y recargue la página
    // Obtengo los valores de los campos del formulario
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    // Verifico si el usuario existe en el localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        // Si el usuario existe, guardo su información en el localStorage y redirijo a la página principal
        localStorage.setItem("login-success", JSON.stringify(user));
        alert("Inicio de sesión exitoso. Bienvenido, " + user.name);
        window.location.href = "../index.html"; // Redirijo a la página principal
    } else {
        alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
})




