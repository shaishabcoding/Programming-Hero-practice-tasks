const heights = [167, 190, 120, 165, 137];


function lowestNumber(arr) {
  // return Math.min(...arr);//shortcut 
  let minNum = arr[0];
  for (let item of arr) {
    if(item < minNum){
      minNum = item;
    }
  }
  return minNum;
}


console.log(lowestNumber(heights)) //120