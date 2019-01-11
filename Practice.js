/* Returns the number of times a character occurs in a string */
function numCount(arr, element) {
	// numCount("hello, l") return 2l
	var count = 0;
	for (var i = 0; i<arr.length; i++){
    	if (arr[i]===element) {
		 	count++
		}
	}
	return `${count}${element}`;
}

/* Uses numCount function to return run length encoding of all characters in a string  */
function runLengthEncoding(str) {
	// runLengthEncoding("Hello World") returns 1h1e3l2o1w1r1d
	var stringArray = str.toLowerCase().replace(/[^a-z]/g,"").split("");
	var uniqueStringArray = [... new Set(stringArray)]
	return uniqueStringArray.map((a) => numCount(stringArray, a)).join("");
}

/* Reverses words in a sentence */
function reverseSentence(str) {
	// reverseSentence("Hello World") returns olleH dlroW
	return str.split(" ").map(a => a.split("").reverse().join("")).join(" ");
}

/* Determines if a string is a pangram or not */
function pangram(str) {
	// If a set of the string has exactly 26 letters which are all the letters of the English alphabet, it's a pangram
	const stringArray = str.toLowerCase().replace(/[^a-z]/g,"").split("");
	const uniqueLetters = [... new Set(stringArray)];
	return uniqueLetters.length === 26 ? "Pangram" : "Not pangram"
}