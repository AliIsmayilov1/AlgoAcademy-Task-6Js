let number = +prompt("Eded daxil edin:")
let x = 1
let y = 1
let answer = "1 1"
for (let z; number >= x + y; ) {
    z = x
    x = y
    y = z + y
    answer += ` ${y} `
}
alert(answer)