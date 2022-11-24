
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

// 声明类
declare class Person {
    name: string
    age: number
    constructor(name: string, age: number)
}

// 声明文件
// 把以jpg结尾的文件作为一个模块使用
declare module '*.jpg'


// 声明命名空间
declare namespace $ {
    export function ajax(setting: any): any
}