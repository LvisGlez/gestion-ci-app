const tareas = require('./modules/tareas');
const calculadora = require('./modules/calculadora');
const conversor = require('./modules/conversor');

// Ejecuta una demostracion de los tres modulos
function main() {
  let lista = tareas.agregar([], 'Configurar Jenkins');
  lista = tareas.agregar(lista, 'Crear pipeline');
  lista = tareas.completar(lista, 1);
  console.log('Tareas pendientes:', tareas.pendientes(lista));
  console.log('Suma 5 + 3 =', calculadora.sumar(5, 3));
  console.log('25 C a F =', conversor.celsiusAFahrenheit(25));
  console.log('10 km a millas =', conversor.kmAMillas(10));
}

main();
