//herança
class Animal{ //superclasse
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log("miau")
    }
}
class Gato extends Animal{  //subclasse
    constructor(nome,raca){
        super(nome);
        this.raca = raca;
    }

    emitirSom(){
        console.log("miau !");
    }
}

const frajola = new Gato("frajola","siames");
frajola.emitirSom();
console.log(frajola);
