const test = require('node:test');
const assert = require('node:assert/strict');
const { celsiusAFahrenheit, fahrenheitACelsius, kmAMillas } = require('../src/modules/conversor');

test('celsiusAFahrenheit convierte puntos de referencia', () => {
  assert.equal(celsiusAFahrenheit(0), 32);
  assert.equal(celsiusAFahrenheit(100), 212);
  assert.equal(celsiusAFahrenheit(-40), -40);
});

test('fahrenheitACelsius convierte y redondea a dos decimales', () => {
  assert.equal(fahrenheitACelsius(212), 100);
  assert.equal(fahrenheitACelsius(100), 37.78);
});

test('kmAMillas convierte y redondea a dos decimales', () => {
  assert.equal(kmAMillas(10), 6.21);
  assert.equal(kmAMillas(42.195), 26.22);
});
