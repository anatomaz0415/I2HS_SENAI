//acesso de classe publico (public)
class Pessoa{
    nome;
    constructor(nome){
        this.nome = nome;
    }

}
const pessoa = new Pessoa('Ana');
console.log(pessoa.nome);
