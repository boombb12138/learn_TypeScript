class Person {
    // protected在类内部和子类可以被访问
    protected name: string = '123'
    getName() {
        return this.name
    }

}

class Student extends Person {
    getName() {
        return this.name
    }
}

const stu = new Student()
const p = new Person()
console.log(stu.getName())
console.log(p.getName())

export { }