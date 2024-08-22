const a: string = "hello";
const numbers: number[] = [1, 2];

function test(): void {}
const objects: { strings: string; other: number } = {
  strings: "hello",
  other: 3,
};

const arrowFunction = (): void => {};

let casesType: number | boolean = true;
casesType = 14;

const variable1: { a: number; b: string } = { a: 20, b: "string" };

const arrayTypeChoice: (number | string)[] = ["hello", 2, 3];

class autreClass {
  constructor(name: string) {}
}

interface testClass {
  test(): void;
  autre: () => number;
}

class autreClass1 implements testClass {
  constructor(name: string) {}
  test(): void {}
  autre: () => number;
}
