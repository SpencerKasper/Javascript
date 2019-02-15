var helpers = require( './helpers' );
var part = require( './csce322h0mework02part01' );

var game = helpers.readGameFile('test.game.bff');
var moves = helpers.readMovesFile('test.moves.bff');
var before = game.slice(0);

var theFunction = part.onePlayerOneMove( before );
var after = theFunction( moves[0] );
helpers.printGame( after );
