type Person = {
    name: string
    friend?: {
        name: string
        age?: number
        girlFriend?: {
            name: string
        }
    }
}

const info: Person = {
    name: "why",
    friend: {
        name: "Kobe",
        // girlFriend: {
        //     name: "lily"
        // }
    }
}




// console.log(info.name)
// console.log(info.friend.name)
console.log(info.friend?.name)
console.log(info.friend?.age)
console.log(info.friend?.girlFriend?.name)