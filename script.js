function mapLetters(str) {
  let newobj = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!newobj[char]) {
      newobj[char] = [];
    }
    newobj[char].push(i);
  }

  return newobj;
}

console.log(mapLetters("hello"));
