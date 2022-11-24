// class Point<T>{
//     x: T
//     y: T
//     z: T

//     constructor(x: T, y: T, z: T) {
//         this.x = x,
//             this.y = y,
//             this.z = z
//     }
// }

// const p1 = new Point('1.2', '1.4', '4.5')
// const p2 = new Point<string>('1.2', '1.4', '4.5')
// const p3: Point<string> = new Point('1.2', '1.4', '4.5')

// const names: string[] = ['abc', 'cba']



class Point<T>{
    x: T
    y: T
    z: T

    constructor(x: T, y: T, z: T) {
        this.x = x,
            this.y = y,
            this.z = z
    }
}
const p = new Point("huhdi", "bih", "biuhuho")
const p2: Point<string> = new Point("huhdi", "bih", "biuhuho")
const p3 = new Point<string>("huhdi", "bih", "biuhuho")
export { }