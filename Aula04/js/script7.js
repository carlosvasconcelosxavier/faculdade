let a = parseInt(prompt("Digite o valor de A: "));
let b = parseInt(prompt("Digite o valor de B: "));
let c = parseInt(prompt("Digite o valor de C: "));

let delta = b**2 - 4 * a * c;
let r1 = (-b + Math.sqrt(delta))/(2*a);
let r2 = (-b + Math.sqrt(delta))/(2*a);

alert(`Raiz 1: ${r1} - Raiz 2: ${r2}`);