/**
 * Clase trabajador
 * @class Trabajador
 */
class Trabajador {
    #nombre; 
    #apellidos; 
    #direccion; 
    #sueldo; 
    /**
     * Crea una instancia de Trabajador.
     * @param {*} nombre
     * @param {*} apellidos
     * @param {*} direccion
     * @param {*} sueldo
     * @memberof Trabajador
     */
    constructor(nombre, apellidos, direccion, sueldo) {
        this.#nombre = nombre; 
        this.#apellidos = apellidos; 
        this.#direccion = direccion; 
        this.#sueldo = sueldo; 
    }

    /**
     * Devuelve el parámetro nombre
     * @return {*} 
     * @memberof Trabajador
     */
    getNombre(){
        return this.#nombre; 
    }

    /**
     * Modifica el nombre
     * @param {*} nombre
     * @memberof Trabajador
     */
    setNombre(nombre){
        this.#nombre = nombre; 
    }

    /**
     * Devuelve el parámetro apellidos
     * @return {*} 
     * @memberof Trabajador
     */
    getApellidos(){
        return this.#apellidos; 
    }

    /**
     * Modifica el nombre
     * @param {*} apellidos
     * @memberof Trabajador
     */
    setApellidos(apellidos){
        this.#apellidos = apellidos; 
    }

     /**
     * Devuelve el parámetro apellidos
     * @return {*} 
     * @memberof Trabajador
     */
    getApellidos(){
        return this.#apellidos; 
    }

    /**
     * Modifica el apellido
     * @param {*} apellidos
     * @memberof Trabajador
     */
    setApellidos(apellidos){
        this.#apellidos = apellidos; 
    }

    /**
     * Devuelve le parámetro direccion 
     * @return {*} 
     * @memberof Trabajador
     */
    getDireccion(){
        return this.#direccion; 
    }


    /**
     * Modifica la dirección
     * @param {*} direccion
     * @memberof Trabajador
     */
    setDireccion(direccion){
        this.#direccion = direccion; 
    }

    /**
     * Devuelve le parámetro sueldo
     * @return {*} 
     * @memberof Trabajador
     */
    getSueldo(){
        return this.#sueldo; 
    }


    /**
     * Modifica el sueldo
     * @param {*} sueldo
     * @memberof Trabajador
     */
    setSueldo(sueldo){
        this.#sueldo = sueldo; 
    }
    

}


/**
 *
 *
 * @class Informatico
 * @extends {Trabajador}
 */
class Informatico extends Trabajador{
    /**
     * Creates an instance of Informatico.
     * @param {*} nombre
     * @param {*} apellidos
     * @param {*} direccion
     * @param {*} sueldo
     * @param {*} puesto
     * @memberof Informatico
     */
    constructor(nombre, apellidos, direccion, sueldo, puesto){
        super(nombre, apellidos, direccion, sueldo);
        this.puesto = puesto; 
    }
}

/**
 *
 *
 * @class Conserje
 * @extends {Trabajador}
 */
class Conserje extends Trabajador{
    /**
     * Creates an instance of Conserje.
     * @param {*} nombre
     * @param {*} apellidos
     * @param {*} direccion
     * @param {*} sueldo
     * @param {*} turno
     * @memberof Conserje
     */
    constructor(nombre, apellidos, direccion, sueldo, turno){
        super(nombre, apellidos, direccion, sueldo);
        this.turno = turno; 
    }
}


//Pruebas

let i1 = new Informatico("Juan","Pérez", "Ribera del Beiro", 1600, "Programador");
console.log(i1.nombre); //No Funciona 
// console.log(i1.#nombre); No Funciona 
console.log(i1.getNombre()); //Funciona 

//i1.#sueldo = 1200; No funciona 
i1.setSueldo(1200); //Funciona 