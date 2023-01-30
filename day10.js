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

let checkPoints = [20, 60, 100, 140, 180, 220];
let strength = 0;
for (let i = 1; i < points.length; i++) {
  checkPoints.forEach((value) => {
    if (points[i][0] >= value && points[i - 1][0] < value) {
      console.log(points[i]);
      strength += value * points[i - 1][1];
    }
  });
}
console.log(strength);
