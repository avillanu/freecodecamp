const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today,tomorrow } = HIGH_TEMPERATURES;

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
