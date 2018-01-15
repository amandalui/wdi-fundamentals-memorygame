//var cardOne = "Queen";
//var cardTwo = "King";
//var cardThree = "Queen";
//var cardFour = "King";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if ( cardsInPlay.length === 2 ) {
    if ( cardsInPlay[0] === cardsInPlay[1] ) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}