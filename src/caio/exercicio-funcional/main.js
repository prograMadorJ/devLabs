const contador = 10;

for(let i=1; i <= contador; i++) {
    console.log(`número da contagem: ${i}`)

    if (i % 2 == 1) {
        console.log ("O número é ímpar!")
    }

    else if (i % 2 == 0) {
        console.log ("O número é par!")
    }


}


//-------------------------------------------


const readlineSync = require('readline-sync');

const cestaFrutas = []

cestaFrutas.push('🍎')
cestaFrutas.push('🍌')
cestaFrutas.push('🍉')
cestaFrutas.push('🍐')
cestaFrutas.push('🍒')
cestaFrutas.push('🍊')
cestaFrutas.push('🍇')

console.log(`Cesta de Frutas ${cestaFrutas.join(" ")}`)

var fruta = readlineSync.question("Insira um emoji da cesta de frutas:");

if (fruta == "🍎") {
    console.log ("Isso é uma maçã!")
}
else if (fruta == "🍌") {
    console.log ("Isso é uma banana!")
}
else if (fruta == "🍉") {
    console.log ("Isso é uma melancia!")
}
else if (fruta == "🍐") {
    console.log ("Isso é uma pera!")
}
else if (fruta == "🍒") {
    console.log ("Isso é uma cereja!")
}
else if (fruta == "🍊") {
    console.log ("Isso é uma laranja!")
}
else if (fruta == "🍇") {
    console.log ("Isso é um cacho de uvas!")
}
else {
    console.log ("Fruta inválida!")
}


//-------------------------------------------


const resultadoConcurso2020 = 800
const resultadoConcurso2021 = 500
const resultadoConcurso2022 = 300
const resultadoConcurso2023 = 900
const resultadoConcurso2024 = 100

const maximaFaseA = 1000
const minimaFaseA = 700
const maximaFaseB = 699
const minimaFaseB = 500
const maximaFaseC = 499
const minimaFaseC = 300
const maximaFaseD = 299
const minimaFaseD = 100

const textoClassificacao = "Classificado para a "



// cada if ser uma funcao

// 2020 -----------------------------------------------------


let ano = 2020
function verificarClassificacao2020 () {
if(resultadoConcurso2020 >= minimaFaseA && resultadoConcurso2020 <= maximaFaseA) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

if(resultadoConcurso2020 >= minimaFaseB && resultadoConcurso2020 <= maximaFaseB) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

 if(resultadoConcurso2020 >= minimaFaseC && resultadoConcurso2020 <= maximaFaseC) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

if(resultadoConcurso2020 >= minimaFaseD && resultadoConcurso2020 <= maximaFaseD) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}
}

// 2021 -----------------------------------------------------

ano = 2021
function verificarClassificacao2021 (resultadoConcurso2021) {
if(resultadoConcurso2021 >= minimaFaseA && resultadoConcurso2021 <= maximaFaseA) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

if(resultadoConcurso2021 >= minimaFaseB && resultadoConcurso2021 <= maximaFaseB) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

 if(resultadoConcurso2021 >= minimaFaseC && resultadoConcurso2021 <= maximaFaseC) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

if(resultadoConcurso2021 >= minimaFaseD && resultadoConcurso2021 <= maximaFaseD) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}
}

// 2022 -----------------------------------------------------

ano = 2022
function verificarClassificacao2022 (resultadoConcurso2022) {
if(resultadoConcurso2022 >= minimaFaseA && resultadoConcurso2022 <= maximaFaseA) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

if(resultadoConcurso2022 >= minimaFaseB && resultadoConcurso2022 <= maximaFaseB) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

 if(resultadoConcurso2022 >= minimaFaseC && resultadoConcurso2022 <= maximaFaseC) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

if(resultadoConcurso2022 >= minimaFaseD && resultadoConcurso2022 <= maximaFaseD) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}
}

// 2023 -----------------------------------------------------

ano = 2023
function verificarClassificacao2023 (resultadoConcurso2023) {
if(resultadoConcurso2023 >= minimaFaseA && resultadoConcurso2023 <= maximaFaseA) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

if(resultadoConcurso2023 >= minimaFaseB && resultadoConcurso2023 <= maximaFaseB) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

 if(resultadoConcurso2023 >= minimaFaseC && resultadoConcurso2023 <= maximaFaseC) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

if(resultadoConcurso2023 >= minimaFaseD && resultadoConcurso2023 <= maximaFaseD) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}
}

// 2024 -----------------------------------------------------

ano = 2024
function verificarClassificacao2024 (resultadoConcurso2024) {
if(resultadoConcurso2024 >= minimaFaseA && resultadoConcurso2024 <= maximaFaseA) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

if(resultadoConcurso2024 >= minimaFaseB && resultadoConcurso2024 <= maximaFaseB) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

 if(resultadoConcurso2024 >= minimaFaseC && resultadoConcurso2024 <= maximaFaseC) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

if(resultadoConcurso2024 >= minimaFaseD && resultadoConcurso2024 <= maximaFaseD) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}
}

function verificarClassificacao2020 (resultadoConcurso2020)