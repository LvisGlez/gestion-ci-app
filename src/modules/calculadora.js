// Suma dos numeros
function sumar(a, b) {
  return a + b;
}

// Resta el segundo numero al primero
function restar(a, b) {
  return a - b;
}

// Multiplica dos numeros
function multiplicar(a, b) {
  return a * b;
}

// Divide el primer numero entre el segundo validando la division entre cero
function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}

module.exports = { sumar, restar, multiplicar, dividir };
