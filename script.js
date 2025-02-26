// getElementById() seleciona um elemento pelo ID, enquanto querySelector() permite selecionar qualquer elemento usando seletor CSS.
//Manipulação do DOM: Criar, modificar ou remover elementos da página dinamicamente via JavaScript.
//Eventos de clique e tecla: click detecta interações do usuário com o mouse, e keypress reage quando uma tecla é pressionada.
//uso de classes no css: classList.toggle() adiciona ou remove uma classe CSS de um elemento, alterando seu estilo dinamicamente.
//Remover elementos do DOM: removeChild() exclui um elemento filho de um elemento pai no documento.


// Seleção de elementos do DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Função para adicionar nova tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // Remove espaços extras

    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Criando elementos da lista
    const li = document.createElement("li");
    li.textContent = taskText;

    // Botão de remover tarefa
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    // Adiciona evento para marcar como concluída
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Adiciona evento para remover tarefa
    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Impede que o clique no botão acione o evento do <li>
        taskList.removeChild(li);
    });

    // Adicionando elementos na lista
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpa o campo de input
    taskInput.value = "";
}

// Adiciona evento ao botão "Adicionar"
addTaskBtn.addEventListener("click", addTask);

// Permite adicionar tarefa pressionando "Enter"
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
