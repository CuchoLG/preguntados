const imput = require("prompt-sync")({sigint: true});

let cancelar = false
let cadenaImp = ""
let cadena = ""
let digitostotales = 0
const digitos ="123456789"

while (!cancelar) {
    cadenaImp = imput ("Escribe texto para que sea concatenado, cuando acabes pon 'cancelar'==> ")

    if(cadenaImp.toLowerCase() === "cancelar"){
        break
    }
    cadena = cadena + cadenaImp 
    

    //contador
    
    for (let i = 0; i < cadenaImp.length; i++) {
        for (let j = 0; j < digitos.length; j++) {
            if(cadenaImp.charAt(i) === digitos.charAt(j)){
                 digitostotales = digitostotales +1
            }
        }
    }
} 
console.log("La suma de tus cadenas es: " + cadena);
console.log("Las vocales totales son ==> " + digitostotales);