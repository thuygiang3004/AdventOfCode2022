var fs = require("fs");
var text = fs.readFileSync("day10.txt", "utf-8");
var lines = text.split("\r\n");

let accumValue = 1;
let currentCycle = 0;
let points = [];
// points.push([currentCycle, accumValue]);

for (let l = 0; l < lines.length; l++) {
  let line = lines[l].split(" ");
  if (line[0] == "noop") {
    currentCycle += 1;
    points.push([currentCycle, accumValue]);
  } else {
    currentCycle += 1;
    points.push([currentCycle, accumValue]);
    currentCycle += 1;
    points.push([currentCycle, accumValue]);
    accumValue += parseInt(line[1]);
  }
}
console.log(points);

let crt = [];
// for (let i = 0; i < 6; i++) {
//   let row = [];
//   crt.push(row);
//   for (let j = 0; j < 40; j++) {
//     // crt[i].push("#");
//     if (Math.abs(points[i][0] - points[i][1]) <= 1) {
//       crt[i].push("#");
//     } else crt[i].push(" ");
//   }
// }
for (let i = 0; i < 240; i++) {
  // crt[i].push("#");
  if (Math.abs((points[i][0] % 40) - 1 - points[i][1]) <= 1) {
    crt.push("##");
  } else crt.push("  ");
}
console.log(crt.length);
console.log(JSON.stringify(crt));
