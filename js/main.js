var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-hearts.png"
    }
];
var cardsInPlay = [];
var score = 0;

var checkForMatch = function () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            score = score + 1;
            alert("You found a match! Score: " + score);
        } else {
            alert("Sorry, try again. Score: " + score);
        }
    }
};

var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
};

var createBoard = function () {
    for (i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

createBoard();

var resetBoard = function () {
    for (i = 0; i <= cards.length; i++) {
        document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
        cardsInPlay.pop();
    }
};

document.getElementsByTagName('button')[0].addEventListener('click', resetBoard);