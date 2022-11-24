
// 方法1 联合类型
// function getLength(args: string | any[]) {
//     return args.length
// }

// console.log(getLength('abc'))
// console.log(getLength([123, 123, 421]))

// 方法2 函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any): number {
    return args.length
}
console.log(getLength('abc'))
console.log(getLength([123, 123, 421]))