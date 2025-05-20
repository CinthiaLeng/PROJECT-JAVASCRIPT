const user = JSON.parse(localStorage.getItem("login-success")) || false; // Obtengo el objeto del usuario del localStorage si existe
if (!user) {
    window.location.href = "../html/login.html"; // Redirijo a la página de inicio de sesión    
} 

//activo el botón de logout para salir del CRM
const logoutButton = document.querySelector("#logout");
logoutButton.addEventListener("click", (e) => {
    e.preventDefault(); // Para evitar que el formulario se envíe y recargue la página
    localStorage.removeItem("login-success"); // Elimino el objeto del usuario del localStorage
    window.location.href = "../html/login.html"; // Redirijo a la página de inicio de sesión
})