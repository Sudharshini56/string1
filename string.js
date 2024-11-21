// let str1 = "if you want to try this"
// let str2 = "but never give up  "

// console.log(str1 + str2)

// console.log(str1.concat(str2))

// console.log(str1.concat("** **", str2))


// // How to use part part in string

// //sclice(start,end)
// //substring(start,end)
// //substr(start,length)

// console.log(str2.slice(4, 10))
// console.log(str2.substring(4.10))
// console.log(str2.substr(4, 10))
// console.log(str2.substr(-4, 10))
// console.log(str2.replace("never", "sudharshini"))
// console.log(str2.replace("Up", "give"))
// console.log(str2.replaceAll("u", "sudharshini "))
// console.log(str2.toLowerCase())
// console.log(str2.toUpperCase())
// console.log(str2.length)
// console.log(str2.trim())
// console.log(str2.trimStart())
// console.log(str2.trimEnd())

// let bill = 'Rs.10'
// console.log(bill.length)
// console.log(bill.padStart(7, '0'))
// console.log(bill.padStart(10, "wwwww"))
// console.log(bill.padStart(3, "Rs"))
// console.log(bill.padEnd(9, "paid"))



// console.log(str2[1])
// console.log(str2[10])
// console.log(str2.charAt(1))
// console.log(str2.charCodeAt(1))

// console.log(str2.indexOf("b"))
// console.log(str2.lastIndexOf("u"))
// console.log(str2.search("never"))
// console.log(str2.search("nott"))
// console.log(str2.includes("never"))
// console.log(str2.startsWith("but"))
// console.log(str2.endsWith("up"))
// console.log(str2.replace(/give/g, "never"))


// //Javascript logic
// const amount = 1000
// console.log("your bill amount is Rs. ", amount)



// //sting

// let str3 = "never give up"
// let str4 = "but you can"
// console.log(str3 + str4)
// console.log(str3.concat(str4))
// console.log(str3.concat("sudharshini", str4))
// console.log(str3.slice(4, 10))
// console.log(str3.substring(4, 10))
// console.log(str3.substr(4, 10))
// console.log(str3.toLocaleLowerCase())
// console.log(str3.toLocaleUpperCase())
// console.log(str3.startsWith("b"))
// console.log(str3.endsWith("n"))
// console.log(str3.replace("but", "sudharshini"))
// console.log(str3.replaceAll("you", "we"))
// console.log(str3.length())
// console.log.log(str3.charAt(1))
// console.log(str3[1])
// console.log(str3.charCodeAt(1))
// console.log(str3.indexOf("c"))
// console.log(str3.lastIndexOf("a"))
// console.log(str3.includes("can"))
// console.log(str3.includes("not"))
// console.log(str3.repeat("can"))
// let billl = "Rs.10"
// console.log(bill.padStart(10, "0"))
// console.log(billl.length())
// console.log(billl.padEnd(20, "paid"))
// console.log(str4.search("can"))
// console.log(str4.trim())
// console.log(str4.trimEnd())
// console.log(str4.trimStart())

// let firstName = "Sudharshini"
// let lastName = "Sudharshini"
// let county = "USA"
// console.log(`My name is ${firstName} ${lastName} I Live in ${county}`)

// let wish = `Good
// Morning`
// console.log(`${wish}`)

// let birthday = `Happy birthday
// to you
// sudharshini
// 2024`
// console.log(`${birthday}`)

// let msg = (`dog's name is "Brown"`)
// console.log(msg.replace("dog's", "cat's"))

// let iteam = ["apple", "book", "sope", "dress", "water"]
// let amount = (`95 $`)
// console.log(`you have 5 iteams ${iteam} your bill amount is ${amount} `)

// let number = ["one", "two", "tree", "four", "five"]
// console.log(number.length)
// console.log(number.length - 1)
// console.log(number[number.length - 1])
// console.log(number[0])

// let array = [1, 2, 3, 'a', "abc", [1, 2]]
// console.log(array[3])
// console.log(array[4, 0])
// console.log(array[4][0])
// console.log(array[5, 1])

// let array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(array[0][0])
// console.log(array[0][1])

// let array = ['a', 'b', 'c', 'd', 'e']
// array.push('f')
// console.log(array)

// array.pop()
// console.log(array)

// array.shift('a')
// console.log(array)

// array.unshift('a')
// console.log(array)

// let array = ['a', 'b', 'c', 'd', 'e']
// array.splice(2, 1)
// console.log(array)

// array.splice(2, 2)
// console.log(array)

// array.splice(1, 1, "m")
// console.log(array)

// array.splice(1, 2, "x", "y")
// console.log(array)

// array.splice(1, 0, "y", "z")
// console.log(array)

// console.log(array.slice(1, 3))

// console.log(array.reverse())

// let array = ['a', 'b', 'c', 'd', 'e']
// let string = array.join()
// console.log(string)

// let str = "a,b, c, d, e"
// let arr = str.split(',')
// console.log(arr)

// let array = ['a', 'b', 'c', 'd', 'e']
// let string = array.join()
// console.log(string)

// let string1 = "a,b,c,d,e"
// let array1 = string1.split(",")
// console.log(array1)

// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// console.log(array1.concat(array2))

// console.log(array1 + array2)
// console.log(...array1, ...array2)


//Calculate Words
// let words = prompt("Type here");
// let result = words.length
// console.log(Number(result) + " " + words.trim())



// let password = true
// if (password) {
//     console.log("Enter your password: ")
// } else {
//     console.log("Try again")
// }
// console.log("Bye")

let age = 80
let gender = 'female'
if (age > 60 && gender === 'female') {
    console.log("You can find discount")
}

let a = 20
let b = 30;
let max;

// if (a < b) {
//     max = a
// } else {
//     max = b
// }
// console.log(max)

//
// max = a > b ? a : b
// console.log(max)


//object
let iteam = {
    name: 'iphone', //key valu pair
    price: 25000,
    quantity: 1
}
console.log(iteam)

let iteam2 = new Object();
iteam2.name = 'charger'
iteam2.price = 700
iteam.quantity = 1
console.log(iteam2)