//acesso de classe privado 
//usa-se a # para identifica-los
//acesso de classe privado(private)
class ContaBancaria{
    #saldo = 0
    deposito(quantidade){
        if (quantidade > 0){
            this.#saldo += quantidade;
        }
    }
    mostrarSaldo(){
        return this.#saldo;
    }
}
const conta1 = new ContaBancaria();
conta1.depositar(100);
console.log(conta1.mostrarSaldo);
