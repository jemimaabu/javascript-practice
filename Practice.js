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

/* Returns cardinality of palindromes in array of strings input */
function threatDetector(textMessages) {

    function isPalindrome(s) {
        s = s.trim().split("")
        if (s.join("") === s.reverse().join("")) {
            return true;
        } else {
            return false;
        }
    }

    function palindromeArray(str) {
        var substrings = [];

        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < str.length-i; j++) {
                let subStr = str.substring(j, j+i+3);
                if (isPalindrome(subStr)) {
                    substrings.push(subStr);
                }
            }
        }
        var subCount = substrings.filter(x => x.length >= 3).map(x => x.length);
        var count = subCount.reduce((a, b) => a + b, 0)
        if (count >= 1 && count <= 10) {
            return "Possible";
        }
        if (count >= 11 && count <= 40) {
            return "Probable";
        }
        if (count >= 41 && count <= 150) {
            return "Escalate";
        }
    }

    function printArray(str) {
        var symbols = str.split("").slice(str.length - 3, str.length).join("");
        var palindromicText = str.toLowerCase().replace(/[\W_]/g, '');
        return `${symbols} ${palindromeArray(palindromicText)}`
    }

    console.log(textMessages.map(textMessage => printArray(textMessage)).join("\n"));
}