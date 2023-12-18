
/**
 * Función que genera un número aleatorio entre el 0 y un número máximo (no incluido)
 * @param {*} max 
 */
function numAleatorio(max){
    return Math.floor(Math.random() * max); 
}


/**
 * Cifra una cadena 
 * @param {*} cadena
 * @return {*} 
 */
function cifrarCadena(cadena) {

    let cadenaCifrada = ""; 
    let cadenaCifrar = "abcdefghijklmnñopqrstuvwxyz";

    //Objeto con {letraOriginal: letraNueva}
    let reglasCifrado = {}

    for(let i = 0; i < cadena.length; i++){
        if(typeof(reglasCifrado?.[cadena[i]]) !== "undefined"){ //Se comprueba si ya existe la letra

            cadenaCifrada += reglasCifrado[cadena[i]]; 

        }else{
            
            reglasCifrado[cadena[i]] = cadenaCifrar[numAleatorio(cadenaCifrar.length)];
            cadenaCifrada += reglasCifrado[cadena[i]]; 
        }
    }


    return [cadena, cadenaCifrada, cadenaCifrar]; 
}


//Pruebas 

console.log(cifrarCadena("pruebaprueba")); 