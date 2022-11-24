## TypeScript

## 一、TypeScript的编译环境：

##### 方法一

ts代码需要通过tsc (TypeScript Compiler)转换为js代码，才能在浏览器中运行

##### 方法二

通过webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上；

- ```
  npm init生成package.json
  ```


- 安装webpack

- 在src文件里编写ts代码

- 新建webpack.config.js配置出入口文件和模块对应的加载规则（见代码）

- ```
  tsc --init生成tsconfig.json文件
  ```

  webpack-dev-server可以搭建本地服务器

##### 方式三

通过ts-node库，为TypeScript的运行提供执行环境

![TypeScript的编译环境](E:\工作\产品经理\Vue3\class_image\TypeScript的编译环境.png)



## 二、变量的声明

类型注解

```
var name: string = "why"
let age: number = 18
```

string ts中字符串类型

String js中字符串包装类的类型

tslint：规范ts代码

```
tslint --init//安装tslint
```

**类型推导**：默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型，这个过程就是类型推导

```
var name: string = "why"      name是字符串类型
var name: String = "why"      name是String类
```



## 三、变量的声明

### JS和TS都有的类型

1. number类型 

2. boolean类型 

3. string类型

4. **array类型** 除了确定数组类型，还要确定数组里面的要放的元素是什么类型

   写法1（不推荐,会和jsx  <button></button>冲突）

   ```
   const names :Array<string> = []
   ```

   写法2

   ```
   const names:string[] =[]
   ```

5. Object类型 对象类型一般使用类型推导，不注解

6. null & undefined 

   - null类型只能赋值为null
   - undefined 类型只能赋值为 undefined 

7. symbol类型

   ```javascript
   const title1 = Symbol("title")
   const title2 = Symbol("title")

   const info = {
       [title1]: "程序员",
       [title2]: "老师"
   }
   ```

8. 枚举类型


枚举就是将一组可能出现的值，定义在一个类型中，这个类型就是枚举类型

```typescript
enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

let d: number = 123;
let direction: Direction = Direction.BOTTOM;
```



### TypeScript独有的数据类型

1. #### any  可以任意赋值而不会报错 不想给数据添加具体的类型时，就可以写any

2. #### unknow

```
function foo() {return "abc"}
function bar() {return 123}
let flag = true

// 没有类型推导就要写类型注解

// 不能明确函数返回什么类型

let result: unknown

if (flag) {result = foo() } else {result = bar()  }
```
any类型和 unknown类型区别：

any类型可以赋值给任意类型
 unknown类型(不确定的类型)只能赋值给any和unknown类型,不能赋值给string\number类型

  ```javascript
let message: any = result//报错
let num: unknown = result//报错
  ```

3. #### void 当一个函数没有返回值的时候，返回值的类型就是void void可以接收很多类型 如果有返回值，写void也不报错

4. #### never  函数永远也不会返回结果(eg:死循环) 或者 函数只抛出异常

5. #### 元组（tuple） 多种元素的组合

- 需求：知道数组里面的元素是什么类型

数组写法 无法知道元素类型

```
const info: any[] = ["why", 18, 1.88]
const name = info[0]
```

元组写法
```
const info2: [string, number, number] = ["why", 18, 1.88]
const name1 = info2[0]
console.log(name.length)
```

<u>tuple应用场景</u>

```javascript
function useState(state: any) {
    let currentState = state
    const changeState = (newState: any) => {
        currentState = newState
    }
    
    // changeState 对应 (newState: any) => void 函数类型
    const tuple: [any, (newState: any) => void] = [currentState, changeState]
    return tuple

}

const [counter, setCounter] = useState(10)//这里就会推导counter和setCounter的类型
setCounter(1000)
```

6. 字面量类型

字符串也可以作为类型 这就是字面量类型

```
const message:"hello" = "hello"
```

字面量类型要结合联合类型来使用才有意义

```javascript
let align:'left' | 'right' ='left'
align = 'hhhhhhh'//报错
```

- 字面量推理

  ```js
  type Method = 'GET' | 'POST'//定义Method类  字面量类型
  function request(url: string, method: Method) {
  }

  type Request = {
      url: string,
      method: Method
  }
  //给对象限制类型
  const options:Request = {
      url: "http://www.baidu.com",
      method: "POST"
  }

  request(options.url, options.method )
  ```

  ​

### 函数

### 参数和返回值

#### 参数

