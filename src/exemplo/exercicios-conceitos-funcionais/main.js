
let PremioLoteria = 1000
let valorDoRoubo = 100


console.log("Antes", PremioLoteria)

function calcularPrejuizoDoRoubo(valor, roubo) {
    return valor - roubo
}

const resultadoCalc = calcularPrejuizoDoRoubo(PremioLoteria, 100) 

console.log("Depois", resultadoCalc)