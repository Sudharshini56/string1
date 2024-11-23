// //IF Statement

// let isBannedUser = false
// let viewer = "Js course"
// let finnane = true
// let reply;


// if (isBannedUser) {
//     reply = 'sorry'
// } else if (viewer && finnane) {
//     reply = `you can buy this ${viewer} and Enjoy finnane connent too`
// } else if (viewer) {
//     reply = `Enjoy ${viewer}`
// } else {
//     reply = 'Sorry still working'
// }


// console.log(reply)



// let testScore = 88;
// let grade;
// let schoolStudent = true;

// if (testScore >= 90) {
//     grade = "A"
// } else if (testScore >= 80) {
//     grade = "B"
// } else if (testScore >= 70) {
//     grade = "c"
// } else if (testScore >= 60) {
//     grade = "D"
// } else {
//     if (schoolStudent) {
//         grade = "RA"
//     } else {
//         grade = "F"
//     }

// }
// console.log(grade)



let isBannedUser = true;
let viewer = "JS Course";
let reply;
let finnance = true;

if (isBannedUser) {
    reply = "sorry you do not have access"
} else if (viewer && finnance) {
    reply = `Enjoy ${viewer} and find your finnace contantent`

} else if (viewer) {
    reply = `Enjoy ${viewer}`
} else {
    reply = "Still pending"
}

console.log(reply)


let testScore = 99
let grade;
let schoolStudent = true;

if (testScore >= 88) {
    grade = "A"
} else if (testScore >= 77) {
    grade = "B"
} else if (testScore >= 66) {
    grade = "c"
} else if (testScore >= 55) {
    grade = "D"
} else {
    if (schoolStudent) {
        reply = "RA"
    } else {
        grade = "F"
    }

}

//Switch 

switch ("1") {
    case 1:
        console.log(1)
        break;
    case ("2"):
        console.log(2)
        break;
    default:
        console.log("No match")
}

switch (Math.floor(Math.random() * 4)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No match")

}


switch (Math.floor(Math.random() * 100)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("Try again")
}


let player = "rock";
let computer = "scissors";


switch (player) {
    case computer:
        console.log("Tie");
        break;

    case "rock":
        if (computer === "scissors") {
            console.log("player's win");
        }
        break;

    case "scissors":
        if (player === "paper") {
            console.log("player's win");
        }
        break;

    case "paper":
        if (computer === "scirssors") {
            console.log("player's win");
        }
        break;

    default:
        console.log("No Tie!");
}