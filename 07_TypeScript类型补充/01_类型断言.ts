// <img id="why"></img>

// 类型断言 as
// const el = document.getElementById("why") as HTMLImageElement

// el.src

// 另外案例:Person是Student的父类
class Person {

}

class Student extends Person {
    studying() { }
}

function sayHello(p: Person) {
    // p.studying()
    // 类型断言缩小范围，从而能够调用Student类的方法
    (p as Student).studying()
}

const stu = new Student()
sayHello(stu)