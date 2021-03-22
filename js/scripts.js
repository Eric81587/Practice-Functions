let sentence = prompt("Enter a sentence:");
console.log(sentence);

let sentence2 = prompt("Enter a sentence:");
console.log(sentence2);
// const caps = capitals(sentence);
// console.log(caps);
// const reversed = reverseOrderTwoLetters(caps);
// console.log(reversed);

const processed = twoFunctionsCalled(sentence2);
console.log(processed);


//--------------------------------------------------------------------
function capitals(sentence) {
  const firstLetter = sentence.charAt(0);
  const lastletter = sentence.charAt(sentence.length-1);
  const capitalFirst = firstLetter.toUpperCase();
  const capitalLast = lastletter.toUpperCase();
  return capitalFirst + capitalLast;
}

function reverseOrderTwoLetters(capitalLetters){
  const firstLetter = capitalLetters.charAt(0);
  const lastLetter = capitalLetters.charAt(1);
  return lastLetter + firstLetter;
}

function twoFunctionsCalled(inputSentence){
  const output1 = capitals(inputSentence);//output two capital letters in a string
  const output2 = reverseOrderTwoLetters(output1); //reverses two capital letters
  const output3 = sentence + output2; //*****weird that it pulls in sentence from outside function???
  return output3;
}
//----------------------------------------------------------------------