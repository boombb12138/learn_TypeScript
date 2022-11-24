function foo() {
    return "abc"
}

function bar() {
    return 123
}

let flag = true
// 没有类型推导就要写类型注解
// 不能明确函数返回什么类型
let result: unknown
if (flag) {
    result = foo()
} else {
    result = bar()
}

// any类型可以赋值给任意类型
// unknown类型只能赋值给any和unknown类型
let message: any = result
let num: unknown = result


console.log(result)

export { }