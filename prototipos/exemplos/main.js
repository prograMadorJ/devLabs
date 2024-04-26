// Paradgma de programação
// Orientado a Objeto

class Carro {
   constructor(codigo, modelo, placa, velocidade, quantRodas, codigoFabrica) {
    this.codigo = codigo
    this.modelo = modelo
    this.placa = placa
    this.velocidade = velocidade
    this.quantRodas = quantRodas
    this.codigoFabrica = codigoFabrica
   }
}


class Fabrica {
   constructor(codigo, nomeFantasia, cnpj) {
      this.codigo = codigo
      this.nomeFantasia = nomeFantasia
      this.cnpj = cnpj
   }
}



// Modelo de Dados

const fabricaHyundai = new Fabrica(100, "Hyundai", 1231234354546)

const fabricaToyota = new Fabrica(200, "Toyota", 1231234354546)

const carroCreta = new Carro(1,"SEDAN","12321","300km", 1, fabricaHyundai.codigo)

const carroCorolla = new Carro(2,"SEDAN","12321","300km",1, fabricaToyota.codigo)

// Teste de apresentação 

console.log("Dados das Fábricas")
console.table([fabricaHyundai, fabricaToyota])


console.log("")

console.log("Dados dos Carros")
console.table([carroCreta, carroCorolla])


// Teste de Validações dos Dados
// tipo de dados dos campos
// obrigatoriedade de preenchimento dos campos


class ValidarDadosCarro {

   validateRequired(carro) {
      // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
      if(!carro.modelo) {
         throw "o campo modelo é obrigatório"
      } else if (!carro.placa) {
         throw "o campo placa é obrigatório"
      } else if(!carro.velocidade) {
         throw "o campo velocidade é obrigatório"
      }
   }

   validateStrings(carro) {
      if(typeof carro.modelo !== "string") {
         throw "o campo modelo deve ser uma string"
      } else if (typeof carro.placa !== "string") {
         throw "o campo placa deve ser uma string"
      } else if(typeof carro.velocidade !== "string") {
         throw "o campo velocidade deve ser uma string"
      }
   }

   validateNumbers(codigo, quantRodas, codigoFabrica) {

   }
}

console.log("Resultado validação de dados")

const validator = new ValidarDadosCarro()

try {
   carroCorolla.modelo = 123123
   console.log("Validar strings")
   console.log(validator.validateStrings(carroCorolla))

} catch(err) {
   console.log(err)
}

console.log("")
try {
   carroCorolla.modelo = null
   console.log("Validar campos obrigatorios")
   console.log(validator.validateRequired(carroCorolla))
} catch(err) {
   console.log(err)
}




class Medicamento {
   constructor(codigo, nomeComercial, nomeGenerico, categoria, lote, validade, preco, precoDesconto, dataCompra, codFornecedor, fonteCompra, dosagem, quantidade, descricao, codLaboratorio, tipoUso, dataInicio, previsaoTermino) {
       this.codigo = codigo;
       this.nomeComercial = nomeComercial;
       this.nomeGenerico = nomeGenerico;
       this.categoria = categoria;
       this.lote = lote;
       this.validade = validade;
       this.preco = preco;
       this.precoDesconto = precoDesconto;
       this.dataCompra = dataCompra;
       this.codFornecedor = codFornecedor;
       this.fonteCompra = fonteCompra;
       this.dosagem = dosagem;
       this.quantidade = quantidade;
       this.descricao = descricao;
       this.codLaboratorio = codLaboratorio;
       this.tipoUso = tipoUso;
       this.dataInicio = dataInicio;
       this.previsaoTermino = previsaoTermino;
   }
}

class Laboratorio {
   constructor(codigo, nome) {
       this.codigo = codigo;
       this.nome = nome;
   }
}

class Fornecedor {
   constructor(codigo, nome, endereco, telefone, site) {
       this.codigo = codigo;
       this.nome = nome;
       this.endereco = endereco;
       this.telefone = telefone;
       this.site = site;
   }
}



// Modelo de Dados

const medicamentoLosartana = new Medicamento(
   1, "Losartana", "", "categoria", "lote", "10/02/22024","10,00", "0.00"
)

const medicamentoDipirona = new Medicamento(
   1, "Dipirona", "", "categoria", "lote", "10/02/22024","10,00", "0.00"
)

// Teste de apresentação 

console.log("Dados do Medicamento")
console.table([medicamentoLosartana, medicamentoDipirona])


console.log("")




// Teste de Validações dos Dados
// tipo de dados dos campos
// obrigatoriedade de preenchimento dos campos


class ValidarDadosMedicamento {

  validateRequired(medicamento) {
     // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
     if(!medicamento.nomeComercial) {
        throw "o campo nomeComercial é obrigatório"
     } else if (!carro.placa) {
        throw "o campo placa é obrigatório"
     } else if(!carro.velocidade) {
        throw "o campo velocidade é obrigatório"
     }
  }

  validateStrings(medicamento) {
     if(typeof medicamento.nomeComercial !== "string") {
        throw "o campo nomeComercial deve ser uma string"
     } else if (typeof medicamento.placa !== "string") {
        throw "o campo placa deve ser uma string"
     } else if(typeof medicamento.velocidade !== "string") {
        throw "o campo velocidade deve ser uma string"
     }
  }

  validateNumbers(codigo, quantRodas, codigoFabrica) {

  }
}

console.log("Resultado validação de dados")

const validatorMedicamento = new ValidarDadosCarro()

try {
  carroCorolla.modelo = 123123
  console.log("Validar strings")
  console.log(validatorMedicamento.validateStrings(carroCorolla))

} catch(err) {
  console.log(err)
}

console.log("")
try {
  carroCorolla.modelo = null
  console.log("Validar campos obrigatorios")
  console.log(validatorMedicamento.validateRequired(carroCorolla))
} catch(err) {
  console.log(err)
}


// Regras de Negocio

class CampanhaVendas {
   vender() {

   }

}

class Relatorio {
   gerarSemanal() {
      
   }

   gerarAnual() {
      
   }

   gerarMensal() {

   }
}



class Financeiro {
   registrarMensalidade() {
      // enviarMensagem()
   }

   consultarMensalidades() {
      // pagos
      // nao pagos tempo de atrasados
   }
}