var fs = require("fs");
var text = fs.readFileSync("./day9.txt", "utf-8");
var lines = text.split("\r\n");

let visited = new Set();
let start = { x: 0, y: 0 };
let knots = [];
for (let i = 0; i < 10; i++) {
  knots.push({ x: 0, y: 0 });
}
visited.add(JSON.stringify(start));

for (let line = 0; line < lines.length; line++) {
  l = lines[line].split(" ");
  for (let step = 1; step <= l[1]; step++) {
    let xChange = 0;
    let yChange = 0;
    switch (l[0]) {
      case "R":
        xChange = 1;
        break;
      case "L":
        xChange = -1;
        break;
      case "U":
        yChange = 1;
        break;
      case "D":
        yChange = -1;
        break;
      default:
        console.log("Input error");
    }

    //Head new position
    knots[0].x += xChange;
    knots[0].y += yChange;

    for (let knot = 0; knot < knots.length - 1; knot++) {
      let head = knots[knot];
      let tail = knots[knot + 1];

      //Diff between head and tail
      dif_x = head.x - tail.x;
      dif_y = head.y - tail.y;

      if (Math.abs(dif_x) == 2 || Math.abs(dif_y) == 2) {
        if (dif_y == 0) tail.x += dif_x / 2;
        else if (dif_x == 0) tail.y += dif_y / 2;
        else {
          tail.x += dif_x > 0 ? 1 : -1;
          tail.y += dif_y > 0 ? 1 : -1;
        }
      }
      if (knot == knots.length - 2) {
        visited.add(JSON.stringify(tail));
      }
    }
  }
}

console.log(visited.size);
