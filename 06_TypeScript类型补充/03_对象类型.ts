
// 对象类型的类型注解
// point 形参
// z?:number 表示 z 是可选的
function printPoint(point: { x: number, y: number, z?: number }) {
    console.log(point.x)
    console.log(point.y)
    console.log(point.z)
}
printPoint({ x: 12, y: 76 })
printPoint({ x: 12, y: 76, z: 111 })
