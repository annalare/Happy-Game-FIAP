export const salvarDadosUsuario = function (userData) {
	localStorage.setItem("happyGameUser", JSON.stringify(userData));
};

export const buscarDadosUsuario = function () {
	const dados = localStorage.getItem("happyGameUser");
	return dados ? JSON.parse(dados) : null;
};

export const limparDadosUsuario = function () {
	localStorage.removeItem("happyGameUser");
};
