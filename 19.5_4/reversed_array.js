const colors = ['red', 'blue', 'green', 'pink', 'gray'];

console.log(colors);


// const reversedColors = colors.reverse(); //shortcut


const reversedColors = [];

for (let i = colors.length; i > 0;) {
  reversedColors.push(colors[--i]);
}



console.log(reversedColors);