function largestOfFour(arr) {
var largest = 0;
var finalArr = [];
 for (var i = 0; i < arr.length ; i++){
   largest = arr[i][0];
  for (var j = 0; j < arr[i].length ; j++){
    if (largest < arr[i][j]){
      largest = arr[i][j];
    }
  }
  finalArr.push(largest);
}
return finalArr;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
