// 通过类型别名(type)来声明对象类型
type Info = { name: string, age: number }

// 另一种方式声明对象类型：接口interface
// 接口里可以定义可选类型
// 也可以定义只读属性
interface IInfo {
    readonly name: string
    age: number
    friend?: {
        name: string
    }
}

const info: IInfo = {
    name: 'why',
    age: 12,
    friend: {
        name: 'kobe'
    }
}

console.log(info.friend?.name)
export { }