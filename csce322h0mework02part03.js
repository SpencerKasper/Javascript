module.exports = {
    manyPlayersOneMove: manyPlayersOneMove
}

var helpers = require( './helpers' );

function manyPlayersOneMove( game ){
    
    function whatever( move ){
		var clusters = [];
		var clusterCounter = 1;
		var numberOfMatches = 0;
		var lengthOfRow = game.length;
		var lengthOfColumn = game[0].length;
		var copy = [];
		
		// Initialize first row
		clusters[0] = [];
		clusters[0][0] = 1;
		copy[0] = [];
		copy[0][0] = 1;
		
		for(var row = 1; row < lengthOfColumn; row++ ){
			if(game[0][row] == game[0][row-1]){
				clusters[0][row] = clusterCounter;
				copy[0][row] = clusterCounter;
			}
			
			else{
				clusterCounter++;
				clusters[0][row] = clusterCounter;
				copy[0][row] = clusterCounter;
			}
		}
		
		// Take care of every other row
		for(var r = 1; r < lengthOfRow; r++){
			clusters[r] = [];
			copy[r] = [];
			
			for(var c = 0; c < lengthOfColumn; c++){
				
				if(c == 0){
					clusterCounter++;
					clusters[r][c] = clusterCounter;
					copy[r][c] = clusterCounter;
				}
				else if(game[r][c] == game[r][c-1]){
					clusters[r][c] = clusterCounter;
					copy[r][c] = clusterCounter;
				}
				
				else{
					clusterCounter++;
					clusters[r][c] = clusterCounter;
					copy[r][c] = clusterCounter;
				}
			}
		}
		
		// Combine clusters with the same value
		for(var ro = 1; ro < lengthOfRow; ro++){
			for(var co = 0; co < lengthOfColumn; co++){
				if(game[ro][co] == game[ro-1][co]){
					var valueToMatch = clusters[ro][co];
					var valueToTurn = clusters[ro-1][co];
					
					for(var newRo = 0; newRo < lengthOfRow; newRo++){
						for(var newCo = 0; newCo < lengthOfColumn; newCo++){
							if(clusters[newRo][newCo] == valueToMatch){
								clusters[newRo][newCo] = valueToTurn;
							}
						}
					}
					
				}
			}
		}
		
		var newClusterCounter = 1;
		
		// Reduce cluster values
		for(var row = 0; row < lengthOfRow; row++){
			for(var col = 0; col < lengthOfColumn; col++){
				if(copy[row][col] != null){
					var searchValue = clusters[row][col];
					copy[row][col] = null;
					
					for(var r = 0; r < lengthOfRow; r++){
						for(var c = 0; c < lengthOfColumn; c++){
							if(clusters[r][c] == searchValue){
								clusters[r][c] = newClusterCounter;
								copy[r][c] = null;
							}
						}
					}
					
					newClusterCounter++;
				}
			}
		}
		
		// Find the move to make and change the cluster
		for(var row = 0; row < lengthOfRow; row++){
			for(var col = 0; col < lengthOfColumn; col++){
				
				if(clusters[row][col] == move){
					game[row][col] = 1;
				}
			}
		}
		
		return game;
    }

    return whatever;
}
