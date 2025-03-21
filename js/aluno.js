"use strict";
var escola;
(function (escola_1) {
    class Aluno extends escola_1.Pessoa {
        constructor(nome, anoNasc, cpf, endereco, telefone, matricula, curso, escola) {
            super(nome, anoNasc, cpf, endereco, telefone);
            this._matricula = matricula;
            this._curso = curso;
            this._escola = escola;
            this._notas = [];
        }
        // Getters e Setters 
        get matricula() {
            return this._matricula;
        }
        set matricula(matricula) {
            this._matricula = matricula;
        }
        get curso() {
            return this._curso;
        }
        set curso(curso) {
            this._curso = curso;
        }
        get escola() {
            return this._escola;
        }
        set escola(escola) {
            this._escola = escola;
        }
        // Método para adicionar nota 
        adicionarNota(nota) {
            this._notas.push(nota);
        }
        // Método para calcular a média 
        calcularMedia() {
            return this._notas.reduce((acc, nota) => acc + nota, 0) / this._notas.length;
        }
    }
    escola_1.Aluno = Aluno;
})(escola || (escola = {}));
