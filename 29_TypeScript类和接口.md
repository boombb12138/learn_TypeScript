## 类

### 类的基本使用

属性必须要初始化 否则编译报错**

```typescript
class Person {
    // 属性必须要有默认值 必须要初始化 否则编译报错
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const p = new Person("why", 18)
```

### 类的继承

用extends关键字 就要在constructor中用super

super可以调用父类属性的构造器，

```
 super(name, age)
```

也可以调用父类的方法

```
super.eating()
```

**重写** 父类有eating方法 子类不想用父类的eating方法，而自己写了一个eating方法

### 类的多态

多态表现：相同类型的对象，调用相同的方法，有不同的结果

多态前提：父类的引用指向子类的对象

```typescript
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

// animals: Animal[] 将Dog对象赋给Animal  父类的引用指向子类的对象
// 多态的目的时为了写出更加通用的代码
function makeActions(animals: Animal[]) {
    animals.forEach(animal => {
        animal.action()//会执行自己的方法 而不是Animal中的方法
    })
}

makeActions([new Dog(), new Fish()])
```



### 类的成员修饰符

- 默认情况下 属性修饰符是pubilc 即 属性在任何地方都可见

- private 仅在同一**类中**可见、私有的属性或方法

  要修改或访问属性要调用方法 

```js
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
```

- protected在类内部和子类可以被访问
- 只读属性


属性可以在构造器中赋值，一旦赋值就不能修改，但是如果该属性是一个对象，可以修改该对象中的属性

```typescript
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
```

##### setter和getter

可以取代getName 和 setName方法

```js
class Person {
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    // 访问器setter/getter
    // setter
    set name(newName) {
        this._name = newName
    }
    // getter
    get name() {
        return this._name
    }
}

const p = new Person('why')
p.name = 'coderwhy' //设置值的时候不是调用方法 而是直接设置
console.log(p.name)//调用值的时候也是直接调用
```

- 类的静态属性、静态方法（静态类）

可以直接通过类来调属性、方法

### 抽象类

```js
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
```

### 类的类型

类也可以作为一种类型

```js
class Person {
    name: string = '123'
    eating() {

    }
}
// 对象字面量来创建对象 必须实现对应类的属性和方法
const p1: Person = {
    name: 'why',
    eating() {

    }
}
```

## 接口

#### interface和type区别

**非对象类型** 函数、联合类型 **推荐使用type**

ts允许定义2个相同名称的接口interface，会对接口的属性做合并

而type不能重复定义相同的名称

ts允许定义2个相同名称的接口interface的作用：

```typescript
// ts的lib库中的window类里面没有age属性
// 自己定义Window接口 会和上下文中的Window合并
interface Window {
    age: number
}
window.age = 19
console.log(window.age)//可以打印
```

尽可能使用interface

- 通过type声明对象类型

```
type Info = { name: string, age: number }
```
- 通过接口声明对象类型 (接口一般以 I 开头)

```typescript
interface IInfo {
    readonly name: string
    age: number
    friend?: {
        name: string
    }
}
```

#### 接口定义索引类型

```js
// 通过interface定义索引类型
interface IndexLanguage {
    [index: number]: string
}

const frontLanguage: IndexLanguage = {
    0: 'HTML',
    1: 'CSS',
    2: 'JAVAScript',
    3: 'Vue',
}
```

#### 接口定义函数类型

```typescript
// type ClacFn = (n1: number, n2: number) => number
// 等同于
// 通过接口定义一个函数
interface ClacFn {
  (n1: number, n2: number): number;
}
```



#### 接口的继承

也是使用extends关键字，支持多继承的

```typescript
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {

  },
  flying() {

  }
}

```

#### 交叉类型

```typescript
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  //只需要两种类型的其中一种
  flying() {

  }
}

const obj2: MyType2 = {
  //两种类型的方法都要都有
  swimming() {

  },
  flying() {
    
  }
}
```

#### 类实现接口

```typescript
interface ISwim {
    swimming: () => void
}

interface IEat {
    eating: () => void
}

// 类实现接口
class Animal {

}
// 继承：只能实现单继承
// 实现：实现接口 类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
    swimming() {
        console.log('Fish swimming')
    }

    eating() {
        console.log('Fish eating')
    }
}
//面向接口编程
```



