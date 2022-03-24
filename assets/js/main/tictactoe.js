// make a tictactoe game

// variables
var game = {
	board: [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	turn: 0, // 0 = X, 1 = O
	winner: null, // 0 = X, 1 = O
	player: null,
	player1: null,
	player2: null,
	score: {
		player1: 0,
		player2: 0
	}
};

// functions
function init() {
	game.player = game.player1;
	game.winner = null;
	game.turn = 0;
	game.board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
}

function start() {
	init();
	game.player1 = prompt("Player 1: X or O?");
	if (game.player1 === "X") {
		game.player2 = "O";
	} else {
		game.player2 = "X";
	}
	game.player = game.player1;
	game.winner = null;
	game.turn = 0;
	game.board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
}

function checkWinner() {
	var winner = null;
	// check rows
	for (var i = 0; i < 3; i++) {
		if (game.board[i][0] === game.board[i][1] && game.board[i][0] === game.board[i][2] && game.board[i][0] !== 0) {
			winner = game.board[i][0];
		}
	}
	// check columns
	for (var i = 0; i < 3; i++) {
		if (game.board[0][i] === game.board[1][i] && game.board[0][i]