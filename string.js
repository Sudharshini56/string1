// // let iteam = {
// //     name: 'iphone',
// //     price: 300,
// //     quantity: 1,
// //     categories: ['model', 'phone'],
// //     dimensions: {
// //         length: 7,
// //         weight: 10,
// //         height: 7
// //     }
// // }
// // console.log(iteam)
// // console.log(iteam.categories[0])
// // console.log(iteam.dimensions.length)

// // let iteam1 = {
// //     name: 'iphone',
// //     price: 300,
// //     color: 'black',
// //     buy: function() {
// //         console.log("iteam added to cart")
// //     },
// //     addToList: function() {
// //         console.log('iteam added to list')
// //     }
// // }
// // iteam1.buy()
// // iteam1.addToList()


// let iteam = {
//     name: 'tv',
//     price: 200,
//     color: 'black'
// }
// console.log(iteam)
// iteam.price = 200
// console.log(iteam)
// iteam.price = true
// console.log(iteam)

// // let iteam2 = new Object();
// // iteam2.name = 'tv'
// // iteam2.price = 300
// // iteam2.color = 'black'

// // console.log(iteam2)
// // console.log(iteam2['price'])
// // iteam2['price']
// // console.log(iteam2)


let iteam = {
    name: 'tv',
    price: 500,
    color: 'black',

    categies: ["color", "black"],

    more: {
        name: 'phone',
        price: 500,
        color: 'black'
    }

}
console.log(iteam.categies[0])
console.log(iteam.more)

let iteam2 = {
    name: 'iphone',
    price: 900,
    color: 'white',
    buy: function() {
        console.log("iteam added to card")
    },
    addToList: function() {
        console.log("added iteam to list")
    }

}
iteam2.buy()
iteam2.addToList()