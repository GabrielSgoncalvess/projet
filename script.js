document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    document.getElementById("mensagemSucesso").classList.remove("hidden"); // Mostra a mensagem de sucesso
    this.reset(); // Limpa o formulário
});
