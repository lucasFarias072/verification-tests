// import functions from "./functions.mjs"
const functions = require("./functions.js");

describe("Valor aleatório", () => {
  test("Deve retornar um valor entre -4 e -7", () => {
    expect(
      functions.getRandomValueCall1 < -3 && functions.getRandomValueCall1 >= -7,
    ).toBe(true);
  });
  test("Deve retornar um valor entre 0 a 10", () => {
    expect(
      functions.getRandomValueCall12 >= 0 &&
        functions.getRandomValueCall12 < 10,
    ).toBe(true);
  });
});

describe("Tipo de número", () => {
  test("Número deve ser par", () => {
    expect(functions.isNumberEvenCall1).toBe(true);
  });
  test("Número deve ser ímpar", () => {
    expect(functions.isNumberEvenCall2).toBe(false);
  });
});

describe("Array de números inteiros", () => {
  test("Deve retornar erro pelo números ser ímpar", () => {
    expect(functions.getArrayNumbersCall1).toThrow(
      "Apenas números pares permitidos",
    );
  });
  test("Deve retornar array de tamanho 10", () => {
    expect(functions.getArrayNumbersCall2).toBe(true);
  });
});
