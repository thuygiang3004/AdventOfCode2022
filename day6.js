let input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
let letters = Array.from(input);

const getStartPacket = async () => {
  // for (let i = 0; i < letters.length; i++) {
  //   fourLetters = new Set();
  //   for (let j = i; j < i + 14; j++) {
  //     fourLetters.add(letters[j]);
  //   }

  //   if (fourLetters.size == 14) return i + 14;
  // }

  for (let k = 13; k < letters.length; k++) {
    const set = new Set();
    // console.log(k);
    for (let j = 13; j >= 0; j--) {
      set.add(letters[k - j]);
      // console.log(letters[k - j]);
    }
    if (set.size === 14) return k + 1;
  }
};

let startPacket = getStartPacket();

console.log(startPacket);
