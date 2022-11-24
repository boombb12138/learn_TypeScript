class Person {
    name: string = '123'

    eating() {

    }
}
const p = new Person()
// 对象字面量来创建对象
const p1: Person = {
    name: 'why',
    eating() {

    }
}

function printPerson(p: Person) {
    console.log(p.name)
}
printPerson(new Person())
printPerson({ name: 'why', eating: function () { } })

export { }