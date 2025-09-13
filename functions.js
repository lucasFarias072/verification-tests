function getRandomValue(tail, head) {
  return Math.floor(Math.random() * (head - tail) + tail);
}

function isNumberEven(n) {
  return n % 2 === 0;
}

function getArrayNumbers(size) {
  if (size % 2 !== 0) throw new Error("Apenas números pares permitidos");
  const box = [];
  let even = 0;
  let odd = 0;
  while (box.length < size) {
    let number = getRandomValue(-10, 10);
    if (!box.includes(number)) {
      const numberIsEven = isNumberEven(number);
      if (numberIsEven && even < size / 2) {
        box.push(number);
        even++;
      } else if (!numberIsEven && odd < size / 2) {
        box.push(number);
        odd++;
      }
    }
  }
  return box;
}

module.exports = {
  getRandomValueCall1: getRandomValue(-3, -7),
  getRandomValueCall12: getRandomValue(0, 10),
  isNumberEvenCall1: isNumberEven(4),
  isNumberEvenCall2: isNumberEven(5),
  getArrayNumbersCall1: () => getArrayNumbers(9), // p/ funções que lançam erros, é preciso arrow function
  getArrayNumbersCall2: getArrayNumbers(10).length === 10,
};
