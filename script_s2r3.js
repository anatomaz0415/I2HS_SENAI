//teclas identar código: shift + alt + f
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarFormulario() {
  rl.question('Digite seu nome: ', (nome) => {
  rl.question('Digite seu email: ', (email) => {
  rl.question('Digite seu telefone : ', (telefone) => {
  rl.question('Digite sua data de aniversário: ', (dataAniversario) => {
  rl.question('Digite sua senha: ', (senha) => {
            
            const dados = {
              nome,
              email,
              telefone,
              dataAniversario,
              senha
            };

            function showError(campo, mensagem) {
              console.log(`${campo}: ${mensagem}`);
            }


            if (!dados.nome.trim()) {
              showError('Nome', 'O nome é obrigatório.');
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(dados.email)) {
              showError('Email', 'Email inválido.');
            }


            const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
            if (dados.telefone && !telefonePattern.test(dados.telefone)) {
              showError('Telefone', 'Telefone inválido.');
            }


            const dataAniversarioDate = new Date(dados.dataAniversario);
            const hoje = new Date();
            if (dataAniversarioDate > hoje) {
              showError('Data de Aniversário', 'A data não pode ser no futuro.');
            }

            if (dados.senha.length < 6) {
              showError('Senha', 'A senha no mínimo 6 caracteres.');
            }

            if (
              dados.nome.trim() &&
              emailPattern.test(dados.email) &&
              (!dados.telefone || telefonePattern.test(dados.telefone)) &&
              dataAniversarioDate <= hoje &&
              dados.senha.length >= 6
            ) {
              const json = JSON.stringify(dados, null, 2);
              console.log("Dados do formulário em JSON:");
              console.log(json);
            } else {
              console.log("Não foi possível gerar o JSON");
            }

            rl.close();
          });
        });
      });
    });
  });
}


validarFormulario();
