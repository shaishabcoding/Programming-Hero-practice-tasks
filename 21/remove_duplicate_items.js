const friends = [
  "Rohim",
  "Korim",
  "Raju",
  "Mina",
  "Korim",
  "Rohim",
  "Emon",
  "Rohim",
];

console.log(friends);

function uniqueItems(arr) {
  const uniqueArr = [];
  for (const item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}

const uniqueFriends = uniqueItems(friends);

console.log(uniqueFriends);
