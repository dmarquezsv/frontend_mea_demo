//Las interfaces actúan como una especie de  "documentación viva" en tu código. 
//Cualquiera que lea tu código sabe exactamente qué se espera 
//de un objeto que implementa una interfaz.

export interface UserInterface {
    id: number;      // id debe ser un número
    name: string;    // name debe ser una cadena de texto
    city: string;    // city debe ser una cadena de texto
}  