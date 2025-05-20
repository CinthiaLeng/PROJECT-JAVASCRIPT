const signupform = document.querySelector("#signup-form");
signupform.addEventListener("submit", (e) => {
    e.preventDefault(); // Para evitar que el formulario se envíe y recargue la página
    // Obtengo los valores de los campos del formulario
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered = users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert("El correo electrónico ya está registrado. Por favor, elija otro.");
    } else {
//guardo un objeto completo de nuevo usuario
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registro exitoso. Ahora puede iniciar sesión.");
        window.location.href = "../html/login.html"; // Redirijo a la página de inicio de sesión
}

})
