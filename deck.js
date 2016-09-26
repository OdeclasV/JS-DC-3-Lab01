var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

// var createDeck = function(suits, ranks) {
// 	var finalDeck = [];
// 	for(var i=0; i < suits.length; i++) {
// 		for(var j=0; j < ranks.length; j++) {
// 			finalDeck.push(ranks[j] + ' of ' + suits[i])
// 		}
// 	}
// 	return finalDeck;
// }

// var deckOfCards = createDeck(suits,ranks)
//console.log(dekOfCards)
// module.exports = suits;
// module.exports = ranks;
//module.exports = deckOfCards;
//console.log(module.exports)

// var CardScores = {
// 	ace: 1, 
// 	two: 2, 
// 	three: 3, 
// 	four: 4, 
// 	five: 5, 
// 	six: 6, 
// 	seven: 7, 
// 	eight: 8, 
// 	nine: 9, 
// 	ten: 10, 
// 	jack: 11, 
// 	king: 12, 
// 	queen: 13
// }

// var CardScores = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// var value;

// function scores(playerCard) {
// 	if(playerCard === 'ace') {
// 		return 1;
// 	} else if (playerCard === 'two') {
// 		return 2;
// 	} else {
// 		console.log( 'no rank')
// 	}
// }

var Deck = function(suits, ranks) {
	
	return {
		cards: this.cards, 
		createNewDeck: function() {
			var cards = [];
			for(var i =0; i < suits.length; i++) {
				for(var j=0; j < ranks.length; j++) {
					cards.push(ranks[j] + " of " + suits[i] + ' ' + (j+1));
				}
			}
			return this.cards = cards;
			//console.log(scores('ace'));
		}
	}
}

var myDeck = new Deck(suits,ranks);
//console.log(myDeck.createNewDeck());


// console.log(score(myDeck))
var myDeck = new Deck(suits,ranks);
module.exports = myDeck.createNewDeck();



//console.log(myDeck.createNewDeck());
// myDeck.forEach(function(card){
// 	console.log(myDeck[card] + 1);
// })



// var playerCard = 'ace';
// var rank;



//console.log(playerCard)







