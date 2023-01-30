var fs = require("fs");
const { transferableAbortSignal } = require("util");
var text = fs.readFileSync("./day8.txt", "utf-8");
var lines = text.split("\r\n");
// console.log(lines);

let trees = [];
let badTrees = [];
let maxScenic = 0;

for (let i = 0; i < lines.length; i++) {
  let l = Array.from(lines[i]);
  trees.push(l);
}
let width = trees[0].length;
let height = trees.length;

// console.log(trees);
for (let i = 1; i < height - 1; i++) {
  for (let j = 1; j < width - 1; j++) {
    let maxLeft = 0;
    let maxRight = 0;
    let maxTop = 0;
    let maxDown = 0;
    //check to the right
    for (let k = j + 1; k < width; k++) {
      if (trees[i][k] < trees[i][j]) {
        maxRight += 1;
      } else {
        maxRight += 1;
        break;
      }
    }
    //check to the left
    for (let k = j - 1; k >= 0; k--) {
      if (trees[i][k] < trees[i][j]) {
        maxLeft += 1;
      } else {
        maxLeft += 1;
        break;
      }
    }
    //check to the top
    for (let k = i - 1; k >= 0; k--) {
      if (trees[k][j] < trees[i][j]) {
        maxTop += 1;
      } else {
        maxTop += 1;
        break;
      }
    }
    //check to the down
    for (let k = i + 1; k < height; k++) {
      if (trees[k][j] < trees[i][j]) {
        maxDown += 1;
      } else {
        maxDown += 1;
        break;
      }
    }

    let scenicScore = maxDown * maxLeft * maxRight * maxTop;
    if (scenicScore > maxScenic) maxScenic = scenicScore;
    // console.log("[" + i + "]" + "[" + j + "] : " + scenicScore);

    // console.log("[" + i + "]" + "[" + j + "] : " + maxDown);
  }
}

// let answer = badTrees.length + (width + height - 2) * 2;
// console.log(answer);
// console.log(trees);
console.log(maxScenic);
