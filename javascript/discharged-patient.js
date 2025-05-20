//Este formulario pedirá los datos del paciente dado de baja y los almacenará en un objeto


// Pedimos al usuario cuántos pacientes desea registrar
let numPacientesBaja = parseInt(prompt("¿Cuántos pacientes dados de baja desea registrar?"));

// Validamos que sea un número
if (isNaN(numPacientesBaja) || numPacientesBaja <= 0) {
    alert("Por favor, ingrese un número válido de pacientes dados de baja.");
} else {
    // Array para almacenar los datos de los pacientes
    let pacientes = [];

    // Recorremos el número de pacientes a registrar
    for (let i = 0; i < numPacientesBaja; i++) {
        let nombre = prompt("Ingrese el nombre del paciente dado de baja:");
        let apellido = prompt("Ingrese el apellido del paciente dado de baja:");
        let idPami = prompt("Ingrese el número identificador de PAMI:");
        let motivo = prompt ("Ingrese por favor el motivo de la baja")

        // Guardamos los datos en un objeto
        let paciente = {
            nombre: nombre,
            apellido: apellido,
            idPami: idPami,
            motivo: motivo
        };

        // Agregamos el objeto al array
        pacientes.push(paciente);
    }

    // Mostramos la confirmación de los datos ingresados
    let mensaje = "Confirmación de datos ingresados:\n";
    pacientes.forEach((paciente, index) => {
        mensaje += `Paciente ${index + 1}:\n`;
        mensaje += `Nombre: ${paciente.nombre} ${paciente.apellido}\n`;
        mensaje += `ID PAMI: ${paciente.idPami}\n`;
        mensaje += `Motivo: ${paciente.motivo}\n\n`;
    });

    alert(mensaje);
}



