function sum(...nums: number[]) {
    let total = 0
    for (const num of nums) {
        total = total + num
    }
    return total
}

sum(20, 10)
sum(20, 30, 40)