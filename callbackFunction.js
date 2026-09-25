function fn(num, fnCallback) {

  return fnCallback(num);

}

// Invocar o llamar a la funcion
// fn(5, (a) => {return a * 10;}); // 50


// fn(25, (a) => {  return a / 5 }); // 5

console.log(fn(5, (a) => {return a * 10;})); // 50

console.log(fn(25, (a) => {return a / 5;})); // 5