let str1 = "if you want to try this"
let str2 = "   but never give up  "

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
console.log(str2.replaceAll("u", "sudharshini"))
console.log(str2.toLowerCase())
console.log(str2.toUpperCase())
console.log(str2.length)
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())