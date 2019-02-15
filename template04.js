var helpers = require( './helpers' );
var part = require( './csce322h0mework02part04' );

var game = helpers.readGameFile('test.game.bff');
var moves = helpers.readMovesFile('test.moves.bff');
var before = game.slice(0);

var theFunction = part.manyPlayersManyMoves( before );
var after = theFunction( moves );
helpers.printGame( after );
