function palindrome(str) {
  // Good luck!
  var counter = 0;
  str = str.replace((/\W|_/g),"");
  str = str.toLowerCase();
  str = str.split("");
  while (str.length > 1){
    console.log("counter " + counter);
    var first = str.shift();
    var second = str.pop();
    if (first !== second){
      var counter = -1;
    }
  } 

  if (counter == -1){
    return false;
  }
  return true;
}

console.log(palindrome("_ey%e"));
