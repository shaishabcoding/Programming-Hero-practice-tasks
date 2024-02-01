const nums = [12, 45, 89, 77, 44, 78, 109, 26];
console.log(nums);

// const evenNums = nums.filter(num => !(num % 2)); //shortcut


const evenNums = [];

for (let num of nums) {
  if (num % 2 === 0) {
    evenNums.push(num);
  }
}

console.log(evenNums);