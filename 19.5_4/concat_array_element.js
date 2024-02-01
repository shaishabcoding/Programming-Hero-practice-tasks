const arr = ['Tik','Tok','Tuk','Teo'];

console.log(arr);


// const str = arr.join('');//shortcut

let str = '';

for (let el of arr) {
  str += el;
}


console.log(str);