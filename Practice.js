/* Returns the number of times a character occurs in a string */
function numCount(arr, element) {
  // numCount("hello, l") return 2l
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++
    }
  }
  return `${count}${element}`;
}

/* Uses numCount function to return run length encoding of all characters in a string  */
function runLengthEncoding(str) {
  // runLengthEncoding("Hello World") returns 1h1e3l2o1w1r1d
  var stringArray = str.toLowerCase().replace(/[^a-z]/g, "").split("");
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
  const stringArray = str.toLowerCase().replace(/[^a-z]/g, "").split("");
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
      for (var j = 0; j < str.length - i; j++) {
        let subStr = str.substring(j, j + i + 3);
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

/**  Reverse string but maintain position of special characters*/
function reverseChar(str) {
  var specIndex = [];
  var specChar = [];
  for (var i = 0; i < str.length; i++) {
    if (/[^a-zA-Z0-9]/g.test(str[i]) === true) {
      specIndex.push(i);
      specChar.push(str[i]);
    }
  }
  str = str.replace(/[^a-zA-Z0-9]/g, "").split("").reverse();
  for (let i = 0; i < specChar.length; i++) {
    str.splice(specIndex[i], 0, specChar[i])
  }
  console.log(str.join(""))
}

/** Another method of reversing string by Devin McIntyre */
const reverser = str => {
  //Create a map of special and non-special characters mapped to their index
  const mapped = str
    .split('')
    .reduce((acc, character, index) => {
      character.match(/^[0-9a-zA-Z]+$/) ? acc.letters.push(character) : acc.specials.push({ character, index })
      return acc
    }, { letters: [], specials: [] })

  const reversedArr = mapped.letters.reverse() //reverse the letters array
  mapped.specials.forEach(special => reversedArr.splice(special.index, 0, special.character)) //add in the special characters at their index
  return reversedArr.join("") //Return the string
}

//Function to return array of object of character count
function objCount(arr) {
  const uniqueArray = [... new Set(arr)]
  const mapped = uniqueArray
    .reduce((acc, character, count) => {
      count = numCount(arr, character);
      acc.push({ character, count });
      return acc
    }, [])
  return mapped
}

// Complete the MinSliceWeight function below.
function MinSliceWeight(Matrix) {
  // Get number of rows in Matrix i.e. Matrix[i]
  var rows = Matrix.length;
  // Get number of columns in Matrix i.e. Matrix[i][j]
  var cols = Matrix.length > 0 ? Matrix[0].length : 0;
  // If rows or columns are 0, return 0
  if (rows == 0 || cols == 0) {
    return 0
  }

  //Create slice sum array same length as columns
  var sliceSum = Array(cols).fill(0);

  //Fill slice sum array with values in last row
  for (var i = 0; i < cols; i++) {
    sliceSum[i] = !isNaN(Matrix[rows - 1][i]) ? Matrix[rows - 1][i] : 0
  }

  //Start iterating backwards from second-to-last row
  for (var i = rows - 2; i >= 0; i--) {
    //Iterate through columns backwards starting from last colum
    for (var j = cols - 1; j >= 0; j--) {
      //Detect non integer input
      if (isNaN(Matrix[i][j])) {
        Matrix[i][j] = 0
      }
      //If j is at last position, get minimum value of left-bottom element or immediate-bottom element and add to j
      if (j == cols - 1) {
        sliceSum[j] = Math.min(sliceSum[j - 1], sliceSum[j]) + Matrix[i][j];
      }
      //If j is at first position, get minimum value of right-bottom element or immediate-bottom element and add to j
      else if (j == 0) {
        sliceSum[j] = Math.min(sliceSum[j], sliceSum[j + 1]) + Matrix[i][j];
      }
      // Else if j is in the middle, get the minimum value of the the left, right or bottom element and add to j
      else {
        sliceSum[j] = Math.min(sliceSum[j - 1], sliceSum[j], sliceSum[j + 1]) + Matrix[i][j];
      }
    }
  }

  //Sort sliceSum array in ascending order and return first value
  return sliceSum.sort((a, b) => a - b)[0];
}

// Complete the winner function below.
function winner(erica, bob) {
  erica = erica.split('');
  bob = bob.split('');

  function score(arr) {
    var score = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == "S") {
        score += 0;
      }
      if (arr[i] == "E") {
        score += 1;
      }
      if (arr[i] == "M") {
        score += 3;
      }
      if (arr[i] == "H") {
        score += 5;
      }
    }
    return score
  }

  function levelCount(arr, l) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == l) {
        count++;
      }
    }
    return count
  }

  var ericaScore = score(erica);
  var bobScore = score(bob);
  var ericaHScore = levelCount(erica, "H");
  var bobHScore = levelCount(bob, "H");
  var ericaMScore = levelCount(erica, "M");
  var bobMScore = levelCount(bob, "M");
  var ericaEScore = levelCount(erica, "E");
  var bobEScore = levelCount(bob, "E");

  if (ericaScore > bobScore) {
    return "Erica"
  } else if (bobScore > ericaScore) {
    return "Bob"
  } else if (bobScore == ericaScore) {
    if (ericaHScore > bobHScore) {
      return "Erica"
    } else if (ericaHScore < bobHScore) {
      return "Bob"
    } else if (ericaMScore > bobMScore) {
      return "Erica"
    } else if (ericaMScore < bobMScore) {
      return "Bob"
    } else if (ericaEScore > bobEScore) {
      return "Erica"
    } else if (ericaEScore < bobEScore) {
      return "Bob"
    } else {
      return "Tie"
    }
  }
}

