var fs = require("fs");
var text = fs.readFileSync("day12.txt", "utf-8");
lines = text.split("\r\n");

const letterToNum = (letter) => {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let l of Array.from(alphabets)) {
    if (l == letter) return Array.from(alphabets).indexOf(l) + 1;
  }
};

let grid = [];
lines.forEach((l) => {
  grid.push(Array.from(l));
});

let startRow = 0;
let startCol = 0;
let endRow = 0;
let endCol = 0;

for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    if (grid[row][col] == "S") {
      startRow = row;
      startCol = col;
      grid[row][col] = "a";
    }
    if (grid[row][col] == "E") {
      endRow = row;
      endCol = col;
      grid[row][col] = "z";
    }
  }
}
// console.log(grid);

let queue = [];
let visited = new Set();
queue.push([0, startRow, startCol]);
visited.add(`${startRow}|${startCol}`);

while (queue.length >= 1) {
  //   console.log(queue);
  let current = queue.shift();
  //   console.log(current);

  let curSteps = current[0];
  let curRow = current[1];
  let curCol = current[2];

  let neighbors = [];
  if (curRow > 0) {
    neighbors.push([curRow - 1, curCol]);
  }
  if (curRow < grid.length - 1) {
    neighbors.push([curRow + 1, curCol]);
  }
  if (curCol > 0) {
    neighbors.push([curRow, curCol - 1]);
  }
  if (curCol < grid[0].length - 1) {
    neighbors.push([curRow, curCol + 1]);
  }
  for (let n of neighbors) {
    let position = `${n[0]}|${n[1]}`;
    // console.log(position);
    if (visited.has(position)) {
      //   console.log("in visited");
      continue;
    }
    if (letterToNum(grid[n[0]][n[1]]) - letterToNum(grid[curRow][curCol]) > 1) {
      //   console.log("can't reach");
      continue;
    }
    if (n[0] == endRow && n[1] == endCol) {
      console.log("reached: " + (curSteps + 1));
      return;
    }

    visited.add(`${n[0]}|${n[1]}`);
    queue.push([curSteps + 1, n[0], n[1]]);
    // console.log(queue);
  }
}

// console.log(queue);
// console.log(visited);
