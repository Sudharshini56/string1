// // //IF Statement

// // let isBannedUser = false
// // let viewer = "Js course"
// // let finnane = true
// // let reply;


// // if (isBannedUser) {
// //     reply = 'sorry'
// // } else if (viewer && finnane) {
// //     reply = `you can buy this ${viewer} and Enjoy finnane connent too`
// // } else if (viewer) {
// //     reply = `Enjoy ${viewer}`
// // } else {
// //     reply = 'Sorry still working'
// // }


// // console.log(reply)



// // let testScore = 88;
// // let grade;
// // let schoolStudent = true;

// // if (testScore >= 90) {
// //     grade = "A"
// // } else if (testScore >= 80) {
// //     grade = "B"
// // } else if (testScore >= 70) {
// //     grade = "c"
// // } else if (testScore >= 60) {
// //     grade = "D"
// // } else {
// //     if (schoolStudent) {
// //         grade = "RA"
// //     } else {
// //         grade = "F"
// //     }

// // }
// // console.log(grade)



// let isBannedUser = true;
// let viewer = "JS Course";
// let reply;
// let finnance = true;

// if (isBannedUser) {
//     reply = "sorry you do not have access"
// } else if (viewer && finnance) {
//     reply = `Enjoy ${viewer} and find your finnace contantent`

// } else if (viewer) {
//     reply = `Enjoy ${viewer}`
// } else {
//     reply = "Still pending"
// }

// console.log(reply)


// let testScore = 99
// let grade;
// let schoolStudent = true;

// if (testScore >= 88) {
//     grade = "A"
// } else if (testScore >= 77) {
//     grade = "B"
// } else if (testScore >= 66) {
//     grade = "c"
// } else if (testScore >= 55) {
//     grade = "D"
// } else {
//     if (schoolStudent) {
//         reply = "RA"
//     } else {
//         grade = "F"
//     }

// }

// //Switch 

// switch ("1") {
// //     case 1:
// //         console.log(1)
// //         break;
// //     case ("2"):
// //         console.log(2)
// //         break;
// //     default:
// //         console.log("No match")
// // }

// // switch (Math.floor(Math.random() * 4)) {
// //     case 1:
// //         console.log(1);
// //         break;
// //     case 2:
// //         console.log(2);
// //         break;
// //     default:
// //         console.log("No match")

// // }


// // switch (Math.floor(Math.random() * 100)) {
// //     case 1:
// //         console.log(1);
// //         break;
// //     case 2:
// //         console.log(2);
// //         break;
// //     default:
// //         console.log("Try again")
// // }





// // let player = "rock";
// // let computer = "scissors";


// // switch (player) {
// //     case computer:
// //         console.log("Tie");
// //         break;

// //     case "rock":
// //         if (computer === "scissors") {
// //             console.log("player's win");
// //         }
// //         break;

// //     case "scissors":
// //         if (player === "paper") {
// //             console.log("player's win");
// //         }
// //         break;

// //     case "paper":
// //         if (computer === "scirssors") {
// //             console.log("player's win");
// //         }
// //         break;

// //     default:
// //         console.log("No Tie!");
// // }



// // let subcriber = "Subcribed";
// // let response = subcriber ? "welcome" : "kindly subcribe";
// // console.log(response);

// // let testScore = 45;
// // let grade = testScore > 88 ? "A" : testScore > 77 ? "B" : testScore > 66 ? "C" : testScore > 55 ? "D" : "F";
// // console.log(g)


// // let subcriber = "subcribed";
// // let response = subcriber ? "welcome" : "kindlt subcriber";
// // console.log(response)

// // let testScore = 88;
// // let grade = testScore > 85 ? "A" : testScore > 75 ? "B" : testScore > 65 ? "C" : testScore > 55 ? "D" : "F";
// // console.log(grade)



// // let myBlooan = alert("Hi Subcribers")
// // console.log(myBlooan)

// // let my = confirm("Hi subcribers");
// // console.log(my)

// let my = prompt("Enter your name: ");
// if (my) {
//     console.log(my ? ? "you did not enter your name");
// } else {
//     console.log("Try again")
// }
// console.log(my.trim().length);

// let user = alert("Enter your name: ")

// let user = confirm("Enter your name: ")
// console.log(user)

// let user = prompt("Enter your name: ");
// if (user) {
//     console.log(user ? ? "You didn't Enter name");
// } else {
//     console.log("You did not enter name");
// }
// console.log(user.trim().length);



//Loops
//while loop
// let i = 1;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }
//while loop

// let i = 1;
// while (i <= 100) {
//     console.log(i)
//     i = i + 11
// }

//do while loop
//atlest onece

// let i = 50;
// do {
//     console.log(i);
//     i++;

// } while (i < 50);


//while loop

// let i = 1;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }

//do while loop

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 50)


// //for loop
// for (i = 1; i <= 50; i++) {
//     console.log(i)
// }

let name = "Sudharshini"
for (i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}