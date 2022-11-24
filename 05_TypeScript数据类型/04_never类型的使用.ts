function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case "string":
            console.log("string处理方式处理message")
            break
        case "number":
            console.log("number处理方式处理message")
            break
        case "boolean":
            console.log("boolean处理方式处理message")
            break
        // 确保有布尔值的时候，有相应的case
        default:
            const check: never = message
    }
}


handleMessage("abc")


handleMessage(true)