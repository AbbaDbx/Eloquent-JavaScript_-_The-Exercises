// MINIMUM:

function min(a, b) {
	return (a < b) ? a : b;
}

//let getMin = min(5, 3);
//console.log(getMin);


// RECURSION:

function isEven(number) {
	if (number === 0) {
		return true;
	} else if (number === 1) {
		return false;
	} else {
		return isEven(number - 2);
	}
}

//let getIsEven = isEven(-1);
//console.log(getIsEven);

/* When the above isEven function is tested with -1, it causes 
 stackoverflow; which is the exhaustion of the available call stacks
 of a function tha recursion functions are liable to when a base case is
 not reached. There is no base case in the function for when the given 
 number is negative. A possible fix is to make it that when any negative number 
 is applied, the function should return a string asserting that a positive number is needed.*/

function modifiedIsEven(number) {
	if (number < 0) {
		return "A positive number is needed!";
	} else if (number === 0) {
		return true;
	} else if (number === 1) {
		return false;
	} else {
		return modifiedIsEven(number - 2);
	}
}

//let getModifiedIsEven = modifiedIsEven(-1);
//console.log(getModifiedIsEven);


// BEAN COUNTING:

function countBs(aString) {
	let bCount = 0;
	for (let idx = 0; idx < aString.length; idx++) {
		if (aString[idx] === "B") {
			bCount++;
		}
	}
	return bCount;
}

//let getBCount = countBs("The boy named Benji has to buy the best book in order not to borrow any");
//console.log(getBCount);

function countChar(aString, aChar) {
	let charCount = 0;
	for (let idx = 0; idx < aString.length; idx++) {
		if (aString[idx] === aChar) {
			charCount++;
		}
	}
	return charCount;
}

//let getCharCount = countChar("The boy named Benji has to buy the best book in order not to borrow any", "e");
//console.log(getCharCount);

function modifiedCountBs(aString, aChar = "B") {
        let charCount = 0;
        for (let idx = 0; idx < aString.length; idx++) {
                if (aString[idx] === aChar) {
                        charCount++;
                }
        }
        return charCount;
}

let getModifiedCountBs = modifiedCountBs("The boy named Benji has to buy the best book in order not to borrow any", );
console.log(getModifiedCountBs);





