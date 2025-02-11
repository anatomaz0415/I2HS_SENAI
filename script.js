document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Operadores Aritméticos
    let btnAritmeticos = document.getElementById("btnAritmeticos");
    if (btnAritmeticos) {
        btnAritmeticos.addEventListener("click", function () {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            if (!isNaN(num1) && !isNaN(num2)) {
                let soma = num1 + num2;
                let subtracao = num1 - num2;
                let multiplicacao = num1 * num2;
                let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero";

                document.getElementById("resultadoAritmetico").innerHTML =
                    `Soma: ${soma} | Subtração: ${subtracao} | Multiplicação: ${multiplicacao} | Divisão: ${divisao}`;
            } else {
                document.getElementById("resultadoAritmetico").innerText = "Insira números válidos.";
            }
        });
    }

    // Operadores Relacionais
    let btnRelacionais = document.getElementById("btnRelacionais");
    if (btnRelacionais) {
        btnRelacionais.addEventListener("click", function () {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            if (!isNaN(num1) && !isNaN(num2)) {
                let igualdade = num1 == num2;
                let identidade = num1 === num2;
                let maior = num1 > num2;
                let menor = num1 < num2;

                document.getElementById("resultadoRelacional").innerHTML =
                    `Igualdade: ${igualdade} | Identidade: ${identidade} | Maior: ${maior} | Menor: ${menor}`;
            } else {
                document.getElementById("resultadoRelacional").innerText = "Insira números válidos.";
            }
        });
    }

    // Operadores Lógicos
    let btnLogicos = document.getElementById("btnLogicos");
    if (btnLogicos) {
        btnLogicos.addEventListener("click", function () {
            let cond1 = document.getElementById("cond1").checked;
            let cond2 = document.getElementById("cond2").checked;

            let andResult = cond1 && cond2;
            let orResult = cond1 || cond2;
            let xorResult = (cond1 || cond2) && !(cond1 && cond2);

            document.getElementById("resultadoLogico").innerHTML =
                `AND: ${andResult} | OR: ${orResult} | XOR: ${xorResult}`;
        });
    }

    // Data e Hora
    let btnDataHora = document.getElementById("btnDataHora");
    if (btnDataHora) {
        btnDataHora.addEventListener("click", function () {
            let dataHoraAtual = new Date().toLocaleString("pt-BR");
            document.getElementById("dataHora").innerText = `Data e Hora: ${dataHoraAtual}`;
        });
    }

    // Função Matemática
    let btnRaizQuadrada = document.getElementById("btnRaizQuadrada");
    if (btnRaizQuadrada) {
        btnRaizQuadrada.addEventListener("click", function () {
            let numero = parseFloat(document.getElementById("numero").value);
            if (!isNaN(numero)) {
                let raiz = Math.sqrt(numero).toFixed(2);
                document.getElementById("resultadoRaiz").innerText = `Raiz Quadrada: ${raiz}`;
            } else {
                document.getElementById("resultadoRaiz").innerText = "Por favor, insira um número válido.";
            }
        });
    }

    // Manipulação de String
    let btnManipularString = document.getElementById("btnManipularString");
    if (btnManipularString) {
        btnManipularString.addEventListener("click", function () {
            let texto = document.getElementById("stringInput").value.trim();
            if (texto) {
                let tamanho = texto.length;
                let maiuscula = texto.toUpperCase();
                let minuscula = texto.toLowerCase();
                let invertida = texto.split("").reverse().join("");

                document.getElementById("resultadoString").innerHTML =
                    `Tamanho: ${tamanho} <br> Maiúsculas: ${maiuscula} <br> Minúsculas: ${minuscula} <br> Invertida: ${invertida}`;
            } else {
                document.getElementById("resultadoString").innerText = "Digite um texto válido.";
            }
        });
    }
});
