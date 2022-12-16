function isPalindrome(word) {
  /*Handle main case*/
  for(let startIdx = 0, endIdx = word.length-1; startIdx < endIdx; ++startIdx, --endIdx){
    if(word[startIdx] != word[endIdx]){
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

//Using the double pointer method to identify palindromes that will perform the problem in n/2 linear time
//starting from both ends and moving inwards per iteration step.
//is palindrome if there are matches in all iterations

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
