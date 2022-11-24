class Person {
    private name: string = ''

    // 封装了两个方法，通过方法来访问、修改name
    getName() {
        return this.name
    }

    setName(newName) {
        this.name = newName
    }
}

const p = new Person()
console.log(p.getName())
p.setName('why')

export { }