//Este formulario pedirá los datos de la persona fallecida y los almacenará en un objeto


// Pedimos al usuario cuántos pacientes desea registrar
let numPacientesFallecidos = parseInt(prompt("¿Cuántos pacientes fallecidos desea registrar?"));

// Validamos que sea un número
if (isNaN(numPacientesFallecidos) || numPacientesFallecidos <= 0) {
    alert("Por favor, ingrese un número válido de pacientes fallecidos.");
} else {
    // Array para almacenar los datos de los pacientes
    let pacientes = [];

    // Recorremos el número de pacientes a registrar
    for (let i = 0; i < numPacientesFallecidos; i++) {
        let nombre = prompt("Ingrese el nombre del paciente fallecido:");
        let apellido = prompt("Ingrese el apellido del paciente fallecido:");
        let idPami = prompt("Ingrese el número identificador de PAMI:");

        // Guardamos los datos en un objeto
        let paciente = {
            nombre: nombre,
            apellido: apellido,
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
        mensaje += `ID PAMI: ${paciente.idPami}\n\n`;
    });

    alert(mensaje);
}
