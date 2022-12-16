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

/*
for(start index, end index; start index < end index; increment start idx, decrement end idx){
  if letter[start index] != letter[end index]{
    return fail
  }
  return pass
}

/*

/*
  Add written explanation of your solution here
*/

//Compare each letter from both end . This will run in log(n) time but with a 0.5 constant.

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
