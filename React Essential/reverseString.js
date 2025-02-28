const reverseString = (inputStr) => {
  let reverseString = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reverseString += inputStr[i];
  }
  return reverseString;
};
console.log(reverseString("Nepal"));

// buildin method

let stringValue = "Javascript";
let revString = stringValue.split(" ").reverse().join(" ");
console.log(revString);
