function printMessage(message?: string) {
    // if (message) {
    //     console.log(message.length)
    // }
    // ! 保证message一定有值 非空类型断言
    console.log(message!.length)
}

// printMessage("Hello World")
// printMessage()