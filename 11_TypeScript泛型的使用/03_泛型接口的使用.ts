// interface IPerson<T1, T2> {
//     name: T1
//     age: T2
// }

// const p: IPerson<number, number> = {
//     name: 12,
//     age: 18
// }

interface foo<T1, T2> {
    name: T1,
    age: T2
}

const p: foo<string, number> = {
    name: "why",
    age: 13
}
export { }