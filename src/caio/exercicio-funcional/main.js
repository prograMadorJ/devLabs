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

const classificacaoFaseA = [1000, 700]
const classificacaoFaseB = [600, 500]
const classificacaoFaseC = [400, 300]
const classificacaoFaseD = [200, 100]

const textoClassificacao = "Classificado para a "



// cada if ser uma funcao

// 2020 -----------------------------------------------------

let [max, min] = classificacaoFaseA;
let ano = 2020
if(resultadoConcurso2020 >= min && resultadoConcurso2020 <= max) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

[max, min] = classificacaoFaseB;
if(resultadoConcurso2020 >= min && resultadoConcurso2020 <= max) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

[max, min] = classificacaoFaseC;
 if(resultadoConcurso2020 >= min && resultadoConcurso2020 <= max) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

[max, min] = classificacaoFaseD;
if(resultadoConcurso2020 >= min && resultadoConcurso2020 <= max) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}


// 2021 -----------------------------------------------------

[max, min] = classificacaoFaseA;
ano = 2021
if(resultadoConcurso2021 >= min && resultadoConcurso2021 <= max) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

[max, min] = classificacaoFaseB;
if(resultadoConcurso2021 >= min && resultadoConcurso2021 <= max) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

[max, min] = classificacaoFaseC;
 if(resultadoConcurso2021 >= min && resultadoConcurso2021 <= max) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

[max, min] = classificacaoFaseD;
if(resultadoConcurso2021 >= min && resultadoConcurso2021 <= max) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}


// 2022 -----------------------------------------------------

[max, min] = classificacaoFaseA;
ano = 2022
if(resultadoConcurso2022 >= min && resultadoConcurso2022 <= max) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

[max, min] = classificacaoFaseB;
if(resultadoConcurso2022 >= min && resultadoConcurso2022 <= max) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

[max, min] = classificacaoFaseC;
 if(resultadoConcurso2022 >= min && resultadoConcurso2022 <= max) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

[max, min] = classificacaoFaseD;
if(resultadoConcurso2022 >= min && resultadoConcurso2022 <= max) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}


// 2023 -----------------------------------------------------

[max, min] = classificacaoFaseA;
ano = 2023
if(resultadoConcurso2023 >= min && resultadoConcurso2023 <= max) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

[max, min] = classificacaoFaseB;
if(resultadoConcurso2023 >= min && resultadoConcurso2023 <= max) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

[max, min] = classificacaoFaseC;
 if(resultadoConcurso2023 >= min && resultadoConcurso2023 <= max) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

[max, min] = classificacaoFaseD;
if(resultadoConcurso2023 >= min && resultadoConcurso2023 <= max) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}


// 2024 -----------------------------------------------------

[max, min] = classificacaoFaseA;
ano = 2024
if(resultadoConcurso2024 >= min && resultadoConcurso2024 <= max) {
    console.log(`${textoClassificacao} FaseA - ${ano}`)
} 

[max, min] = classificacaoFaseB;
if(resultadoConcurso2024 >= min && resultadoConcurso2024 <= max) {
    console.log(`${textoClassificacao} FaseB - ${ano}`)
} 

[max, min] = classificacaoFaseC;
 if(resultadoConcurso2024 >= min && resultadoConcurso2024 <= max) {
    console.log(`${textoClassificacao} FaseC - ${ano}`)
} 

[max, min] = classificacaoFaseD;
if(resultadoConcurso2024 >= min && resultadoConcurso2024 <= max) {
    console.log(`${textoClassificacao} FaseD - ${ano}`)
}