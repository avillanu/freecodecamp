/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

 function spinalCase(str) {
  var needSpace = str.replace(/\s(?=[a-z])/g,"-");
  var noSpace = needSpace.replace(/\s/g,"");
  var noUnderline = noSpace.replace(/[_]/g,"");
  var splitArr = noUnderline.split(/(?=[A-Z])/);
  var joinedArr = splitArr.join("-");
  var lowerCase = joinedArr.toLowerCase();
  return lowerCase;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
