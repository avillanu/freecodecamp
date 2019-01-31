/*

Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  var newArr = [];
    if(Array.isArray(arr)){
      arr.map(function(elem){
        if (Array.isArray(elem)){
          var recursion = steamrollArray(elem);
          recursion.map(function(elem2){newArr.push(elem2);}); } 
        else {
        newArr.push(elem); }});
}
	console.log(newArr);
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
