var fs = require("fs");
var text = fs.readFileSync("day13.txt", "utf-8");

const getPairs = (input) => {
  let separated = [];
  input.split("\r\n\r\n").forEach((pair) => {
    separated.push(pair.split("\r\n"));
  });
  return separated;
};

let pairs = getPairs(text);
// console.log(pairs);

let total = 0;

const compare = (left, right) => {
  console.log(left, right);
  let result = 0;
  if (typeof left == "number" && typeof right != "number") {
    left = [left];
  }
  if (typeof right == "number" && typeof left != "number") {
    right = [right];
  }
  if (typeof left == "number" && typeof right == "number") {
    console.log(left, right);
    if (left > right) {
      console.log("left > right");
      result = -1;
      return result;
    }
    if (left < right) {
      console.log("left < right");
      result = 1;
      return result;
    }
    return result;
  }
  if (typeof left != "number" && typeof right != "number") {
    let j = 0;
    for (j; j < Math.min(left.length, right.length); j++) {
      result = compare(left[j], right[j], false);
      if (result == -1 || result == 1) return result;
    }

    if (j == right.length) {
      if (right.length == left.length) {
        console.log("right = left length");
        result = 0;
      } else {
        console.log("right runs out of items first");
        result = -1;
        return result;
      }
    } else {
      console.log("left runs out of items first");
      result = 1;
      return result;
    }
    return result;
  }
};

for (let i = 0; i < pairs.length; i++) {
  let left = JSON.parse(pairs[i][0]);
  let right = JSON.parse(pairs[i][1]);

  let result = compare(left, right);
  if (result == 1) total += i + 1;
  console.log(i, result);
}
console.log("total:" + total);
