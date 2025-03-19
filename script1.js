//acesso privado (private)
//encapsulamento protege os dados dentro de um objeto
//de acessos externos (fora da classe)
//pode ser acessado apenas por métodos específicos

class ContaBancaria {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial //atributo do construtor
    }
    depositar(valor) {
        this.#saldo += valor;
    }
    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente!")
        } else {
            this.#saldo -= valor;
        }
    }
    mostrarSaldo() {
        return this.#saldo;
    }
}
const minhaConta = new ContaBancaria(500);
minhaConta.depositar(200); //objeto.método
console.log(minhaConta.mostrarSaldo); //objeto.método
