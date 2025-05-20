//este sería el formulario para registrar a los nuevos pacientes, los datos a ingresar son cuatro: nombre, apellido, email e identificador de PAMI.

// Pedimos al usuario cuántos pacientes desea registrar
let numNuevosPacientes = parseInt(prompt("¿Cuántos nuevos pacientes desea registrar?"));

// Validamos que sea un número
if (isNaN(numNuevosPacientes) || numNuevosPacientes <= 0) {
    alert("Por favor, ingrese un número válido de pacientes.");
} else {
    // Array para almacenar los datos de los pacientes
    let pacientes = [];

    // Recorremos el número de pacientes a registrar
    for (let i = 0; i < numNuevosPacientes; i++) {
        let nombre = prompt("Ingrese el nombre del nuevo paciente:");
        let apellido = prompt("Ingrese el apellido del nuevo paciente:");
        let correoElectronico = prompt("Ingrese el correo electrónico del nuevo paciente:");
        let idPami = prompt("Ingrese el número identificador de PAMI:");

        // Guardamos los datos en un objeto
        let paciente = {
            nombre: nombre,
            apellido: apellido,
            correo: correoElectronico,
            idPami: idPami
        };

        // Agregamos el objeto al array
        pacientes.push(paciente);
    }

    // Mostramos la confirmación de los datos ingresados
    let mensaje = "Confirmación de datos ingresados:\n";
    pacientes.forEach((paciente, index) => {
        mensaje += `Paciente ${index + 1}:\n`;
        mensaje += `Nombre: ${paciente.nombre} ${paciente.apellido}\n`;
        mensaje += `Correo: ${paciente.correo}\n`;
        mensaje += `ID PAMI: ${paciente.idPami}\n\n`;
    });

    alert(mensaje);
}
