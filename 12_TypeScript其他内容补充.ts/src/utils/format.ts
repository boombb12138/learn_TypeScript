export namespace time {
  export function format(time: string) {
    return "2022-2-2";
  }

  // 命名空间里的东西如果需要在外部拿到就要导出
  export const name: string = "why";
}

export namespace price {
  export function format(price: number) {
    return "99.00";
  }
}
time.name;
time.format("2022-3-18");
price.format(179);
