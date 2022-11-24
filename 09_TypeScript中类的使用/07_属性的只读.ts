class Person {
    readonly name: string
    age?: number
    readonly friend?: Person
    // 只读属性可以在构造器中赋值，赋值之后就不能修改了
    // 属性本身不能进行修改 但是如果它是对象类型，它的属性可以修改
    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
}
const p = new Person('why', new Person('kobe'))
console.log(p.name)
console.log(p.friend)

if (p.friend) {
    p.friend.age = 30
}