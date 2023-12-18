/**
 * Genera número aleatorio entre 1 y un número determinado 
 * @param {*} n Número máximo
 * @return {*} Número aleatorio 
 */
let numAleatorio = (n) => {return Math.floor(Math.random() * n) + 1}

//A) 
let matriz = []; 
let num = +prompt("Introduce número máximo:"); 

for(let i = 0; i < 50; i++){
    matriz.push(numAleatorio(num)); 
}

console.log(matriz); 

//B)

let matrizPares = matriz.filter(n => n % 2 == 0);
let matrizImpares = matriz.filter(n => n % 2 != 0);

console.log(matrizPares);
console.log(matrizImpares);

//C) 

let numRand = numAleatorio(10); 

matriz = matriz.map(n => n + numRand); 
matrizPares = matrizPares.map(n => n + numRand); 
matrizImpares = matrizImpares.map(n => n + numRand); 

console.log(matriz); 

//D)

let sumaMatriz = matriz.reduce((suma, n) => suma + n); 
let sumaPares = matrizPares.reduce((suma, n) => suma + n); 
let sumaImpares = matrizImpares.reduce((suma, n) => suma + n); 

let minMatriz = Math.min(...matriz); 
let minPares = Math.min(...matrizPares); 
let minImpares = Math.min(...matrizImpares); 

let maxMatriz = Math.max(...matriz); 
let maxPares = Math.max(...matrizPares); 
let maxImpares = Math.max(...matrizImpares); 
