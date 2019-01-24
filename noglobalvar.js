// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line

var moddedBookList = bookList.slice();

function add(modBookList, bookName) {
   modBookList.push(bookName);
   return modBookList;
 
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (modBookList, bookName) {
  if (modBookList.indexOf(bookName) >= 0) {
    var bookIndex = moddedBookList.indexOf(bookName);
    modBookList.splice(bookIndex, 1);
    return modBookList;
    // Add your code above this line
    }
}
var newBookList = bookList.slice();
var newerBookList = bookList.slice();
var newestBookList = bookList.slice();

newBookList = add(newBookList, 'A Brief History of Time');
newerBookList = remove(newerBookList, 'On The Electrodynamics of Moving Bodies');
newestBookList = add(newestBookList, 'A Brief History of Time');
newestBookList = remove(newestBookList,'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);
