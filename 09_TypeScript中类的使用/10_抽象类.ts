

function makeArea(shape: Shape) {
    return shape.getArea()
}

// 抽象类不能实例化
abstract class Shape {
    // 抽象类的方法可以没有函数体 这种方法又叫抽象方法
    abstract getArea();
}

class Rectangle extends Shape {
    private width: number
    private height: number

    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    // 抽象类的方法必须在子类中实现
    getArea() {
        return this.width * this.height
    }

}

class Circle extends Shape {
    private r: number

    constructor(r: number) {
        super()
        this.r = r
    }
    getArea() {
        return this.r * this.r * 3.14
    }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))

// makeArea(new Shape())
// makeArea(123)
// makeArea("123")