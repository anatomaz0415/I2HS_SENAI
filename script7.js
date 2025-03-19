//abstração
//serve para reduzir a complexidade do código
//também para melhorar a manutenção do código
//utilizamos a classe sem se preocupar com a complexidade interna dela
class Pagamento{
    processarPagamento(){
        throw new Error("Método abstrato deve ser implementado ")
    }
}
class PagamentoCartao extends Pagamento{
    processarPagamento(){
        console.log("Pagamento via cartão processado")
    }
}
const pagamento = new PagamentoCartao();
pagamento.processarPagamento();
