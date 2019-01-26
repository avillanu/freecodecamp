// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
  function urlSlug(title) {
  	var splitArr = title.split(/\W/);
    var noBlanks = splitArr.filter(word => word !== '')
 	  var joined = noBlanks.join("-");
	  var lowerCase = joined.toLowerCase();
	  return lowerCase;
}
// Add your code above this

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
