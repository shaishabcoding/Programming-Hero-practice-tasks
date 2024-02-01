const str = 'I am Shaishab';

console.log(str);

// const reversedStr = str.split(' ').reverse().join(' '); //shortcut 


let reversedStr = '';

const words = str.split(' ');

for (let word of words) {
  reversedStr = word + ' ' + reversedStr;
}



console.log(reversedStr);