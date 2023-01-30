var fs = require("fs");
var text = fs.readFileSync("day11.txt", "utf-8");
let monkeys = [];
text.split("\r\n\r\n").forEach((monkey) => {
  let monkeyLine = [];
  monkey.split("\r\n").forEach((l) => {
    monkeyLine.push(l);
  });
  monkeys.push(monkeyLine);
});

let newMonkeys = [];
for (let i = 0; i < monkeys.length; i++) {
  let monkey = {
    no: 0,
    items: [],
    opSign: "",
    opNum: "",
    modBy: 0,
    trueMon: 0,
    falseMon: 0,
    itemsCount: 0,
  };
  newMonkeys.push(monkey);

  newMonkeys[i].no = parseInt(monkeys[i][0].split(" ")[1].substring(0, 1));
  let monItems = monkeys[i][1].split(": ")[1].split(", ");
  monItems.forEach((item) => {
    newMonkeys[i].items.push(parseInt(item));
  });
  newMonkeys[i].opSign = monkeys[i][2].trim().split(" ")[4];
  newMonkeys[i].opNum = monkeys[i][2].trim().split(" ")[5];
  newMonkeys[i].modBy = monkeys[i][3].split(" ").at(-1);
  newMonkeys[i].trueMon = parseInt(monkeys[i][4].split(" ").at(-1));
  newMonkeys[i].falseMon = parseInt(monkeys[i][5].split(" ").at(-1));
}

let rounds = 10000;
let mod = 1;
for (j = 0; j < newMonkeys.length; j++) {
  mod *= newMonkeys[j].modBy;
}

for (let i = 1; i <= rounds; i++) {
  for (j = 0; j < newMonkeys.length; j++) {
    let opSign = newMonkeys[j].opSign;
    let opNum = newMonkeys[j].opNum;
    for (k = 0; k < newMonkeys[j].items.length; k++) {
      let worry = newMonkeys[j].items[k];
      if (opSign == "*" && opNum != "old") {
        worry = worry * parseInt(opNum);
      } else if (opSign == "*" && opNum == "old") {
        worry = worry * worry;
      } else {
        worry = worry + parseInt(opNum);
      }
      //   console.log(worry);
      worry = worry % mod;
      //   worry = Math.floor(worry / 3);
      let nextMon = 0;
      if (worry % newMonkeys[j].modBy == 0) nextMon = newMonkeys[j].trueMon;
      else nextMon = newMonkeys[j].falseMon;
      newMonkeys[nextMon].items.push(worry);
      newMonkeys[j].items.splice(0, 1);
      k--;
      newMonkeys[j].itemsCount++;
    }
  }
}
console.log(newMonkeys);
let counts = newMonkeys.map((m) => {
  return m.itemsCount;
});
console.log(counts);
console.log(counts.sort((a, b) => b - a)[0]);
console.log(counts.sort((a, b) => b - a)[1]);
console.log(counts.sort((a, b) => b - a)[0] * counts.sort((a, b) => b - a)[1]);
