function isPalindrome(word) {
  // Pseudocode:
  // Iterate from the beginning of the string to the middle of the string
  // Compare the letter we're iterating over to the corresponding letter at the end of the string
  // If the letters don't match, return false
  // If we reach the middle, and all the letters match, return true

  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Explanation of the solution:
  The function iterates through the characters of the word from the beginning towards the middle.
  It compares each character with the corresponding character from the end of the word.
  If any pair of characters doesn't match, it returns false.
  If the loop completes without returning false, it means all characters match, and the function returns true.
*/

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
