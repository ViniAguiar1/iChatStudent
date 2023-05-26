function validarLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Verifica se os campos estão preenchidos
  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  
  // Verifica se o login é válido
  // Aqui você pode adicionar suas regras de validação personalizadas
  else if (username !== "admin" || password !== "senha") {
    alert("Credenciais inválidas. Por favor, tente novamente.");
    return false;
  }
  
  // Login válido, redireciona para a página de cadastro
  // window.location.href = "./chat.html";
}

