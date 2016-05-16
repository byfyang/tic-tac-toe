//lets page load then starts the game
window.onload=startGame();

function startGame() {
	player1 = "X"; 
	//message to tell X is starting
	winner = null;
	setMessage(player1 + " gets to start");
}

function setMessage(msg) {
	//get element messages - insert message
	 document.getElementById('messages').textContent = msg;
}

//
function nextMove(square) {
	if (winner != null) {
		setMessage("Game Over");
	} else if (square.textContent === ""){
		square.textContent = player1;
	//tell user to select a different box
		switchTurn();
	} else {
		setMessage("Please select a different square");
	}
}

function switchTurn() {
	if (checkForWinner(player1)) {
		setMessage(player1 + " wins!");
		winner = player1;
//switches turn between O & X
	} else if (player1 == 'X') {
		player1 = 'O';
		setMessage("It's " + player1 + " turn!");
	} else {
		player1 = 'X';
		setMessage("It's " + player1 + " turn!");
	}
}

function checkRow(a, b, c, move) {
	var result = false;
	if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
		result = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById('a'+number).textContent;
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

function reset(){
		var button = document.getElementById ('button');
		button.addEventListener('click', location.reload());
}




