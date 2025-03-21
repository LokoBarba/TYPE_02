namespace escola{
 
const formAluno = document.getElementById("formAluno") as HTMLFormElement; 
const btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement; 
const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement; 
const resultado = document.getElementById("resultado") as HTMLDivElement; 
 
let aluno: escola.Aluno; 
 
btnCadastrar.addEventListener('click', (event) => { 
  event.preventDefault(); 
 
  const nome = (document.getElementById("nome") as HTMLInputElement).value; 
  const anoNasc = Number((document.getElementById("anoNasc") as HTMLInputElement).value); 
  const cpf = (document.getElementById("cpf") as HTMLInputElement).value; 
  const endereco = (document.getElementById("endereco") as HTMLInputElement).value; 
  const telefone = (document.getElementById("telefone") as HTMLInputElement).value; 
  const matricula = Number((document.getElementById("matricula") as HTMLInputElement).value); 
  const curso = (document.getElementById("curso") as HTMLInputElement).value; 
  const escola = (document.getElementById("escola") as HTMLInputElement).value; 
 
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
  const nota1 = Number((document.getElementById("nota1") as HTMLInputElement).value); 
  const nota2 = Number((document.getElementById("nota2") as HTMLInputElement).value); 
  const nota3 = Number((document.getElementById("nota3") as HTMLInputElement).value); 
  const nota4 = Number((document.getElementById("nota4") as HTMLInputElement).value); 
 
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
}