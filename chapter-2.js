//LOOPING A TRIANGLE:

function makeATriangle(height) {
	let symbol = '#';
	let line = ""
	for (let lineNumber = 0; lineNumber < height; lineNumber++) {
		console.log(line + symbol);
		line = line + symbol;
	}
}

//makeATriangle(30);





//FIZZBUZZ:

function fizzingAndBuzzing(number) {
	for (let i = 1; i <= number; i++) {
		if (i % 5 === 0 && i % 3 == 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

//fizzingAndBuzzing(100);





//CHESSBOARD:

function chessboard() {
	let mainString = "";
	let space = " ";
	let symbol = "#";
	let line = 1;
	let spaceAndNewLine = " \n";
	let symbolAndNewLine = "#\n";
	let size = 5;
	for (let i = 1; i <= (size * size); i++) {
		if (line % 2 !== 0) {
			if (i % 2 === 0 && i % size === 0) { 
				mainString = mainString + symbolAndNewLine;
				line++;
			} else if (i % 2 === 0) {
				mainString = mainString + symbol;
			} else {
				mainString = mainString + space;
			}
		} else {
			if (i % 2 === 0 && i % size === 0) {
				mainString = mainString + spaceAndNewLine;
				line++;
			} else if (i % 2 !== 0) {
				mainString = mainString + symbol;
			} else {
				mainString = mainString + space;
			}
		}
	}
	return mainString;
}

//makeChessboard = chessboard();
//console.log(makeChessboard);

function modifiedChessboard(size = 8) {
	let mainString = "";
	let space = " ";
	let symbol = "#";
	let spaceAndNewLine = " \n";
	let symbolAndNewLine = "#\n";
	let line = 1;
	for (let i = 1; i <= (size * size); i++) {
		if (size % 2 === 0) {
			if (line % 2 !== 0) {
        	                if (i % 2 !== 0) {
					if (i % size !== 0) {
                        	                mainString = mainString + space;
                                	} else {
						mainString = mainString + spaceAndNewLine;
	                                        line++;
        	                        }
                	        } else {
                        	        if (i % size !== 0) {
                                	        mainString = mainString + symbol;
	                                } else {
        	                                mainString = mainString + symbolAndNewLine;
                	                        line++;
                        	        }
	                        }
        	        } else {
                	        if (i % 2 !== 0) {
					if (i % size !== 0) {
                                	        mainString = mainString + symbol;
	                                } else {
						mainString = mainString + symbolAndNewLine;
                	                        line++;
                        	        }
	                        } else {
        	                        if (i % size !== 0) {
                	                        mainString = mainString + space;
                        	        } else {
                                	        mainString = mainString + spaceAndNewLine;
	                                        line++;
        	                        }
                	        }
        	        }
		} else {
			if (line % 2 !== 0) {
	                        if (i % 2 !== 0) {
        	                        if (i % size !== 0) {
                	                        mainString = mainString + space;
                        	        } else {
                                	        mainString = mainString + spaceAndNewLine;
                                        	line++;
                                	}
	                        } else {
        	                        if (i % size !== 0) {
                	                        mainString = mainString + symbol;
                        	        } else {
                                	        mainString = mainString + symbolAndNewLine;
                                        	line++;
                                	}
                        	}
	                } else {
        	                if (i % 2 !== 0) {
                	                if (i % size !== 0) {
                        	                mainString = mainString + space;
                                	} else {
                                        	mainString = mainString + symbolAndNewLine;
	                                        line++;
        	                        }
                	        } else {
                        	        if (i % size !== 0) {
                                	        mainString = mainString + symbol;
	                                } else {
        	                                mainString = mainString + symbolAndNewLine;
                	                        line++;
                        	        }
                        	}
                	}

		}
	}
        return mainString;
}
	
//let makeModifiedChessboard = modifiedChessboard(-10);
//console.log(makeModifiedChessboard);


