// Função para enviar uma mensagem
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var chatMessages = document.querySelector(".chat-messages");
        var newMessageElement = document.createElement("div");
        newMessageElement.classList.add("message");
        newMessageElement.textContent = message;
        chatMessages.appendChild(newMessageElement);
        messageInput.value = "";
        messageInput.focus();
        // Aqui você pode adicionar a lógica de envio da mensagem para o servidor ou outras ações necessárias
    }
}

// Event listener para o formulário de envio de mensagens
document.querySelector(".chat-form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMessage();
});

// Event listener para o botão de enviar mensagem
document.querySelector(".send-button").addEventListener("click", function(event) {
    event.preventDefault();
    sendMessage();
});
