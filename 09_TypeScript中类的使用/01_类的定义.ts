class Person {
    // 属性必须要有默认值 必须要初始化 否则编译报错
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log(this.name + 'eating')
    }
}

const p = new Person("why", 18)

console.log(p.name)
console.log(p.age)
p.eating()

export { }