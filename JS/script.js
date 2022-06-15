class paciente {
  constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, edad, ta, fc, fr, spo2) {
      this.nombre = nombre;
      this.apellidoPaterno = apellidoPaterno;
      this.apellidoMaterno = apellidoMaterno;
      this.fechaNac = fechaNac;
      this.sexo = sexo;
      this.diagnostico = diagnostico;
      this.edad = edad;
      this.ta = ta;
      this.fc = fc;
      this.fr = fr;
      this.spo2 = spo2;
  }
}
const pacientes = [];

alert("Hola Soy Ricardo hernandez y este es mi Segundo Desafio Complementario en JavaScript");

alert("Bienvenido al sistema de Expediente Electrónico de Pacientes");

sistema();

function sistema(){
  let opcion = prompt("¿Qué desea hacer?\n1. Registrar paciente\n2. Consultar paciente\n3. Salir");
  switch(opcion){
    case "1":
      registrarPaciente();
      sistema();
      break;
    case "2":
      mostrarPacientes();
      sistema();
      break;
    case "3":
      alert("Gracias por utilizar el sistema");
      break;
    default:
      alert("Opción inválida");
      sistema();
  }
}

function registrarPaciente() {
  let nombre = prompt("Nombre del paciente");
    while(nombre == null || nombre == "" || nombre.length > 20 || nombre.length < 3){
      nombre = prompt("Nombre del paciente");
    }
  let apellidoPaterno = prompt("Apellido paterno del paciente");
    while(apellidoPaterno == null || apellidoPaterno == "" || apellidoPaterno.length > 20 || apellidoPaterno.length < 3){
      apellidoPaterno = prompt("Apellido paterno del paciente");
    }
  let apellidoMaterno = prompt("Apellido materno del paciente");
    while(apellidoMaterno == null || apellidoMaterno == "" || apellidoMaterno.length > 20 || apellidoMaterno.length < 3){
      apellidoMaterno = prompt("Apellido materno del paciente");
    }
  let fechaNac = prompt("Fecha de nacimiento del paciente (dd/mm/aaaa)");
    while(fechaNac == null || fechaNac == "" || fechaNac.length > 10 || fechaNac.length < 10 || !fechaNac.match(/^\d{2}\/\d{2}\/\d{4}$/)){
      fechaNac = prompt("Fecha de nacimiento del paciente (dd/mm/aaaa)");
    }
  let sexo = prompt("Sexo del paciente (M/F)");
    while(sexo == null || sexo == "" || (sexo != "M" && sexo != "F" && sexo != "m" && sexo != "f")){
      sexo = prompt("Sexo del paciente (M/F)");
    }
  let diagnostico = prompt("Diagnostico del paciente");
    while(diagnostico == null || diagnostico == "" || diagnostico.length > 20 || diagnostico.length < 3){
      diagnostico = prompt("Diagnostico del paciente");
    }
  let edad = prompt("Edad del paciente (años)");
    while(edad == null || edad == "" || edad.length > 3 || edad.length < 1 || !edad.match(/^\d+$/)){
      edad = prompt("Edad del paciente");
    }
  let ta = prompt("Tension arterial del paciente (mmHg/mmHg)");
    while(ta == null || ta == "" || ta.length > 10 || ta.length < 3 || !ta.match(/^\d+\/\d+$/)){
      ta = prompt("Tension arterial del paciente (mmHg/mmHg)");
    }
  let fc = prompt("Frecuencia Cardiaca del paciente (lpm)");
    while(fc == null || fc == "" || fc.length > 3 || fc.length < 1 || !fc.match(/^\d+$/)){
      fc = prompt("Frecuencia Cardiaca del paciente (lpm)");
    }
  let fr = prompt("Frecuencia Respiratoria del paciente (/min)");
    while(fr == null || fr == "" || fr.length > 3 || fr.length < 1 || !fr.match(/^\d+$/)){
      fr = prompt("Frecuencia Respiratoria del paciente (/min)");
    }
  let spo2 = prompt("SpO2 del paciente (%)");
    while(spo2 == null || spo2 == "" || spo2.length > 3 || spo2.length < 1 || !spo2.match(/^\d+$/)){
      spo2 = prompt("SpO2 del paciente (%)");
    }
  pacientes.push(new paciente(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, edad, ta, fc, fr, spo2));
  alert("Paciente registrado");
}

function mostrarPacientes() {
  alert("Pacientes registrados:\n");
  for (let i = 0; i < pacientes.length; i++) {
    alert("Nombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\nSexo: " + pacientes[i].sexo.toUpperCase() + "\nDiagnostico: " + pacientes[i].diagnostico.toUpperCase() + "\nEdad: " + pacientes[i].edad + "\nTension Arterial: " + pacientes[i].ta + "\nFrecuencia Cardiaca: " + pacientes[i].fc + "\nFrecuencia Respiratoria: " + pacientes[i].fr + "\nSpO2: " + pacientes[i].spo2);
}
}