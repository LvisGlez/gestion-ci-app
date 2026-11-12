// Redondea un valor a dos decimales
function redondear(valor) {
  return Math.round(valor * 100) / 100;
}

// Convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return redondear((celsius * 9) / 5 + 32);
}

// Convierte grados Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
  return redondear(((fahrenheit - 32) * 5) / 9);
}

// Convierte kilometros a millas
function kmAMillas(km) {
  return redondear(km * 0.621371);
}

module.exports = { celsiusAFahrenheit, fahrenheitACelsius, kmAMillas };
