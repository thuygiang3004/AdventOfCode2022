const data =
  "Blueprint 1: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 20 obsidian.\nBlueprint 2: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 2 ore and 15 obsidian.";

const robotType = {
  0: "ore robot",
  1: "clay robot",
  2: "obsidian robot",
  3: "geode robot",
};

const materialsType = {
  0: "ore",
  1: "clay",
  2: "obsidian",
};

const lines = data.split(/\n/);
let ss = [];
lines.forEach((l) => {
  let l1 = l
    .replaceAll("ore", 0)
    .replaceAll("clay", 1)
    .replaceAll("obsidian", 2);
  let s = l1.split(": ")[1].split(". ");
  let simples = [];
  s.forEach((sentence) => {
    let convert = sentence.match(/(\d+) (\d)/g);
    simples.push(convert);
  });
  ss.push(simples);
});
console.log(ss);
