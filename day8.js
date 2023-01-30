var fs = require("fs");
var text = fs.readFileSync("./day8.txt", "utf-8");
var lines = text.split("\r\n");
// console.log(lines);

let trees = [];
let badTrees = [];

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
      if (trees[i][k] > maxRight) {
        maxRight = trees[i][k];
      }
    }
    //check to the left
    for (let k = j - 1; k >= 0; k--) {
      if (trees[i][k] > maxLeft) {
        maxLeft = trees[i][k];
      }
    }
    //check to the top
    for (let k = i - 1; k >= 0; k--) {
      if (trees[k][j] > maxTop) {
        maxTop = trees[k][j];
      }
    }
    //check to the down
    for (let k = i + 1; k < height; k++) {
      if (trees[k][j] > maxDown) {
        maxDown = trees[k][j];
      }
    }

    // console.log("I:" + i + "J:" + j);
    // console.log(maxRight);

    if (
      trees[i][j] > maxLeft ||
      trees[i][j] > maxDown ||
      trees[i][j] > maxRight ||
      trees[i][j] > maxTop
    ) {
      badTrees.push(trees[i][j]);
    }
  }
}
let answer = badTrees.length + (width + height - 2) * 2;
console.log(answer);
console.log(badTrees);
