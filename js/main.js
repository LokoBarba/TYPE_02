"use strict";
var escola;
(function (escola_1) {
    const formAluno = document.getElementById("formAluno");
    const btnCadastrar = document.getElementById("btnCadastrar");
    const btnCalcular = document.getElementById("btnCalcular");
    const resultado = document.getElementById("resultado");
    let aluno;
    btnCadastrar.addEventListener('click', (event) => {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const anoNasc = Number(document.getElementById("anoNasc").value);
        const cpf = document.getElementById("cpf").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const matricula = Number(document.getElementById("matricula").value);
        const curso = document.getElementById("curso").value;
        const escola = document.getElementById("escola").value;
        aluno = new escola.Aluno(nome, anoNasc, cpf, endereco, telefone, matricula, curso, escola);
        resultado.innerHTML = ` 
    <p><strong>Nome:</strong> ${aluno.nome}</p> 
    <p><strong>Idade:</strong> ${aluno.calcularIdade(new Date().getFullYear())} anos</p> 
    <p><strong>Curso:</strong> ${aluno.curso}</p> 
    <p><strong>Escola:</strong> ${aluno.escola}</p> 
    <p><strong>Matrícula:</strong> ${aluno.matricula}</p> 
  `;
    });
    btnCalcular.addEventListener('click', (event) => {
        event.preventDefault();
        const nota1 = Number(document.getElementById("nota1").value);
        const nota2 = Number(document.getElementById("nota2").value);
        const nota3 = Number(document.getElementById("nota3").value);
        const nota4 = Number(document.getElementById("nota4").value);
        if (aluno) {
            aluno.adicionarNota(nota1);
            aluno.adicionarNota(nota2);
            aluno.adicionarNota(nota3);
            aluno.adicionarNota(nota4);
            const media = aluno.calcularMedia();
            resultado.innerHTML += ` 
      <p><strong>Média:</strong> ${media.toFixed(2)}</p> 
    `;
        }
    });
})(escola || (escola = {}));
