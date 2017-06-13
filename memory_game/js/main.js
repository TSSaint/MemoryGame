var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
// empty --> []

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
// queen

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
// queen and king

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// same
		alert("You found a match!");
	} else {
		// different
		alert("Sorry, try again.");
	}
}
