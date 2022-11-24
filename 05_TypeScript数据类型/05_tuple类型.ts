// tuple应用场景
function useState(state: any) {
    let currentState = state
    const changeState = (newState: any) => {
        currentState = newState
    }

    // changeState 对应 (newState: any) => void 函数类型
    const tuple: [any, (newState: any) => void] = [currentState, changeState]
    return tuple

}

const [counter, setCounter] = useState(10)
setCounter(1000)

// 需求：知道数组里面的元素是什么类型
// 数组写法 无法知道元素类型
const info: any[] = ["why", 18, 1.88]
const name = info[0]
// 元组写法
const info2: [string, number, number] = ["why", 18, 1.88]
const name1 = info2[0]
console.log(name.length)

export { }