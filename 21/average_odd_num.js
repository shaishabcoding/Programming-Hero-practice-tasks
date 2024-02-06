function oddAverage(numbers) {
  const odds = [];
  for (let number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (let odd of odds) {
    sum += odd;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}

const numbers = [22, 34, 33, 12, 15, 35, 53, 55, 34, 64, 67, 32];
const avg = oddAverage(numbers);

console.log("average of the odd numbers is: " + avg);
