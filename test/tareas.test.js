const test = require('node:test');
const assert = require('node:assert/strict');
const { agregar, completar, pendientes } = require('../src/modules/tareas');

test('agregar crea una tarea pendiente con id consecutivo', () => {
  const lista = agregar(agregar([], 'Primera'), 'Segunda');
  assert.deepEqual(lista[1], { id: 2, titulo: 'Segunda', completada: false });
});

test('agregar rechaza un titulo vacio', () => {
  assert.throws(() => agregar([], '   '), /obligatorio/);
});

test('agregar no modifica la lista original', () => {
  const original = [];
  agregar(original, 'Tarea');
  assert.equal(original.length, 0);
});

test('completar marca la tarea y pendientes la excluye', () => {
  let lista = agregar(agregar([], 'Uno'), 'Dos');
  lista = completar(lista, 1);
  assert.equal(lista[0].completada, true);
  assert.deepEqual(pendientes(lista).map((t) => t.titulo), ['Dos']);
});

test('completar lanza error si el id no existe', () => {
  assert.throws(() => completar([], 99), /No existe/);
});
