
/**
 * Función que pinta un triángulo equilatero
 * @param {*} n Número de filas 
 * @return {*} String con el triángulo
 */
let pintarTriangulo = (n) => {
    let dibujo = ""; 
    let contador = 1; 

    for(let i = 1; i <= n; i++){
        
        dibujo += " ".repeat(n - i) + "*".repeat(contador); 

        contador += 2;  
        dibujo += "\n"; 
    }


    return dibujo; 
}


let numFilas = +prompt("Introduce el número de filas del triangulo: "); 
console.log(pintarTriangulo(numFilas));