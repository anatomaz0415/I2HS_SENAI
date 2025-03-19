//polimorfismo
class Veiculo{
    acelerar(){
        console.log("o veículo está acelerando");
    }
}
class Carro extends Veiculo{
    acelerar(){
        console.log("o carro está acelerando velozmente");
    } 
}
class Moto extends Veiculo{
    acelerar(){
        console.log("a moto está acelerando")
    }
}
const veiculos = [new Carro(), new Moto(), new Veiculo()]
veiculos.forEach((veiculo) => veiculo.acelerar());