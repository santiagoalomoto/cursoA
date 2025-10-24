// math.js
function suma(a, b) {
  throw new Error("¡Error generado intencionalmente!");
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

module.exports = { suma, multiplicar };
