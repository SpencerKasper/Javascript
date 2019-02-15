module.exports = {
    readGameFile:readGameFile,
    readMovesFile:readMovesFile,
    printGame:printGame,
    printMoves:printMoves
}

function readGameFile( file )
{
    var text;
    var lines = [];
    var rows = [];
    var filesystem = require( 'fs' );

    text = filesystem.readFileSync( file );
    rows = text.toString().split( "\n" );
    rows.pop();
    
    var game = [];
    for( var r = 0; r < rows.length; r++ ){
	rows[r] = rows[r].split( "," );
	game[r] = [];
	for( var c = 0; c < rows[r].length; c++ ){
	    game[r][c] = rows[r][c];
	}
    }
    
    return game;
}

function readMovesFile( file )
{
    var text;
    var line = [];
    var filesystem = require( 'fs' );
    var row = [];
    var moves = [];

    text = filesystem.readFileSync( file );
    moves = text.toString().split( "\n" );
    moves = moves[0];
    moves = moves.split( "," );
    for( var m = 0; m < moves.length; m++ ){
	moves[m] = parseInt( moves[m] );
    }
    return moves; 
}

function printGame(game){
    for( var r = 0; r < game.length; r++ ){
	var row = "";
	for( var c = 0; c < game[r].length; c++ ){
	    row = row + game[r][c];
	}
	console.log( row );
    }
}

function printMoves(spaces){
    var moveString = "";
    for( var m = 0; m < moves.length; m++ ){
	moveString = moveString + moves[m];
    }
    console.log( moveString );
}