function solution(A, K, L) {
  if (K + L > A.length) {
    return -1
  }

  function maximumSum(startIndex, num) {
    var sum = 0;
    for (var i = startIndex; i < num; i++) {
      sum += A[i];
    }
    var newSum = sum;
    for (var i = num; i < A.length; i++) {
      newSum += A[i] - A[i - num];
      sum = Math.max(sum, newSum);
    }
    return sum
  }

  var maxK = maximumSum(A, K);
  var maxL = maximumSum(A, L);
  return maxK + maxL
}

// Return array of prime numbers in a number
function primeFactorArray(number) {
  var primes = [];

  //initialize divisor as lowest prime number, 2
  for (var divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      primes.push(divisor);
    }
  }

  return primes
}

function fizzBuzz(len) {
  var arr = [];
  for (var i = 1; i <= len; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz")
    }
    else if (i % 3 === 0) {
      arr.push("Fizz")
    }
    else if (i % 5 === 0) {
      arr.push("Buzz")
    }
    else {
      arr.push(i)
    }
  };
}

module.exports.primeFactorArray = primeFactorArray;

function translatePigLatin(str) {
  if ((/^[aeiou]/).test(str)) {
    return str + "way";
  } else {
    var strArr = str.split("");
    var firstLetters = str.match(/^([^aeiou])+/g).join("");
    str.splice(0, firstLetters.length);
    str = strArr.join("") + firstLetters + "ay";
    return str;
  }
}


//compress and decompress string to octet value i.e "aabbcc" should compress to "0a20b20c2"
const compress = (str) => {
    var arr = str.split('');
    var octetStr = '';
    var count = 1;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] == arr[i+1]) count++;
        else if (arr[i] !== arr[i+1]) {
            octetStr += `0${arr[i]}${count}`
            count=1
        };
    }
    return octetStr;
}

const decompress = (str) => {
    var arr = str.split('0');
    return arr.map(x => {
    if (x.length > 0) {
        var char = x.split('');
        var val = char[0].repeat(+char[1]);
        return val;
    }}).join('')
}


/*Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.
// assume you have a function isDigit(char) which returns true if char is a digit and false otherwise
// also assume you have a function isLetter(char) which returns true if char is a letter and false otherwise */

function specChar(str) {
    var strArr = str.split("");
    if (str.match(/[^a-zA-Z0-9]/g)) {
        var validChar = [];
        for (var i = 0; i<strArr.length; i++) {
            if (isDigit(strArr[i]) || isChar(strArr[i])) {
                validChar.push(strArr[i])
            } 
        }
        return validChar;
    }
    return strArr;
}

function isPalindrome(str) {
    if (str.length = 0) {
        return true
    }
    var strArr = specChar(str);
    var revArr = [...strArr].reverse();
    return strArr.join("") === revArr.join("");
}
// ----------------------------------------------------------------------
// Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
sortedArray: ["aet", "aet", "ant", "aet", "ant", "abt"];
nestArr: ["aet",]
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]


function sortItem(arr) {
    return arr.map(x => x.split("").sort().join(""))
}
function elemCount(arr, elem) {
    var count = 0;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i]==elem) { count++} 
    }
    return count;
}
// var t = ["nat","tan"] // sortItem(t) --> ["ant", "ant"]? [
function anagram(arr) {
    var sortedArr = sortItem(arr);
    for (var i = 0; i<arr.length; i++) {
        var nestArr = [];
        while(elemCount(sortedArr, sortedArr[i]) > 0) {
            nestArr.push(arr[i]);
        }
    }
}

var group = {
    aet: ["ate","eat","tea"],
    
}

var group = {"aet":["ate","eat","tea"]};


/* Given an array that represents sock colors e.g. [3,3,2,1,1,3,5,1,4,2], write a function to calculate how many pairs of the same color exist */
function getSockPairs(arr) {
    let dict = {}
    arr.forEach(char => {
        if (dict[char]) {
            dict[char] += 1
        } else {
            dict[char] = 1
        }
    })

    let pairs = 0
    
    for (const key in dict) {
      pairs += Math.floor(dict[key] / 2)
    }

    return pairs
}

/* Given an array and a hashing function modulus, compute the collision in the array where a collision happens if two elements have the same modulo value*/
function getCollisions(arr, mod) {
    const sortedArray = [...arr].map(val => val % mod).sort()
    let dict = {}
    sortedArray.forEach(char => {
        if (dict[char] >= 0) {
            dict[char] += 1
        } else {
            dict[char] = 0
        }
    })    
        
    let collisions = 0
    
    for (const key in dict) {
      collisions += dict[key]
    }

    return collisions
}
