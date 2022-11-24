
class Animal {
    action() {
        console.log('animal action')
    }
}

class Dog extends Animal {
    action() {
        console.log('dog running')
    }
}

class Fish extends Animal {
    action() {
        console.log('fish swimming')
    }
}

// animals: Animal[] 父类的引用指向子类的对象
// 多态的目的时为了写出更加通用的代码
function makeActions(animals: Animal[]) {
    animals.forEach(animal => {
        animal.action()
    })
}

makeActions([new Dog(), new Fish()])