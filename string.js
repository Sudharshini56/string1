let str1 = "if you want to try this"
let str2 = "but never give up  "

console.log(str1 + str2)

console.log(str1.concat(str2))

console.log(str1.concat("** **", str2))


// How to use part part in string

//sclice(start,end)
//substring(start,end)
//substr(start,length)

console.log(str2.slice(4, 10))
console.log(str2.substring(4.10))
console.log(str2.substr(4, 10))
console.log(str2.substr(-4, 10))
console.log(str2.replace("never", "sudharshini"))
console.log(str2.replace("Up", "give"))
console.log(str2.replaceAll("u", "sudharshini "))
console.log(str2.toLowerCase())
console.log(str2.toUpperCase())
console.log(str2.length)
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())

let bill = 'Rs.10'
console.log(bill.length)
console.log(bill.padStart(7, '0'))
console.log(bill.padStart(10, "wwwww"))
console.log(bill.padStart(3, "Rs"))
console.log(bill.padEnd(9, "paid"))



console.log(str2[1])
console.log(str2[10])
console.log(str2.charAt(1))
console.log(str2.charCodeAt(1))

console.log(str2.indexOf("b"))
console.log(str2.lastIndexOf("u"))
console.log(str2.search("never"))
console.log(str2.search("nott"))
console.log(str2.includes("never"))
console.log(str2.startsWith("but"))
console.log(str2.endsWith("up"))
console.log(str2.replace(/give/g, "never"))