const scanner = require("prompt-sync")({sigint: true});


let capitalprevisto
let sumacapitaprevisto
let PorcentajeAleatoriedad  = Math.floor(Math.random()*10)
let capitalfinal

const DineroIngresa = scanner("Cuanto dinero quieres invertir ==> ")
// console.log("DEBUG: " + DineroIngresa)

const InteresAnual = scanner("a cuanto interes anual? ==> ")
// console.log("DEBUG: "+ InteresAnual)

const NumeroAños= scanner("a cuantos años? ==> ")
// console.log("DEBUG: "+ NumeroAños)

console.log("Has invertido ==> " + DineroIngresa + "€ al " + InteresAnual + "% de interés durante " + NumeroAños + " años" )


 capitalprevisto = ((Number(InteresAnual/100) * Number(DineroIngresa))*Number(NumeroAños))
 sumacapitaprevisto = (Number(DineroIngresa) + Number(capitalprevisto))

    console.log("el capital previsto es ==> " + sumacapitaprevisto + " €")
    console.log("la aleatoriedad ha sido ==> " + PorcentajeAleatoriedad + " %")

    if(sumacapitaprevisto){
        capitalfinal = Number(sumacapitaprevisto * Number(PorcentajeAleatoriedad/100))+Number(DineroIngresa)
        console.log("El capital final es:" + Math.ceil(capitalfinal) + "€")
    }