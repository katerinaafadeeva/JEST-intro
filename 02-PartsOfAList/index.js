// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
  const newArr = arr
    .map((a, b) => [arr.slice(0, b).join(" "), arr.slice(b).join(" ")])
    .slice(1, arr.length);
  return newArr;
}
module.exports = partlist;
