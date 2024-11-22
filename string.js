//IF Statement

let isBannedUser = false
let viewer = "Js course"
let finnane = true
let reply;


if (isBannedUser) {
    reply = 'sorry'
} else if (viewer && finnane) {
    reply = `you can buy this ${viewer} and Enjoy finnane connent too`
} else if (viewer) {
    reply = `Enjoy ${viewer}`
} else {
    reply = 'Sorry still working'
}


console.log(reply)



let testScore = 88;
let grade;

if (testScore >= 90) {
    grade = "A"
} else if (testScore >= 80) {
    grade = "B"
} else if (testScore >= 70) {
    grade = "c"
} else if (testScore >= 60) {
    grade = "D"
}
console.log(grade)