/*const contador = 10;

for(let i=1; i <= contador; i++) {
    console.log(`número da contagem: ${i}`)
}*/
const contador = 15;

function iniciarContador() {
    for (let i=1; i <= contador; i++) {
    console.log(`número da contagem: ${i}`)
    }
};
iniciarContador();
//-------------------------------------------


/*const cestaFrutas = []

// adicionarFruta(fruta)

cestaFrutas.push('🍎')
cestaFrutas.push('🍌')
cestaFrutas.push('🍉')
cestaFrutas.push('🍐')
cestaFrutas.push('🍒')
cestaFrutas.push('🍊')
cestaFrutas.push('🍇')*/

const cestaFrutas = ['🍎', '🍌', '🍉', '🍐', '🍒', '🍊', '🍇'];

function adicionarFruta(fruta) {
    cestaFrutas.push(fruta);
    console.log(`Você adicionou ${fruta} a sua cesta.`);
}

adicionarFruta('🍎'); 
adicionarFruta('🍌');
adicionarFruta('🍉'); 
adicionarFruta('🍐'); 
adicionarFruta('🍒'); 
adicionarFruta('🍊'); 
adicionarFruta('🍇'); 

// printarCestaFrustas(cestaFrutas)
console.log(`Cesta de Frutas ${cestaFrutas.join(" ")}`)


//-------------------------------------------


/*const resultadoConcurso2020 = 800
const resultadoConcurso2021 = 500
const resultadoConcurso2022 = 300
const resultadoConcurso2023 = 900
const resultadoConcurso2024 = 100


const classificacaoFaseA = [1000, 700]
const classificacaoFaseB = [600, 500]
const classificacaoFaseC = [400, 300]
const classificacaoFaseD = [200, 100]

const textoClassificacao = "Classificado para a "*/

const resultConcurso2020 = 800;
const resultConcurso2021 = 500;
const resultConcurso2022 = 300;
const resultConcurso2023 = 900;
const resultConcurso2024 = 100;

const classificacaoFaseA = [1000, 700];
const classificacaoFaseB = [600, 500];
const classificacaoFaseC = [400, 300];
const classificacaoFaseD = [200, 100];

const textoClassificacao = "Classificado para a " 
const notaProva = 700 

function resultClassificacao(ano, notaProva) {
    let classificacao;

    switch (ano) {
        case 2020:
            classificacao = notaProva >= resultConcurso2020 ? 'Fase A' : 'Fase B';
            break
        case 2021:
            classificacao = notaProva >= resultConcurso2021  ? 'Fase B' : 'Fase C';
            break
        case 2022:
            classificacao = notaProva >= resultConcurso2022 ? 'Fase C' : 'Fase D';
            break
        case 2023:
            classificacao = notaProva >= resultConcurso2023 ? 'Fase D' : 'Eliminado';
            break
        case 2024:
            classificacao = notaProva <= resultConcurso2024 ? 'Eliminado' : 'Ano não encontrado';
        }

        return classificacao;
    }
console.log(`${textoClassificacao} ${resultClassificacao (2021, 50)}`);
console.log("==================================================================")


// cada if ser uma funcao

// 2020 -----------------------------------------------------

/*let [max, min] = classificacaoFaseA;
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
}*/

function verificarClassificacao2020() {
    let maxClassificacao = Math.max(...classificacaoFaseA);
    let minClassificacao = Math.min(...classificacaoFaseA);

    console.log(maxClassificacao, minClassificacao)

    console.log("2020")

    if (resultConcurso2020 <= maxClassificacao && resultConcurso2020 >= minClassificacao) {
        console.log(textoClassificacao + "Fase A");
    } else {
        console.log("Não classificado para a Fase A");
    }

     maxClassificacao = Math.max(...classificacaoFaseB);
     minClassificacao = Math.min(...classificacaoFaseB);

    if (resultConcurso2020 <= maxClassificacao && resultConcurso2020 >= minClassificacao) {
        console.log(textoClassificacao + "Fase B");
    } else {
        console.log("Não classificado para a Fase B");
    }

    maxClassificacao = Math.max(...classificacaoFaseC);
    minClassificacao = Math.min(...classificacaoFaseC);

    if (resultConcurso2020 <= maxClassificacao && resultConcurso2020 >= minClassificacao) {
        console.log(textoClassificacao + "Fase C");
    } else {
        console.log("Não classificado para a Fase C");
    }

    maxClassificacao = Math.max(...classificacaoFaseD);
    minClassificacao = Math.min(...classificacaoFaseD);

    if (resultConcurso2020 <= maxClassificacao && resultConcurso2020 >= minClassificacao) {
        console.log(textoClassificacao + "Fase D");
    } else {
        console.log("Não classificado para a Fase D");
    }
}

