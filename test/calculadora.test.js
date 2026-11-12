const test = require('node:test');
const assert = require('node:assert/strict');
const { sumar, restar, multiplicar, dividir } = require('../src/modules/calculadora');

test('sumar devuelve la suma de dos numeros', () => {
  assert.equal(sumar(2, 3), 5);
  assert.equal(sumar(-4, 1), -3);
});

test('restar devuelve la diferencia de dos numeros', () => {
  assert.equal(restar(10, 4), 6);
});

test('multiplicar devuelve el producto de dos numeros', () => {
  assert.equal(multiplicar(6, 7), 42);
});

test('dividir devuelve el cociente de dos numeros', () => {
  assert.equal(dividir(9, 3), 3);
});

test('dividir lanza error al dividir entre cero', () => {
  assert.throws(() => dividir(5, 0), /dividir entre cero/);
});
