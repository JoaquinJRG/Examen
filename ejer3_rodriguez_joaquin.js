/*
Escriba el código necesario para almacenar la siguiente información sobre un usuario:
nombre, edad, calle, número, provincia, profesión y sueldo. Cree los siguientes
métodos con formato de flecha: mudarse, cambiarTrabajo e inicialice el objeto. Copie
dicho objeto en otro de forma que, al cambiarle los datos a este segundo, el primero
no se vea afectado.
*/



/** 
 * Objeto que almacena los datos de un usuario
 * @type {*} 
 */
let usuario = {
    nombre: "Pepe",
    edad: 30, 
    calle: "Zurbarán", 
    numero: 1, 
    provincia: "Granada", 
    profesion: "Fontanero", 
    sueldo: 1300,

    /**
     * Cambia la calle del usuario
     * @param {*} nuevaCalle
     */
    mudarse: (nuevaCalle) => {
        usuario.calle = nuevaCalle; 
    },

    /**
     * Cambia la profesión del usuario
     * @param {*} nuevoTrabajo
     */
    cambiarTrabajo: (nuevoTrabajo) => {
        usuario.profesion = nuevoTrabajo; 
    },

}

//Copio el primer objeto 
let usuario2 = {...usuario};

usuario2.nombre = "Juan";

console.log(usuario.nombre);
console.log(usuario2.nombre);