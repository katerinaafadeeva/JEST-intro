// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    if (obj[list[i].language] === undefined) {
      obj[list[i].language] = 1;
    } else {
      obj[list[i].language] += 1;
    }
  }
  return obj;
}

module.exports = countLanguages;
