// let str = "manas";
// let strReverse = str.split("").reverse().join("");

// if (str === strReverse) {
//   console.log("The string is a palindrome");
// } else {
//   console.log("NOT a palindrome");
// }
// function checkPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         console.log("NOT a palindrome");
//       }
//     }
//     console.log("The string is a palindrome");
//   }

let word = "CivIc";
let str = word.toLowerCase();

function checkPalindrome(str) {
  // find the length of the string
  const len = str.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check each position
    // between the first and the last character
    if (str[i] !== str[len - 1 - i]) {
      console.log("NOT a palindrome");
    }
  }
  console.log("The string is a palindrome");
}