var deck = require('./deck.js')


module.exports.one = function() {
	var playerOne = []
	for(var i = 0; i < deck.length; i+=2) {
		playerOne.push(deck[i]);	
	}
	return playerOne;
}

var playerOne = module.exports.one;

module.exports.two = function () {
	var playerTwo = []
	for(var n = 1; n < deck.length; n+=2) {
		playerTwo.push(deck[n]);
	}
	return playerTwo;
}

var playerTwo = module.exports.two;

// console.log(playerOne)

// var playerFunctions = {};

// var playerOne = [];
// var playerTwo = [];

// for(var i = 0; i < deck.length; i+=2) {
//   	playerOne.push(deck[i])	

// 	}

// for(var n = 1; n < deck.length; n+=2) {
// 		playerTwo.push(deck[n]);
// 	}

//console.log(players.one())
// console.log()

// console.log(module.exports.one.playerOne)
// module.exports = playerOne;
// module.exports = playerTwo;






