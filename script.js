//ctrl + N = cria um novo arquivo
document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("cadastroForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    form.addEventListener("submit" , function(event){
        event.preventDefault();
        if(!validarEmail(emailInput.value)){
            emailError.textContent = "Favor inserir um email válido";
            return
        }
        emailError.textContent = "";
        mensagemSucesso.classList.remove("hidden");
        form.reset();
    });

    function validarEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