```typescript
 // 给参数加类型注解
  // 给返回值加上类型注解，也可以不加，会自动推导
  function sum(num1: number, num2: number): number {
      return num1 + num2
  }

  sum(12, 23)
```



##### 参数的类型注解

1. 参数是对象类型

   // 对象类型的类型注解

   // point 形参

   // z?:number 表示 z 是可选的  (等同于  z：number || undefined)

   ```typescript
   function printPoint(point: { x: number, y: number, z?: number }) {
       console.log(point.x)
       console.log(point.y)
       console.log(point.z)
   }
   printPoint({ x: 12, y: 76 })
   printPoint({ x: 12, y: 76, z: 111 })
   ```

   ​


2. 参数是联合类型

​      使用联合类型的参数时，对参数的操作要注意类型判断

3. 参数是函数类型

 () => void：函数作为参数时的类型

```
function bar(fn: () => void) {
    fn()
}
```

4. 不给参数加类型注解

上下文中的函数参数 item可以根据上下文环境推导出来，可以不加类型注释

```js
const names = ["abc", "cba", "nba"]
// 上下文中的函数 item可以根据上下文环境推导出来，可以不加类型注释
names.forEach((item) => {
    console.log(item.split("0", 1))
})
```





##### 参数的可选类型

可选类型必须写在必选类型的后面   有默认值的参数写在后面

```js
function foo(x: number, y?: number) {

}
foo(20, 30)
foo(20)
```

##### 剩余参数

```javascript
function sum(...nums: number[]) {
    let total = 0
    for (const num of nums) {
        total = total + num
    }
    return total
}

sum(20, 10)
sum(20, 30, 40)
```

#### 不确定的this类型

```js
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
```

### 函数的重载

函数的名称相同，但是参数不同的几个函数，就是**函数的重载**

在函数的重载中，实现函数不能直接被调用，必须有对应的函数声明

```javascript
// 函数的声明
function add(num1: number, num2: number): number;//没有函数体
function add(num1: string, num2: string): string;

// 函数的实现
function add(num1: any, num2: any): any {
      return num1 + num2
}

const result = add(20, 30)
console.log(result)//50

// 在函数的重载中，实现函数不能直接被调用  必须匹配到函数的声明
// add({ name: 'why' }, { age: 18 })报错
```

注：优先使用联合类型，如果联合类型比较麻烦，再使用函数的重载

## 四、类型的操作

#### 类型别名

 上面对象类型作为类型注解可能太长，可以用类型别名抽取出来

```typescript
type PointType = { x: number, y: number, z?: number }
```

#### 类型断言as

1. 可以标明拿到的HTML元素是具体的哪种HTML元素。如果不用断言，只会返回HTMLElement

```
  const el = document.getElementById("why") as HTMLImageElement
```

2. 类型断言缩小范围，从而能够调用子类的方法

```javascript
class Person {

}

class Student extends Person {
    studying() { }
}

function sayHello(p: Person) {
    // p.studying()无法调用
    // 类型断言缩小范围，从而能够调用Student类的方法
    (p as Student).studying()
}

const stu = new Student()
sayHello(stu)
```

#### 非空类型断言

在可能为undefined的值后面加上 ！ 保证message有值

如果不加 ! ，也不做if判断message有值就会报错  

3种报错的情况

![非空类型断言](E:\工作\产品经理\Vue3\class_image\非空类型断言.png)

#### 类型缩小

判断

1. typeof

2. 平等的 === == !==  switch

3. instanceof   检查一个值是否是另一个值的“**实例**”

4. in  如果指定的属性在指定的**字面量对**象中，则in 运算符返回true；

   ```javascript
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
   ```

### 



## 五、一些逻辑符号

#### 可选链的使用  ?.

当对象的属性不存在就会返回undefined ，如果存在就继续执行

eg: 如果friends没有就返回undefined 而不会报错

```
console.log(info.friends?.name)
```

#### ?? 和 !! 的作用

- ??  是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，
  否则返回左侧操作数

  ```js
  let message: string | null = null

  const content = message ?? "你好啊，李银河"
  // 如果message没有值 就取默认值"你好啊，李银河
  ```

- !! 操作符

```js
const message = "Hello Message"

// const flag = Boolean(message)
// console.log(flag)
//等同于
const flag = !!message //!message message字符串本来对应的布尔值是true 加上！转为布尔值，同时值为false，所以要再取反
console.log(flag)
```