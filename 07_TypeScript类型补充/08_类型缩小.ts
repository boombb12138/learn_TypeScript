
// 1 typeof类型缩小
type IDType = number | string
function printID(id: IDType) {
    // 类型缩小if (typeof id === 'string')   类型守卫typeof id === 'string'
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

// 2 平等的类型缩小 === == !==  switch
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
    //1 if
    // if (direction === 'left') {
    //     console.log(direction)
    // }
    // 2 switch
    switch (direction) {
        case 'left':
            console.log(direction)
            break;
        case 'right':
            console.log(direction)
            break;
    }
}

//3 instanceof
function printTime(time: string | Date) {
    if (time instanceof Date) {
        console.log(time.toUTCString())
    } else {
        console.log(time)
    }
}

class Student {
    studying() { }
}
class Teacher {
    teaching() { }
}
function work(p: Student | Teacher) {
    if (p instanceof Student) {
        p.studying()
    } else {
        p.teaching()
    }
}

// 4 in
type Fish = {
    swimming: () => void
}
type Dog = {
    running: () => void
}

function walk(animal: Fish | Dog) {
    // 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；
    if ('swimming' in animal) {
        animal.swimming()
    } else {
        animal.running()
    }
}

// 字面量对象
const fish: Fish = {
    swimming() {
        console.log('swimming')
    }
}
walk(fish)
