
// let PremioLoteria = 1000
// let valorDoRoubo = 100


// console.log("Antes", PremioLoteria)


// function calculandoPrejuizoDoRoubo(valor, roubo) {
//     return valor - roubo
// }


// const resultadoCalc = calcularPrejuizoDoRoubo(PremioLoteria, 100) 

// console.log("Depois", resultadoCalc)



// Exercicio 1 - Conta Bancaria Caixa Eletronico

// let saldoContaCorrente = 1000
// let nomeCliente = "Cliente Fulano"
// let dataDeposito = ""
// let dataSaque = ""
// let operacao = ""
// const numeroContaCorrente = 1233450



// function depositar(nome, operacao, valorDeposito, saldo, numConta) {

//     function calcularSaldo(valor, saldo) {
//         return saldo + valor
//     }

//     const resultado = calcularSaldo(valorDeposito, saldo)

//     return  { texto: `
//     Comprovante de Deposito - Conta Corrente: ${numConta}

//     Cliente: ${nome}

//     Data e Hora: ${new Date().toLocaleString().replace(",", "")}

//     ----------------------------

//     Valor: ${valorDeposito}
//     Operação: ${operacao}

//     ----------------------------

//     Saldo da Conta: ${resultado}

//     `,
//     valor: resultado
//     }
// }

// const comprovanteDeposito = depositar("Fulano", "DEP", 100, saldoContaCorrente, numeroContaCorrente)

// console.log(comprovanteDeposito.texto)

// saldoContaCorrente = comprovanteDeposito.valor

// console.log(saldoContaCorrente)


// function depositar(nome, operacao, valorDeposito, saldo, numConta) {

//     console.log({numConta,nome,operacao,valorDeposito})

//     return saldo + valorDeposito
// }


// saldoContaCorrente = depositar("Fulano", "DEP", 100, saldoContaCorrente, numeroContaCorrente)


// console.log(saldoContaCorrente)

// // operacao de deposito
// saldo = saldo + 200
// dataDeposito = "01/02/2024 12:00"
// nomeCliente = "Cliente Fulano"
// operacao = "DEP"


// // operacao de saque
// saldo = saldo - 50
// dataSaque = "10/01/2024 12:00"
// nomeCliente = "Cliente Fulano"
// operacao = "SAQ"


// // operacao de pagamento
// saldo = saldo - 100
// dataSaque = "09/01/2024 12:00"
// nomeCliente = "Cliente Fulano"
// operacao = "PAG"

// // Exibir extrato da conta
// console.log(`

// Extrato da Conta - ${numeroContaCorrente}

// Cliente: ${nomeCliente}

// Data e Hora: ${new Date().toLocaleDateString()}

// ----------------------------

// ${dataSaque} - ${operacao} - ${saldo} 

// ----------------------------

// Saldo da Conta: ${saldo}


// `)


function funcao1() {
    return 1
}


function funcao2() {
    return 2
}


function funcao3() {
    return 0
}

const resultado = funcao1() + funcao2() / funcao3();


console.log(`Frutas: ${resultado}`);

// Arquitetura

//

// Engenharia

// Controle de Alunos


