
class Aluno {

    constructor(codigo, nome, dataNascimento, codFaixa, codResponsavel, dataUltimoExame, dataCadastro) {
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

    constructor(codigo, nome, rg, telefone, endereco) {
        this.codigo = codigo
        this.nome = nome
        this.rg = rg
        this.telefone = telefone
        this.endereco = endereco
    }

}

class PlanoDeAulasParticulares {

    constructor(codigo, quantSemana, codAluno) {
        this.codigo = codigo
        this.quantSemana = quantSemana
        this.codAluno = codAluno
    }

}

class Instituicao {

    constructor(codigo, nome, endereco, tipo, equipamentos) {
        this.codigo = codigo
        this.nome = nome
        this.endereco = endereco
        this.tipo = tipo
        this.equipamentos = equipamentos
    }

}


class Faixa {

    constructor(codigo, nome) {
        this.codigo = codigo
        this.nome = nome
    }

}

class Mensalidade {

    constructor(codigo, codPlanoAula, dataVencimento) {
        this.codigo = codigo
        this.codPlanoAula = codPlanoAula
        this.dataVencimento = dataVencimento

    }

}

// VALIDAÇÃO ALUNO!!


class ValidarDadosAluno {

    validateRequired(aluno) {
        // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
        if (!aluno.codigo) {
            throw "O campo código é obrigatório."
        } else if (!aluno.nome) {
            throw "O campo nome é obrigatório."
        } else if (!aluno.dataNascimento) {
            throw "O campo data de nascimento é obrigatório."
        } else if (!aluno.codFaixa) {
            throw "O campo 'código da faixa' é obrigatório."
        } else if (!aluno.codResponsavel) {
            throw "O campo 'código do responsável' é obrigatório."
        } else if (!aluno.dataUltimoExame) {
            throw "O campo 'data do último exame de faixa' é obrigatório."
        } else if (!aluno.dataCadastro) {
            "O campo 'data do cadastro' é obrigatório."
        }
    }

    validateStrings(aluno) {
        if (typeof aluno.nome !== "string") {
            throw "o campo nome deve ser uma string."
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

    //VALIDAÇÃO RESPONSÁVEL!!

    validateRequired(responsavel) {
        // if(carro.modelo === null || carro.modelo === undefined || carro.modelo === "") {
        if (!responsavel.codigo) {
            throw "O campo código é obrigatório."
        } else if (!responsavel.nome) {
            throw "O campo nome é obrigatório."
        } else if (!responsavel.rg) {
            throw "O campo rg é obrigatório."
        } else if (!responsavel.telefone) {
            throw "O campo telefone é obrigatório."
        } else if (!Responsavel.endereco) {
            throw "O campo 'endereço' é obrigatório."
        }
    }

    validateStrings(responsavel) {
        if (typeof responsavel.nome !== "string") {
            throw "o campo nome deve ser uma string."
        } else if (typeof responsavel.endereco !== "string") {
            throw "o campo 'endereço' deve ser uma string."
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
