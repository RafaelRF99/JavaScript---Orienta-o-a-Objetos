export class Cliente {
    // PUBLICOS
    nome;

     // PRIVADOS
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf
    }

}