var fs = require("fs");
var text = fs.readFileSync("./day7.txt", "utf-8");
var lines = text.split("\n");

const getPaths = () => {
  let currentPath = "";
  let dic = new Map();

  lines.forEach((l) => {
    let l1 = l.split(" ");
    if (l1[0] == "$") {
      if (l1[1] == "cd") {
        if (l1[2].trim() == "/") {
          currentPath = "/root";
          dic.set(currentPath, 0);
          // console.log(dic);
        } else if (l1[2].trim() == "..") {
          currentPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
          // console.log("|" + currentPath + "|");
        } else {
          newFolder = l1[2].trim();
          currentPath = currentPath + "/" + newFolder;
          dic.set(currentPath, 0);
        }
      }
    } else if (l1[0] != "dir") {
      let size = parseInt(l1[0]);

      let tempPath = currentPath;
      for (let i = 0; i < currentPath.split("/").length - 1; i++) {
        // console.log(currentPath);
        if (isNaN(dic[tempPath])) {
          dic[tempPath] = 0;
        }
        dic[tempPath] += size;
        tempPath = tempPath.substring(0, tempPath.lastIndexOf("/"));
      }
    }
  });
  // console.log(dic);
  return dic;
};

const paths = getPaths();
let currentFree = 70000000 - paths["/root"];
let needDeleteSize = 30000000 - currentFree;

let totalSize = 0;
let deletePath = "/root";
let deletePathSize = paths[deletePath];

paths.forEach((value, key) => {
  if (paths[key] < 100000) totalSize += paths[key];
  if (paths[key] >= needDeleteSize) {
    // console.log(paths[deletePath]);
    if (paths[key] < paths[deletePath]) {
      deletePath = key;
      deletePathSize = paths[deletePath];
    }
  }
});

console.log(totalSize);
// console.log(paths);
console.log(deletePathSize);
