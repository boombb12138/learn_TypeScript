

function foo(message?: string) {
    console.log(message)
}
// 类似于
// function foo(message: string | undefined) {
//     console.log(message)
// }

foo("123")
foo(undefined)
foo()