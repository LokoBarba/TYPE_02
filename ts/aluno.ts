namespace escola { 
    export abstract class Aluno extends Pessoa { 
      private _matricula: number; 
      private _curso: string; 
      private _escola: string; 
      private _notas: number[]; 
   
      constructor(nome: string, anoNasc: number, cpf: string, endereco: string, telefone: string, 
                  matricula: number, curso: string, escola: string) { 
        super(nome, anoNasc, cpf, endereco, telefone); 
        this._matricula = matricula; 
        this._curso = curso; 
        this._escola = escola; 
        this._notas = []; 
      } 
   
      // Getters e Setters 
      public get matricula(): number { 
        return this._matricula; 
      } 
   
      public set matricula(matricula: number) { 
        this._matricula = matricula; 
      } 
   
      public get curso(): string { 
        return this._curso; 
      } 
   
      public set curso(curso: string) { 
        this._curso = curso; 
      } 
   
      public get escola(): string { 
        return this._escola; 
      } 
   
      public set escola(escola: string) { 
        this._escola = escola; 
      } 
   
      // Método para adicionar nota 
      public adicionarNota(nota: number): void { 
        this._notas.push(nota); 
      } 
   
      // Método para calcular a média 
      public calcularMedia(): number { 
        return this._notas.reduce((acc, nota) => acc + nota, 0) / this._notas.length; 
      } 
    } 
  } 
  