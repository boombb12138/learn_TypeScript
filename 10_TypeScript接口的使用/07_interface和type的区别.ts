document.getElementById("app") as HTMLDivElement
// 我们自己没有定义document类、window类，是在ts的lib库中ts定义的


// ts的lib库中的window类里面没有age属性
// 自己定义Window接口 会和上下文中的Window合并
interface Window {
    age: number
}
window.age 