
// number | string 联合类型
function printID(id: number | string) {
    if (typeof id === "string") {
        // 使用联合类型的值id时，对id的操作要小心 注意类型判断
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

printID(123)
printID("abc")