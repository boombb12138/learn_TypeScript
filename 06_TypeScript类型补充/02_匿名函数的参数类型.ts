const names = ["abc", "cba", "nba"]
// 上下文中的函数 item可以根据上下文环境推导出来，可以不加类型注释
names.forEach((item) => {
    console.log(item.split("0", 1))
})
export { }