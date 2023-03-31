function cadastrarUsuario() {
    // Pega os valores dos campos de username e password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Valida se os campos foram preenchidos
    if (username == "" || password == "") {
      alert("Por favor, preencha todos os campos!");
      return false;
    }
    
    // Armazena o username e a senha em localStorage
    localStorage.setItem(username, password);
    
    // Limpa os campos do formulário
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    
    alert("Usuário cadastrado com sucesso!");
}
function validarUsuario() {
    // Pega os valores dos campos de username e password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Verifica se o username e a senha estão armazenados em localStorage
    if (localStorage.getItem(username) == password) {
      alert("Login efetuado com sucesso!");
      return true;
    } else {
      alert("Nome de usuário ou senha incorretos!");
      return false;
    }
  }