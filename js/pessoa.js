"use strict";
var escola;
(function (escola) {
    class Pessoa {
        constructor(nome, anoNasc, cpf, endereco, telefone) {
            this._nome = nome;
            this._anoNasc = anoNasc;
            this._cpf = cpf;
            this._endereco = endereco;
            this._telefone = telefone;
        }
        // Getters e Setters 
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        get cpf() {
            return this._cpf;
        }
        set cpf(cpf) {
            this._cpf = cpf;
        }
        get endereco() {
            return this._endereco;
        }
        set endereco(endereco) {
            this._endereco = endereco;
        }
        get telefone() {
            return this._telefone;
        }
        set telefone(telefone) {
            this._telefone = telefone;
        }
        // Método para calcular a idade 
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
    }
    escola.Pessoa = Pessoa;
})(escola || (escola = {}));
