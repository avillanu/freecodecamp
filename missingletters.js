function fearNotLetter(str) {
  var i = 0;
  while(str.charCodeAt(i)-str.charCodeAt(i+1)==-1){
    i++;
  }
  if (i === str.length-1){
    return undefined;}
  var iLookUp = str.charCodeAt(i);
  var missingLetterCharCode = iLookUp + 1;
  var missingLetter = String.fromCharCode(missingLetterCharCode);
  return missingLetter;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