verificarClassificacao2020();

function verificarClassificacao2021() {
    const maxClassificacao = Math.max(...classificacaoFaseA);
    const minClassificacao = Math.min(...classificacaoFaseA);

    console.log("2021")

    if (resultConcurso2021 <= maxClassificacao && resultConcurso2021 >= minClassificacao) {
        console.log(textoClassificacao + "Fase A");
    } else {
        console.log("Não classificado para a Fase A");
    }

    if (resultConcurso2021 <= maxClassificacao && resultConcurso2021 >= minClassificacao) {
        console.log(textoClassificacao + "Fase B");
    } else {
        console.log("Não classificado para a Fase B");
    }

    if (resultConcurso2021 <= maxClassificacao && resultConcurso2021 >= minClassificacao) {
        console.log(textoClassificacao + "Fase C");
    } else {
        console.log("Não classificado para a Fase C");
    }

    if (resultConcurso2021 <= maxClassificacao && resultConcurso2021 >= minClassificacao) {
        console.log(textoClassificacao + "Fase D");
    } else {
        console.log("Não classificado para a Fase D");
    }
}

verificarClassificacao2021();

function verificarClassificacao2022() {
    const maxClassificacao = Math.max(...classificacaoFaseA);
    const minClassificacao = Math.min(...classificacaoFaseA);

    console.log("2022")

    if (resultConcurso2022 <= maxClassificacao && resultConcurso2022 >= minClassificacao) {
        console.log(textoClassificacao + "Fase A");
    } else {
        console.log("Não classificado para a Fase A");
    }

    if (resultConcurso2022 <= maxClassificacao && resultConcurso2022 >= minClassificacao) {
        console.log(textoClassificacao + "Fase B");
    } else {
        console.log("Não classificado para a Fase B");
    }

    if (resultConcurso2022 <= maxClassificacao && resultConcurso2022 >= minClassificacao) {
        console.log(textoClassificacao + "Fase C");
    } else {
        console.log("Não classificado para a Fase C");
    }

    if (resultConcurso2022 <= maxClassificacao && resultConcurso2022 >= minClassificacao) {
        console.log(textoClassificacao + "Fase D");
    } else {
        console.log("Não classificado para a Fase D");
    }
}

verificarClassificacao2022();

function verificarClassificacao2023() {
    const maxClassificacao = Math.max(...classificacaoFaseA);
    const minClassificacao = Math.min(...classificacaoFaseA);

    console.log("2023")

    if (resultConcurso2023 <= maxClassificacao && resultConcurso2023 >= minClassificacao) {
        console.log(textoClassificacao + "Fase A");
    } else {
        console.log("Não classificado para a Fase A");
    }

    if (resultConcurso2023 <= maxClassificacao && resultConcurso2023 >= minClassificacao) {
        console.log(textoClassificacao + "Fase B");
    } else {
        console.log("Não classificado para a Fase B");
    }

    if (resultConcurso2023 <= maxClassificacao && resultConcurso2023 >= minClassificacao) {
        console.log(textoClassificacao + "Fase C");
    } else {
        console.log("Não classificado para a Fase C");
    }

    if (resultConcurso2023 <= maxClassificacao && resultConcurso2023 >= minClassificacao) {
        console.log(textoClassificacao + "Fase D");
    } else {
        console.log("Não classificado para a Fase D");
    }
}

verificarClassificacao2023();

function verificarClassificacao2024() {
    let maxClassificacao = Math.max(...classificacaoFaseA);
    let minClassificacao = Math.min(...classificacaoFaseA);

    console.log("2024")

    if (resultConcurso2024 <= maxClassificacao && resultConcurso2024 >= minClassificacao) {
        console.log(textoClassificacao + "Fase A");
    } else {
        console.log("Não classificado para a Fase A");
    }

    maxClassificacao = Math.max(...classificacaoFaseB);
    minClassificacao = Math.min(...classificacaoFaseB);

    if (resultConcurso2024 <= maxClassificacao && resultConcurso2024 >= minClassificacao) {
        console.log(textoClassificacao + "Fase B");
    } else {
        console.log("Não classificado para a Fase B");
    }

    if (resultConcurso2024 <= maxClassificacao && resultConcurso2024 >= minClassificacao) {
        console.log(textoClassificacao + "Fase C");
    } else {
        console.log("Não classificado para a Fase C");
    }

    if (resultConcurso2024 <= maxClassificacao && resultConcurso2024 >= minClassificacao) {
        console.log(textoClassificacao + "Fase D");
    } else {
        console.log("Não classificado para a Fase D");
    }
}

verificarClassificacao2024();