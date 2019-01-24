// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  var modFixedValue = fixedValue + 1;
  return modFixedValue;
  
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
