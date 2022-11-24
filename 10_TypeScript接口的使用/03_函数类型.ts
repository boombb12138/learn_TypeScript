// type ClacFn = (n1: number, n2: number) => number
// 等同于
// 通过接口定义一个函数
interface ClacFn {
  (n1: number, n2: number): number;
}

function calc(num1: number, num2: number, clacFn: ClacFn) {
  return clacFn(num1, num2);
}

const add: ClacFn = (num1, num2) => {
  return num1 + num2;
};

console.log(calc(20, 30, add));