#### 字面量的赋值

一旦是对象的引用赋值 就会有freshness擦除操作

freshness擦除操作：擦掉在IPerson中没有的属性，如果info依然包含IPerson中所有的属性，就通过类型检测

```typescript
interface IPerson {
    name: string,
    age: number,
    height: number
}
// 会报错 是因为p 的类型限制为IPerson 只能传入name，age，height这3个属性
// const p: IPerson = {
//     name: "why",
//     age: 18,
//     height: 1.88,
//     address: '广州市'
// }
// 将对象单独提出来
const info = {
    name: "why",
    age: 18,
    height: 1.88,
    address: '广州市'
对象的引用赋值}

//对象的引用赋值
const p: IPerson = info//就不会报错 因为有freshness擦除操作
```



#### 泛型(重要！)

##### 泛型概念

泛型：将**类型参数化**。函数的参数不是写死的，而是由调用函数的以参数的形式告知，我这里的参数应该是怎么样的

```typescript
function sum2<Type>(num1: Type) {
    return num1
}
// 希望参数的类型由调用函数的以参数的形式告知
sum2<string>("20")
sum2<string[]>(["abc"])
sum2<{ name: string }>({ name: "why" })
```

泛型可以接收不同类型的参数

参数有多个类型：

```typescript
function foo<T, E, O>(arg1: T, arg2: E, arg3: O) {


}
foo<number, string, boolean>(10, '30', true)
```

##### 泛型接口的使用

```typescript
interface foo<T1, T2> {
    name: T1,
    age: T2
}
//接口类型由外界决定
const p: foo<string, number> = {
    name: "why",
    age: 13
}
```

##### 泛型类的使用

```typescript
class Point<T>{
    x: T
    y: T
    z: T

    constructor(x: T, y: T, z: T) {
            this.x = x,
            this.y = y,
            this.z = z
    }
}
const p = new Point("huhdi", "bih", "biuhuho")//类型推导
```

##### 泛型的类型约束

用extends

```typescript
interface Ilength {
    length: number
}

//确保传进来的参数有length属性，就用extends继承接口，形成约束
function getLength<T extends Ilength>(arg: T) {
    return arg.length
}
getLength("abc")
getLength(['abc', 'cba'])
```



#### 模块化

##### ts中的作用域  

- 模块
- 命名空间(内部模块)

作用域之间不会冲突

模块的内部模块就是命名空间  把模块再来划分作用域，这些作用域就是**命名空间**

```typescript
export namespace time {
    export function format(time: string) {
        return "2022-2-2"
    }
  
    // 命名空间里的东西如果需要在外部拿到就要导出
    export const name: string = "why"
}

export namespace price {
    export function format(price: number) {
        return "99.00"
    }
}
time.name
time.format("2022-3-18")
price.format(179)
```

## 类型的查找

在ts中使用模块、变量、函数，都需要模块、变量、函数被声明过

.d.ts文件 做类型声明的文件 不会被转为js文件

#### typescript会在哪里查找我们的类型声明呢？

1. 内置类型声明； 

在安装ts的时候 就有的声明文件。包含JS的内置类,如Math,Date,还有DOM API ，如Window,Document

2. 外部定义类型声明；

在使用第三方库需要的类型声明。

这些类型有2种声明方式：

- 在本身库中有类型声明 比如axios，安装axios就有声明文件

- 在社区中的公有库中 可以通过下面的链接查找对应的声明文件 然后下载对应的声明文件

  [[TypeScript: Search for typed packages (typescriptlang.org)](https://www.typescriptlang.org/dt/search?search=lodash)](https://www.typescriptlang.org/dt/search?search=lodash)

3. 自己定义类型声明

如果安装了第三方库，需要声明文件，在社区公有库中找不到，就要自己编写 .d.ts 文件（详见代码）。

```typescript
// 声明模块
declare module 'lodash' {
    export function join(arr: any[]): void
}
// 声明变量
declare let whyName: string
declare let whyAge: number
declare let whyHeight: number

// 声明函数
declare function whyFoo(): void    
// 声明文件
// 把以jpg结尾的文件作为一个模块使用
declare module '*.jpg'

// 声明命名空间
declare namespace $ {
    export function ajax(setting: any): any
}
```

