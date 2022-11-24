
// 给参数加类型注解
// 给返回值加上类型注解，也可以不加，会自动推导
function sum(num1: number, num2: number): number {
    return num1 + num2
}

sum(12, 23)