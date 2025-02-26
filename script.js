document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const dataAniversario = document.getElementById('dataAniversario').value;
  const senha = document.getElementById('senha').value;

  let isValid = true;

  // Função para exibir erros
  function showError(campo, mensagem) {
    document.getElementById(campo + 'Error').textContent = mensagem;
    isValid = false;
  }

  // Validação de nome
  if (!nome.trim()) {
    showError('nome', 'O nome é obrigatório.');
  }

  // Validação de email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    showError('email', 'Email inválido.');
  }

  // Validação de telefone
  const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (telefone && !telefonePattern.test(telefone)) {
    showError('telefone', 'Telefone inválido.');
  }

  // Validação de data de aniversário
  const dataAniversarioDate = new Date(dataAniversario);
  const hoje = new Date();
  if (dataAniversarioDate > hoje) {
    showError('dataAniversario', 'A data não pode ser no futuro.');
  }

  // Validação de senha
  if (senha.length < 6) {
    showError('senha', 'A senha deve ter no mínimo 6 caracteres.');
  }

  // Se os dados forem válidos, exibe o sucesso e os dados em JSON
  if (isValid) {
    const dados = { nome, email, telefone, dataAniversario, senha };
    const json = JSON.stringify(dados, null, 2);
    console.log("Dados do formulário em JSON:");
    console.log(json);

    document.getElementById('mensagemSucesso').classList.remove('hidden');
    document.getElementById('cadastroForm').reset();
  } else {
    document.getElementById('mensagemSucesso').classList.add('hidden');
  }
});
