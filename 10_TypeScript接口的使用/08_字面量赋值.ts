

interface IPerson {
    name: string,
    age: number,
    height: number
}

function printInfo(person: IPerson) {
    console.log(person)
}

// 会报错 是因为p 的类型限制为IPerson 只能传入name，age，height这3个属性
// const p: IPerson = {
//     name: "why",
//     age: 18,
//     height: 1.88,
//     address: '广州市'
// }

// 将对象单独提出来
const info = {
    name: "why",
    age: 18,
    height: 1.88,
    address: '广州市'
}

const p: IPerson = info//就不会报错 因为这里是对象的引用赋值
// 一旦是对象的引用赋值 就会有freshness擦除操作
// freshness擦除操作：擦掉在IPerson中没有的属性，如果info依然包含IPerson中所有的属性，就通过类型检测
printInfo(info)

