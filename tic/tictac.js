function startGame(){
	document.turn = "x";

	document.winner - null;
	set(document.turn + " starts!");
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function nextMove(square){
	if (document.winner !=null){
		setMessage(document.winner + " won the game.");
	} else if (square.innerText == " "){
		square.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("Please select a valid box.");
	}
}

function switchTurn(){
	if (checkForWinner(document.turn)){
		setMessage("You Win!" + document.turn);
	} else if (document.turn == "X"){
		document.turn ="O";
	}else{
		document.turn = "X";
	}
}
	

function checkForWinner(move){
	var results = false;
	if (checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move) ||

		result = true;
}