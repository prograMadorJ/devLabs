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