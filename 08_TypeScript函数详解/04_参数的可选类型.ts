
// 可选类型必须写在必选类型的后面
function foo(x: number, y?: number) {

}
foo(20, 30)
foo(20)
export { }