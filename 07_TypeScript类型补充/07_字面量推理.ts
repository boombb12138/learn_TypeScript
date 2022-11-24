const info = {
    name: "why",
    age: 18
}

info.name = 'kobe'

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {

}

// 方法1
type Request = {
    url: string,
    method: Method
}

const options: Request = {
    url: "http://www.baidu.com",
    method: "POST"
}

request(options.url, options.method)
// request(options.url, options.method as Method)

export { }