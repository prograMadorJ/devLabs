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
 
 // Modelo de dados
 
 const medicamentoLosartana = new Medicamento(
    1, "Losartana", "", "categoria", "lote", "25/12/2025","10,00", "0.00", "dataCompra", "codFornecedor", "fonteCompra", "dosagem", 10, "descricao", "codLaboratorio", "tipoUso", "dataInicio", "previsaoTermino"
 );
 
 const medicamentoDipirona = new Medicamento(
    2, "Dipirona", "", "categoria", "lote", "14/09/2024","10,00", "0.00", "dataCompra", "codFornecedor", "fonteCompra", "dosagem", 10, "descricao", "codLaboratorio", "tipoUso", "dataInicio", "previsaoTermino"
 );
 
 // Teste de apresentação 
 
 console.log("Dados do Medicamento")
 console.table([medicamentoLosartana, medicamentoDipirona])
 
 
 console.log("");
 
 // Teste de validações dos dados
 
 class ValidarDadosMedicamento {
 
   validateRequired(medicamento) {
      if(!medicamento.nomeComercial) {
         throw "O campo nomeComercial é obrigatório";
      } else if (!medicamento.lote) {
         throw "O campo lote é obrigatório";
      } else if(!medicamento.validade) {
         throw "O campo validade é obrigatório";
      }
   }
 
   validateStrings(medicamento) {
      if(typeof medicamento.nomeComercial !== "string") {
         throw "O campo nomeComercial deve ser uma string";
      } else if (typeof medicamento.lote !== "string") {
         throw "O campo lote deve ser uma string";
      } else if(typeof medicamento.validade !== "string") {
         throw "O campo validade deve ser uma string";
      }
   }
 
   validateNumbers(medicamento) {
      if(isNaN(medicamento.codigo)) {
         throw "O campo codigo deve ser um número";
      } else if (isNaN(medicamento.quantidade)) {
         throw "O campo quantidade deve ser um número";
      }
   }
 }
 
 console.log("Resultado validação de dados");
 
 const validatorMedicamento = new ValidarDadosMedicamento();
 
 try {
   validatorMedicamento.validateStrings(medicamentoLosartana);
   validatorMedicamento.validateRequired(medicamentoLosartana);
   validatorMedicamento.validateNumbers(medicamentoLosartana);
   console.log("Medicamento Losartana validado com sucesso");
 } catch(err) {
   console.log(err);
 }
 
 console.log("");
 
 try {
   validatorMedicamento.validateStrings(medicamentoDipirona);
   validatorMedicamento.validateRequired(medicamentoDipirona);
   validatorMedicamento.validateNumbers(medicamentoDipirona);
   console.log("Medicamento Dipirona validado com sucesso");
 } catch(err) {
   console.log(err);
 }
 