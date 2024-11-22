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