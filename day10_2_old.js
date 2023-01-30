var fs = require("fs");
var text = fs.readFileSync("day10.txt", "utf-8");
var lines = text.split("\r\n");

let accumValue = 1;
let currentCycle = 0;
let points = [];

for (let l = 0; l < lines.length; l++) {
  let line = lines[l].split(" ");
  currentCycle += line[0] == "noop" ? 1 : 2;
  if (line[0] == "addx") {
    accumValue += parseInt(line[1]);
  }
  points.push([currentCycle, accumValue]);
}
// console.log(points[points.length - 1]);

let newPoints = [[1, 1], ...points];
let dots = ["#"];
// console.log(newPoints);
for (let i = 1; i < 240; i++) {
  if (newPoints[i][0] != parseInt(newPoints[i - 1]) + 1) {
    newPoints.splice(i, 0, [
      parseInt(newPoints[i - 1]) + 1,
      newPoints[i - 1][1],
    ]);
  }

  if (
    (newPoints[i][0] % 40) - 1 <= newPoints[i - 1][1] + 1 &&
    (newPoints[i][0] % 40) - 1 >= newPoints[i - 1][1] - 1
  ) {
    console.log("newPoints[i][0] % 40: " + (newPoints[i][0] % 40));
    console.log("newPoints[i-1][1]" + newPoints[i - 1][1]);
    dots.push("#");
  } else dots.push(".");
}
console.log(JSON.stringify(dots));

// // console.log(newPoints);
// let rows = [];
// for (let i = 0; i < 6; i++) {
//   let row = newPoints.splice(0, 40);
//   rows.push(row);
//   // console.log(row);
// }
// // console.log(rows);
// let dots = [];
// for (i = 0; i < rows.length; i++) {
//   dots.push([]);
//   for (j = 0; j < 40; j++) {
//     rows[i][j][0] = rows[i][j][0] % 40;
//     if (
//       rows[i][j][0] <= rows[i][j - 1][1] + 2 &&
//       rows[i][j][0] >= rows[i][j - 1][1] - 2
//     ) {
//       dots[i].push("#");
//     } else dots[i].push(".");
//   }
// }
// console.log(rows);
// console.log(dots);
