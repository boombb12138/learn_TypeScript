// function add(a1: number | string, a2: number | string) {
//     if (typeof a1 === 'number' && typeof a2 === 'number') {
//         return a1 + a2
//     } else if (typeof a1 === 'string' && a2 === 'string') {
//         return a1 + a2
//     }

// }

// 函数的重载，函数的名称相同，但是参数不同
// 函数的声明
function add(num1: number, num2: number): number;//没有函数体
function add(num1: string, num2: string): string;
function add(num1: string, num2: number): void;

// 函数的实现
function add(num1: any, num2: any): any {
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.length + num2.length
    }
    return num1 + num2
}

const result = add(20, 30)
const result2 = add('abc', 'cba')
const result3 = add('abc', 20)

console.log(result)
console.log(result2)
console.log(result3)
// 在函数的重载中，实现函数不能直接被调用
// add({ name: 'why' }, { age: 18 })

export { }