function validarUsuario() {
  // Pega os valores dos campos de username e password
  var username = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  if (username == getElementById("name").value && password == getElementById("password").value){
    return window.location.href = "./chat.html"
  }

  // // Verifica se os campos de entrada foram preenchidos
  // if (username == "" || password == "") {
  //   alert("Por favor, preencha todos os campos.");
  //   return false;
  // }

  // // Verifica se o username e a senha estão armazenados em localStorage
  // if (localStorage.getItem(username) == password) {
  //   // alert("Login efetuado com sucesso!");
  //   window.location.href = "./chat.html"; // Redireciona para a tela de chat
  // } else {
  //   alert("Nome de usuário ou senha incorretos!");
  //   return false;
  // }
}
// window.location.href = "./chat.html";
