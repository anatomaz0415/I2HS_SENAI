//O \n é um caractere de escape que representa uma quebra de linha no console ou em strings.

//Exemplo Simples

//console.log("Linha 1\nLinha 2\nLinha 3");


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = []; // Array para armazenar as tarefas

// Função para exibir o menu de opções
function mostrarMenu() {
    console.log("\n===== TO-DO LIST =====");
    console.log("1. Adicionar tarefa");
    console.log("2. Listar tarefas");
    console.log("3. Remover tarefa");
    console.log("4. Sair");
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                adicionarTarefa();
                break;
            case "2":
                listarTarefas();
                break;
            case "3":
                removerTarefa();
                break;
            case "4":
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                mostrarMenu();
        }
    });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    rl.question("Digite a nova tarefa: ", (tarefa) => {
        tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada!`);
        mostrarMenu();
    });
}

// Função para listar todas as tarefas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa na lista.");
    } else {
        console.log("\n📌 Lista de Tarefas:");
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }
    mostrarMenu();
}

// Função para remover uma tarefa pelo índice
function removerTarefa() {
    listarTarefas();
    if (tarefas.length === 0) {
        mostrarMenu();
        return;
    }
    rl.question("Digite o número da tarefa a ser removida: ", (indice) => {
        let index = parseInt(indice) - 1;
        if (index >= 0 && index < tarefas.length) {
            let removida = tarefas.splice(index, 1);
            console.log(`Tarefa "${removida}" removida!`);
        } else {
            console.log("Número inválido!");
        }
        mostrarMenu();
    });
}

// Iniciar o programa
mostrarMenu();
