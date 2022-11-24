
//  type定义类型别名
type IDtype = string | number | boolean

type PointType = { x: number, y: number, z?: number }

function printId(id: IDtype) {

}

function printPoint(point: PointType) {
    console.log(point.x)
    console.log(point.y)
    console.log(point.z)
}
export { }