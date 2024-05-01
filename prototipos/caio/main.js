console.log(
    `
    __  .______   .______     ______   .__   __.      _______  _______     _______.___________.  ______   .______          _______   _______     _______     _______.  ______   ______    __          ___      
    |  | |   _  \\  |   _  \\   /  __  \\  |  \\ |  |     /  _____||   ____|   /       |           | /  __  \\  |   _  \\        |       \\ |   ____|   |   ____|   /       | /      | /  __  \\  |  |        /   \\     
    |  | |  |_)  | |  |_)  | |  |  |  | |   \\|  |    |  |  __  |  |__     |   (----\`---|  |----\`|  |  |  | |  |_)  |       |  .--.  ||  |__      |  |__     |   (----\`|  ,----'|  |  |  | |  |       /  ^  \\    
    |  | |   ___/  |   ___/  |  |  |  | |  . \`  |    |  | |_ | |   __|     \\   \\       |  |     |  |  |  | |      /        |  |  |  ||   __|     |   __|     \\   \\    |  |     |  |  |  | |  |      /  /_\\  \\   
    |  | |  |      |  |      |  \`--'  | |  |\\   |    |  |__| | |  |____.----)   |      |  |     |  \`--'  | |  |\\  \\----.   |  '--'  ||  |____    |  |____.----)   |   |  \`----.|  \`--'  | |  \`----./  _____  \\  
    |__| | _|      | _|       \\______/  |__| \\__|     \\______| |_______|_______/       |__|      \\______/  | _| \`._____|   |_______/ |_______|   |_______|_______/     \\______| \\______/  |_______/__/     \\__\\ 
                                                                                                                                                                                                                
    `
)



class Responsavel {
  constructor(codigo, nome, rg, telefone, endereco) {
    this.codigo = codigo;
    this.nome = nome;
    this.rg = rg;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}


class Instituicao {
    constructor(codigo, nome, endereco, tipo, equipamentos) {
      this.codigo = codigo;
      this.nome = nome;
      this.endereco = endereco;
      this.tipo = tipo;
      this.equipamentos = equipamentos;
    }
  }

class Aluno {
    constructor(
      codigo,
      nome,
      dataNascimento,
      codFaixa,
      codInstituicao,
      codResponsavel,
      dataUltimoExame,
      dataCadastro
    ) {
      this.codigo = codigo;
      this.nome = nome; // STRING
      this.dataNascimento = dataNascimento;
      this.codFaixa = codFaixa;
      this.codInstituicao = codInstituicao; // cadastrar uma instituicao de nome Particular para alunos particulares
      this.codResponsavel = codResponsavel; // pode registrar com null caso nao tiver responsavel
      this.dataUltimoExame = dataUltimoExame;
      this.dataCadastro = dataCadastro;
    }
  }

class PlanoDeAulasParticulares {
  constructor(codigo, quantSemana, codAluno) {
    this.codigo = codigo;
    this.quantSemana = quantSemana;
    this.codAluno = codAluno;
  }
}


class Faixa {
  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

class Mensalidade {
  constructor(codigo, codAluno, valor, dataVencimento) {
    this.codigo = codigo;
    this.codAluno = codAluno;
    this.valor = valor;
    this.dataVencimento = dataVencimento;
  }
}

// VALIDAÇÃO ALUNO!!

class ValidarDadosAluno {
  validateRequired(aluno) {
    // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
    if (!aluno.codigo) {
      throw "O campo código é obrigatório.";
    } else if (!aluno.nome) {
      throw "O campo nome é obrigatório.";
    } else if (!aluno.dataNascimento) {
      throw "O campo data de nascimento é obrigatório.";
    } else if (!aluno.codFaixa) {
      throw "O campo 'código da faixa' é obrigatório.";
    } else if (!aluno.codResponsavel) {
      throw "O campo 'código do responsável' é obrigatório.";
    } else if (!aluno.dataUltimoExame) {
      throw "O campo 'data do último exame de faixa' é obrigatório.";
    } else if (!aluno.dataCadastro) {
      ("O campo 'data do cadastro' é obrigatório.");
    }
  }

  validateStrings(aluno) {
    if (typeof aluno.nome !== "string") {
      throw "o campo nome deve ser uma string.";
    }
  }

  validateNumeric(aluno) {
    if (isNaN(aluno.codigo)) {
      throw "O campo código deve ser numérico.";
    } else if (isNaN(aluno.dataNascimento)) {
      throw "O campo data de nascimento deve ser numérico.";
    } else if (isNaN(aluno.codFaixa)) {
      throw "O campo 'código da faixa' deve ser numérico.";
    } else if (isNaN(aluno.codResponsavel)) {
      throw "O campo 'código do responsável' deve ser numérico.";
    } else if (isNaN(aluno.dataUltimoExame)) {
      throw "O campo 'data do último exame de faixa' deve ser numérico.";
    } else if (isNaN(aluno.dataCadastro)) {
      throw "O campo 'data do cadastro' deve ser numérico.";
    }
  }
}

class ValidarDadosResponsavel {
  //VALIDAÇÃO RESPONSÁVEL!!

  validateRequired(responsavel) {
    // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
    if (!responsavel.codigo) {
      throw "O campo código é obrigatório.";
    } else if (!responsavel.nome) {
      throw "O campo nome é obrigatório.";
    } else if (!responsavel.rg) {
      throw "O campo rg é obrigatório.";
    } else if (!responsavel.telefone) {
      throw "O campo telefone é obrigatório.";
    } else if (!responsavel.endereco) {
      throw "O campo 'endereço' é obrigatório.";
    }
  }

  validateStrings(responsavel) {
    if (typeof responsavel.nome !== "string") {
      throw "o campo nome deve ser uma string.";
    } else if (typeof responsavel.endereco !== "string") {
      throw "o campo 'endereço' deve ser uma string.";
    }
  }

  validateNumeric(responsavel) {
    if (isNaN(responsavel.codigo)) {
      throw "O campo código deve ser numérico.";
    } else if (isNaN(responsavel.rg)) {
      throw "O campo 'rg' deve ser numérico.";
    } else if (isNaN(responsavel.telefone)) {
      throw "O campo 'telefone' deve ser numérico.";
    }
  }
}

// console.log("Resultado validação de dados");

// const validate = new ValidarDadosAluno();
// const aluno = new Aluno(
//   1,
//   "Fulano de Tal",
//   "20/10/2000",
//   1,
//   1,
//   "01/03/2024",
//   "25/03/2024"
// );

// try {
//   validate.validateRequired(aluno);
//   console.log("Aluno validado com sucesso");
// } catch (err) {
//   console.log(err);
// }

/*
Cadastrar Aluno
Cadastrar Responsavel
Cadastrar Plano Aula
Cadastrar Mesalidade

Pesquisa Nome dados aluno

Relatorio Mensaldiade Atrasados 02/02/2024 - hoje
Relatorio Mensalidade Pagos 02/02/2024 - hoje
Relario Mensaldiade Geral 


*/

class Cadastro {
    registrarAluno(aluno) {
        console.log(aluno)
    }
}


 // preciso cadastrar o aluno com os dados

const faixa = new Faixa(1, "BRANCA")
const instituicao = new Instituicao(1, "PARTICULAR", "", "particular", "")
const responsavel = new Responsavel(1, "José", "012345678", "(99) 99999-9999", "Rua Do Todes, 69, La Ele-BA")

const aluno = new Aluno(123, "Joaquim", "12/03/2016", faixa.codigo, instituicao.codigo, responsavel.codigo, "04/04/2021", "01/05/2024")


const cadastro = new Cadastro()


cadastro.registrarAluno(aluno)


