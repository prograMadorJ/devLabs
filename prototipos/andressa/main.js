console.log(
   `
    d888888o.   \`8.\`8888.      ,8' d888888o. 8888888 8888888888 8 8888888888            ,8.       ,8.          8 8888888888   8 888888888o.      
   .\`8888:' \`88. \`8.\`8888.    ,8'.\`8888:' \`88.     8 8888       8 8888                 ,888.     ,888.         8 8888         8 8888    \`^888.   
   8.\`8888.   Y8  \`8.\`8888.  ,8' 8.\`8888.   Y8     8 8888       8 8888                .\`8888.   .\`8888.        8 8888         8 8888        \`88. 
   \`8.\`8888.       \`8.\`8888.,8'  \`8.\`8888.         8 8888       8 8888               ,8.\`8888. ,8.\`8888.       8 8888         8 8888         \`88 
    \`8.\`8888.       \`8.\`88888'    \`8.\`8888.        8 8888       8 888888888888      ,8'8.\`8888,8^8.\`8888.      8 888888888888 8 8888          88 
     \`8.\`8888.       \`8. 8888      \`8.\`8888.       8 8888       8 8888             ,8' \`8.\`8888' \`8.\`8888.     8 8888         8 8888          88 
      \`8.\`8888.       \`8 8888       \`8.\`8888.      8 8888       8 8888            ,8'   \`8.\`88'   \`8.\`8888.    8 8888         8 8888         ,88 
  8b   \`8.\`8888.       8 8888   8b   \`8.\`8888.     8 8888       8 8888           ,8'     \`8.\`'     \`8.\`8888.   8 8888         8 8888        ,88' 
  \`8b.  ;8.\`8888       8 8888   \`8b.  ;8.\`8888     8 8888       8 8888          ,8'       \`8        \`8.\`8888.  8 8888         8 8888    ,o88P'   
   \`Y8888P ,88P'       8 8888    \`Y8888P ,88P'     8 8888       8 888888888888 ,8'         \`         \`8.\`8888. 8 888888888888 8 888888888P'
   `
)

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

 class Categoria {
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


 /*

 Cadastrar os cumpons fiscais
 Pesquisa de medicamentos
 Relatorio mensal de medicamentos registrados
 
 */

 class Cadastro {
   registrarMedicamento(medicamento) {
      console.log(medicamento)
   }
 }


 // preciso cadastrar o medicamento com os dados

 const categoria = new Categoria(1, "soro fisiologico")
 const fornecedor = new Fornecedor(1, "Drogasil", "Rua Barros Falcão, 324, Matatu, Salvador-BA", "", "www.drogasil.com.br")
 const laboratorio = new Laboratorio(1, "Needs")
 
 const medicamento = new Medicamento (77824, "Needs sol fisio", "", categoria.codigo, "33079000", "00/03/2028", 6.19, 0, "21/04/2024", fornecedor.codigo, "app", "", "1 un", "Solução fisiológica", laboratorio.codigo, "Externo", "", "")

 const cadastro = new Cadastro()
 cadastro.registrarMedicamento(medicamento)









 class Pesquisa {
   pesquisarMedicamento() {

   }
 }

 class Relatorio {
   emitirMensal() {

   }
 }