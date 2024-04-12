
class Aluno {
    
    constructor (codigo, nome, dataNascimento, codFaixa, codResponsavel, dataUltimoExame, dataCadastro) {
    this.codigo = codigo
    this.nome = nome
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