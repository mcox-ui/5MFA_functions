// Función Clásica
function sumar(a, b) {
  return a + b;
}

console.log("Function: " + sumar(1, 3)); // 4

// Arrow Function
let sumar2 = (a, b) => {
  return a + b;
};

console.log("Arrow function: " + sumar2(2, 3));

const saludar = (nombre) => {
  if (nombre === undefined) {
    return "hola anónimo";
  } else {
    return "hola " + nombre;
  }
};
