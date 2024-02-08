const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function smallestName(names = []) {
  // return names.reduce((a, c) => a.length < c.length ? a : c);//shortcut

  let shortName = names[0];
  for (let name of names) {
    if (name.length < shortName.length) {
      shortName = name;
    }
  }

  return shortName;
}


console.log(smallestName(names)); //ron