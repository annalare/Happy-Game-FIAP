const salvarDadosUsuario = function (userData) {
  localStorage.setItem('happyGameUser', JSON.stringify(userData));
}

const buscarDadosUsuario = function () {
  const dados = localStorage.getItem('happyGameUser');

  return dados ? JSON.parse(dados) : null;
}

const limparDadosUsuario = function () {
  localStorage.removeItem('happyGameUser');
}