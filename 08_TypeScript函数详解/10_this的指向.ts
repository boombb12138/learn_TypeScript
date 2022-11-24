
type NameType = {
    name: string
    sayHello: () => void
}

// 通常TypeScript会要求我们明确的指定this的类型
function sayHello(this: NameType) {
    console.log(this.name)
}

const info: NameType = {
    name: "why",
    // 将其放到了info中，
    sayHello
}
// 通过info去调用，this依然是指向info对象的
info.sayHello()
// 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来
// 调用函数
