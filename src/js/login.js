function validarUsuario() {
    // Pega os valores dos campos de username e password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Verifica se o username e a senha estão armazenados em localStorage
    if (localStorage.getItem(username) == password) {
    //   alert("Login efetuado com sucesso!");
      return 
      window.location.href = "./chat.html";
    } else {
      alert("Nome de usuário ou senha incorretos!");
      return false;
    }
  }// Redireciona para a tela de chat
// window.location.href = "./chat.html";