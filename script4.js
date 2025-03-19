//acesso de classe protegido(protected)
class Animal{
    _som = 'auau'
    fazerSom(){
        console.log(this._som)
    }
}
class Cachorro extends Animal{
    constructor(){
        super();
        this._som = 'au au au';
    }
}
const cachorro1 = new Cachorro();
cachorro1.fazerSom();
console.log(cachorro1._som);