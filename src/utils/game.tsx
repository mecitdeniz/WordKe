import wordFile from '../assets/filtered.js';
const words = wordFile.words;

export function findPuzzle() {
  let combination: string[][] = [[], [], []];
  while (!isPuzlle(combination)) {
    combination = createCombination();
  }
  const puzzle = shuffle(combination);
  return {
    puzzle,
    goal: combination,
  };
}

function getRandomPosition(n: number) {
  return Math.floor(Math.random() * n);
}

function shuffle(array: string[][]) {
  // @ts-ignore
  let arr1d = [].concat(...array);
  for (let i = 0; i < arr1d.length; i++) {
    const k = getRandomPosition(arr1d.length);
    const temp = arr1d[i];
    arr1d[i] = arr1d[k];
    arr1d[k] = temp;
  }
  const newArr = [];
  while (arr1d.length) newArr.push(arr1d.splice(0, 3));
  return newArr;
}

function isPuzlle(combination: string[][]) {
  for (let i = 0; i < 3; i++) {
    let col = combination[0][i] + combination[1][i] + combination[2][i];

    if (!words.includes(col)) return false;
    if (
      // @ts-ignore
      col === combination[0].toString().split(',').join('') ||
      // @ts-ignore
      col === combination[0].toString().split(',').join('') ||
      // @ts-ignore
      col === combination[0].toString().split(',').join('')
    ) {
      return false;
    }
  }
  return true;
}

function createCombination() {
  let puzzle: string[][] = [[], [], []];

  for (let i = 0; i < 3; i++) {
    const randonIndex = Math.floor(Math.random() * words.length);
    const word = words[randonIndex];
    puzzle[i][0] = word[0];
    puzzle[i][1] = word[1];
    puzzle[i][2] = word[2];
  }
  return puzzle;
}
