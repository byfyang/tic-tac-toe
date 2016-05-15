//lets page load then starts the game
window.onload=startGame();

function startGame() {

	document.turn = "X"; 
	//message to tell X is starting
	document.winner = null;
	setMessage(document.turn + " gets to start");
};

function setMessage(msg) {
	//get element messages - insert message
	document.getElementById('messages').textContent = msg;
};

//
function nextMove(box) {
	if (document.winner != null) {
		setMessage("Game Over");
	} else if (box.textContent == ""){
	box.textContent = document.turn;
	//tell user to select a different box
	switchTurn();
	} else {
		setMessage("Please select a different square");
	}
}


function switchTurn() {
	if (checkForWinner(document.turn)) {
		setMessage("Winner is " + document.turn);
		document.winner = document.turn;
//switches turn between O & X
	} else if (document.turn == 'X') {
		document.turn = 'O';
		setMessage("It's " + document.turn + " turn!");
	} else {
		document.turn = 'X';
		setMessage("It's " + document.turn + " turn!");
	}
}

function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) || 
		checkRow(4, 5, 6, move) || 
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {
		result = true;
	}
	return result;
}


function checkRow(a, b, c, move) {
	var result = false;
	if (getBoxData(a) == move && getBoxData(b) == move && getBoxData(c) == move) {
		result = true;
	}
	return result;
}

function getBoxData(number) {
	//return document.getElementById("b" + number).textContent;
}