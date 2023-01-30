var fs = require("fs");
var text = fs.readFileSync("./day9.txt", "utf-8");
var lines = text.split("\r\n");

let travelled = [];
const start = { x: 0, y: 0 };
let head = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };

travelled.push(start);

lines.forEach((l) => {
  let line = l.split(" ");
  console.log(line);
  if (line[0] == "R") {
    for (let i = 1; i <= line[1]; i++) {
      head.x++;
      if (head.y == tail.y && head.x - tail.x == 2) {
        // console.log(head);
        let newTail = { ...tail };
        newTail.x++;
        tail.x = newTail.x;
        travelled.push(newTail);
      } else if (head.y != tail.y && head.x - tail.x == 2) {
        let newTail = { ...tail };
        newTail.y = head.y;
        newTail.x = head.x - 1;
        tail.x = newTail.x;
        tail.y = newTail.y;
        travelled.push(newTail);
      }
    }
  } else if (line[0] == "L") {
    for (let i = 1; i <= line[1]; i++) {
      head.x--;
      if (tail.x - head.x == 2) {
        let newTail = { ...tail };
        if (head.y != tail.y) {
          newTail.y = head.y;
          tail.y = newTail.y;
        }
        newTail.x--;
        travelled.push(newTail);
        tail.x = newTail.x;
      }
    }
  } else if (line[0] == "U") {
    for (let i = 1; i <= line[1]; i++) {
      head.y++;
      if (head.x == tail.x && head.y - tail.y == 2) {
        let newTail = { ...tail };
        newTail.y++;
        travelled.push(newTail);
        tail.y = newTail.y;
      } else if (head.x != tail.x && head.y - tail.y == 2) {
        let newTail = { ...tail };
        newTail.x = head.x;
        newTail.y++;
        travelled.push(newTail);
        tail.x = newTail.x;
        tail.y = newTail.y;
      }
    }
  } else if (line[0] == "D") {
    for (let i = 1; i <= line[1]; i++) {
      head.y--;
      if (head.x == tail.x && tail.y - head.y == 2) {
        let newTail = { ...tail };
        newTail.y--;
        travelled.push(newTail);
        tail.y = newTail.y;
      } else if (head.x != tail.x && tail.y - head.y == 2) {
        let newTail = { ...tail };
        newTail.x = head.x;
        newTail.y--;
        travelled.push(newTail);
        tail.x = newTail.x;
        tail.y = newTail.y;
      }
    }
  }
});

console.log(travelled);

let newTravelled = travelled.map((item) => JSON.stringify(item));
let final = new Set();
newTravelled.forEach((i) => final.add(i));
console.log(final.size);

// console.log(head);
// console.log(tail);
