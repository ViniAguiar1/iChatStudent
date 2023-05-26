function cadastrar() {
  let nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;

  // Crie um objeto com os dados do cadastro
  let usuario = {
    nome: nome,
    email: email
  };

  // Armazene o objeto do usuário em localStorage
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Redirecione para a página de sucesso
  window.location.href = "sucesso.html";
}

