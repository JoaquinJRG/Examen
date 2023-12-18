
/**
 * Función que devuelve la fecha formateada 
 * @param {*} fecha
 * @return {*} 
 */
let formatearFecha = (fecha) => {

    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
                 "agosto", "septiembre", "octubre", "noviembre", "diciembre"]; 
    
    let dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "sabado"]; 

    return `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} del año de nuestro señor de ${fecha.getFullYear()}`; 

}


let fecha = new Date(Date.now()); 

console.log(formatearFecha(fecha)); 