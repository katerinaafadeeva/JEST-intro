// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i !== str.length - 1) {
      newStr += str[i];
    }
  }
  return newStr;
}

module.exports = removeChar;
