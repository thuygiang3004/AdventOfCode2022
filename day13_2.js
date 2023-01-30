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
let data = [];
pairs.forEach((p) => p.forEach((e) => data.push(JSON.parse(e))));
data.push([[2]], [[6]]);
console.log(data);

const compare = (left, right) => {
  // console.log(left, right);
  let result = 0;
  if (typeof left == "number" && typeof right != "number") {
    left = [left];
  }
  if (typeof right == "number" && typeof left != "number") {
    right = [right];
  }
  if (typeof left == "number" && typeof right == "number") {
    // console.log(left, right);
    if (left > right) {
      // console.log("left > right");
      result = -1;
      return result;
    }
    if (left < right) {
      // console.log("left < right");
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
        // console.log("right = left length");
        result = 0;
      } else {
        // console.log("right runs out of items first");
        result = -1;
        return result;
      }
    } else {
      // console.log("left runs out of items first");
      result = 1;
      return result;
    }
    return result;
  }
};

data.sort((a, b) => compare(b, a));
console.log(data);
let a = 0;
let b = 0;
for (let k = 0; k < data.length; k++) {
  if (JSON.stringify(data[k]) == "[[2]]") a = k + 1;
  if (JSON.stringify(data[k]) == "[[6]]") b = k + 1;
}
console.log(a, b);
console.log(a * b);
