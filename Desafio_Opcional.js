// Función constructora Consultorio
function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente;
}

// Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

// Crear un nuevo paciente, instanciar
var paciente1 = new Paciente("Hugo", 12, "2123456-9", "Dolor de cabeza");
var paciente2 = new Paciente("Paco", 13, "2012345-1", "Dolor emocional");
var paciente3 = new Paciente("Luis", 14, "2023456-9", "Delirios sicoticos");

// Crear un nuevo consultorio y vincularlo con un paciente
var consultorio2 = new Consultorio("Consultorio 2", [paciente2]);

// Crear un nuevo consultorio y vincularlo con los pacientes
var consultorio = new Consultorio("Consultorio 1", [
  paciente1,
  paciente2,
  paciente3,
]);

// Mostrar el nombre del consultorio
console.log(consultorio.nombre);

// Mostrar el nombre del paciente
console.log(consultorio.paciente[0].nombre);
console.log(consultorio.paciente[1].nombre);
console.log(consultorio.paciente[2].nombre);