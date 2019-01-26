/*

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
  var total = 0;
  var count = arr[0] - arr[1];
  while (count !== 0){
   if (arr[0] > arr[1]){
     var shifted = arr.shift();
     total += shifted;
     arr.unshift(shifted - 1);
      if (arr[0] - arr[1] ===0){
        total = total + arr[0]};
      } 
   else {
     var shifted = arr.shift();
     total += shifted;
     arr.unshift(shifted + 1);
     console.log(arr[0] + "" + arr[1]);
      if (arr[0] - arr[1] ===0){
        total = total + arr[0]};
      } 
      
  count = arr[0] - arr[1];
   } 
  return total;
}
