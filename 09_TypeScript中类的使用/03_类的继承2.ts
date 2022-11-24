class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log('eating')
    }
}

// Student类继承自Person
class Student extends Person {
    sno: number

    constructor(name: string, age: number, sno: number) {
        //super 调用父类的构造器
        // 在构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化；
        super(name, age)
        this.sno = sno
    }
    // 重写 父类有eating方法 
    eating() {
        super.eating()//在执行子类的eating方法前执行父类的eating方法
        console.log('student eating')
    }

    studying() {
        console.log('studying')
    }
}

const stu = new Student("why", 18, 111)
console.log(stu.name)
console.log(stu.age)
console.log(stu.sno)

stu.eating()

export { }
