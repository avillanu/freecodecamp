/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/
function isPrime(num) {
  for (var i = 2; i < num - 1; i++){
    if (num % i == 0){
      return false;
    } 
  }
   return true;
}

function sumPrimes(num) {
  var sum = 0;

  for (var i = 2; i < num; i++){
    if (isPrime(i)===true){
      sum += i;
    }
  }
  if (isPrime(num)){
    sum += num;
  }
 // sum += num;
  return sum;
}




console.log(sumPrimes(977));
