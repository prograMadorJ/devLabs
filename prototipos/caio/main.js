

class Aluno {
    
    constructor (codigo, nome, dataNascimento, codFaixa, codResponsavel, dataUltimoExame, dataCadastro) {
    this.codigo = codigo
    this.nome = nome // STRING
    this.dataNascimento = dataNascimento
    this.codFaixa = codFaixa
    this.codResponsavel = codResponsavel
    this.dataUltimoExame = dataUltimoExame
    this.dataCadastro = dataCadastro

}

}

class Responsavel {
    
    constructor (codigo, nome, rg, telefone, endereco) {
    this.codigo = codigo
    this.nome = nome
    this.rg = rg
    this.telefone = telefone
    this.endereco = endereco
}

}

class PlanoDeAulasParticulares {
    
    constructor (codigo, quantSemana, codAluno) {
    this.codigo = codigo
    this.quantSemana = quantSemana
    this.codAluno = codAluno
}

}

class Instituicao {
    
    constructor (codigo, nome, endereco, tipo, equipamentos) {
    this.codigo = codigo
    this.nome = nome
    this.endereco = endereco
    this.tipo = tipo
    this.equipamentos = equipamentos
}

}

class Faixa {
    
    constructor (codigo, nome) {
    this.codigo = codigo
    this.nome = nome
}

}

class Mensalidade {
    
    constructor (codigo, codPlanoAula, dataVencimento) {
    this.codigo = codigo
    this.codPlanoAula = codPlanoAula
    this.dataVencimento = dataVencimento

}

}

// VALIDAÇÃO ALUNO!!

validateRequired(Aluno) {
    // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
    if(!Aluno.codigo) {
       throw "O campo código é obrigatório."
    } else if (!Aluno.nome) {
       throw "O campo nome é obrigatório."
    } else if(!Aluno.dataNascimento) {
       throw "O campo data de nascimento é obrigatório."
    } else if(!Aluno.codFaixa) {
        throw "O campo 'código da faixa' é obrigatório."
    } else if(!Aluno.codResponsavel) {
        throw "O campo 'código do responsável' é obrigatório."
    } else if(!Aluno.dataUltimoExame) {
        throw "O campo 'data do último exame de faixa' é obrigatório."
    } else if(!Aluno.dataCadastro) {
        "O campo 'data do cadastro' é obrigatório."
    }
 }

 validateStrings(Aluno) {
    if(typeof Aluno.nome !== "string") {
       throw "o campo nome deve ser uma string."
    } 
 }

 validateNumeric(Aluno) {
    if (isNaN(Aluni.codigo)) {
        throw "O campo código deve ser numérico.";
    } else if (isNaN(Aluno.dataNascimento)) {
        throw "O campo data de nascimento deve ser numérico.";
    } else if (isNaN(Aluno.codFaixa)) {
        throw "O campo 'código da faixa' deve ser numérico.";
    } else if (isNaN(Aluno.codResponsavel)) {
        throw "O campo 'código do responsável' deve ser numérico.";
    } else if (isNaN(Aluno.dataUltimoExame)) {
        throw "O campo 'data do último exame de faixa' deve ser numérico.";
    } else if (isNaN(Aluno.dataCadastro)) {
        throw "O campo 'data do cadastro' deve ser numérico.";
    }
}

//VALIDAÇÃO RESPONSÁVEL!!

validateRequired(Responsavel) {
    // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
    if(!Responsavel.codigo) {
       throw "O campo código é obrigatório."
    } else if (!Responsavel.nome) {
       throw "O campo nome é obrigatório."
    } else if(!Responsavel.rg) {
       throw "O campo rg é obrigatório."
    } else if(!Responsavel.telefone) {
        throw "O campo telefone é obrigatório."
    } else if(!Responsavel.endereco) {
        throw "O campo 'endereço' é obrigatório."
    } 
 }

 validateStrings(Aluno) {
    if(typeof Responsavel.nome !== "string") {
       throw "o campo nome deve ser uma string."
    } else if(typeof Responsavel.endereco !== "string") {
        throw "o campo 'endereço' deve ser uma string."
    }
 }

 validateNumeric(Responsavel) {
    if (isNaN(Responsavel.codigo)) {
        throw "O campo código deve ser numérico.";
    } else if (isNaN(Responsavel.rg)) {
        throw "O campo 'rg' deve ser numérico.";
    } else if (isNaN(Responsavel.telefone)) {
        throw "O campo 'telefone' deve ser numérico.";
    }
}