
// 'Hello World'也是可以作为类型的
// 叫做字面量类型

const message = 'Hello World'

// 字面量类型和联合类型一起使用
type Alignment = 'left' | 'right' | 'center'
let align: Alignment = 'left'
align = 'right'
