let cont = 0;

let start = () => {

	for(var i = 1; i <= 9; i++) {
		reiniciar(i);
	}

	cont = 0;

	document.turn = "X";
	document.vencedor = null;
	exibirMensagem("A partida começa com " + document.turn);
}

let exibirMensagem = (msg) => {
	document.getElementById("mensagem").innerText = msg;
}


let preencher = (square) => {
	if (document.vencedor != null) {
		exibirMensagem(document.turn + " já venceu!");
	} else if (square.innerText == '') {
		square.innerText = document.turn;
		cont++;

		if (cont == 9 && document.vencedor == null && (vencedor(document.turn) == false)) {
			exibirMensagem("Houve um empate!");
			cont = 0;	
		} else {
			trocarPlayer();
		} 
	} else {
		exibirMensagem("O espaço já foi selecionado!");
	}
}

let vencedor = (move) => {
	let result = false;
	if (checarLinha(1, 2, 3, move) ||
		checarLinha(4, 5, 6, move) ||
		checarLinha(7, 8, 9, move) ||
		checarLinha(1, 4, 7, move) ||
		checarLinha(2, 5, 8, move) ||
		checarLinha(3, 6, 9, move) ||
		checarLinha(1, 5, 9, move) ||
		checarLinha(3, 5, 7, move) 
		 ) {
		result = true;
	} 
	return result;
}

let trocarPlayer = () => {

	if (vencedor(document.turn)) {
		exibirMensagem("Parabéns " + document.turn + " é o vencedor!");
		document.vencedor = document.turn;
		cont = 0;
	} else if (document.turn == "X") {
		document.turn = "O";
		exibirMensagem("Vez do " + document.turn);
	} else {
		document.turn = "X";
		exibirMensagem("Vez do " + document.turn);
	}
}

let checarLinha = (a, b, c, move) => {
	let resultado = false;
	
	if (getId(a) == move &&  getId(b) == move && getId(c) == move) {
		resultado = true;
	}

	return resultado;
}

let getId = (id) => {
	return document.getElementById(id).innerText;
}

let reiniciar = (id) => {
	document.getElementById(id).innerText = '';
}
