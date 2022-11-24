// 类型的参数化
// 在定义这个函数时，我不决定这些参数的类型
// 而是让调用者以参数的形式告知，我这里的参数应该是怎么样的

function sum<Type>(num: Type): Type {
  return num;
}

// 1 调用方式一：明确的传入类型
sum<number>(20);
sum<{ name: string }>({ name: "why" });
sum<any[]>(["abc"]);

// 2 调用方式二：类型推导
sum(50);
sum("abc");

function sum2<Type>(num1: Type) {
  return num1;
}
// 希望参数的类型由调用函数的以参数的形式告知
// 方式一 明确指定参数类型
sum2<string>("20");
sum2<string[]>(["abc"]);
sum2<{ name: string }>({ name: "why" });
// 方式二 类型推导
sum2(20);

export {};
