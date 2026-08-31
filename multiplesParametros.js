function areaTriangulo(base, altura) {
  console.log("El àrea del triangulo es: " + (base * altura) / 2);
}

// areaTriangulo(2, 5);

// ---------------------------------

function saludarTres(nombre1, nombre2, nombre3) {
  console.log("Hola "+ nombre1)
  console.log("Hola "+ nombre2)
  console.log("Hola "+ nombre3)
}

// saludarTres("Ron", "Harry", "Hermione");
// saludarTres("Hermione", "Harry", "Ron"); 

// saludarTres("Ron", "Harry");

// saludarTres("Ron", "Harry", "Hermione", "Hagrid", "Dumbledore", "Snape", "Severus")

// Parámetros Por Default
function multiply(a, b = 2) {
  console.log (a * b);
}

// Arrow function
let suma = (a = 0, b = 0) => {
 return a + b;
}