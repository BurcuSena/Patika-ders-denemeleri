// ***** Veri Türünü Öğrenmek ve Veri Türü Dönüşümleri *****

// vveri türünü öğrenmek typeof:
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price:",
    typeof(price)
)
console.log(
    "stringPrice:",
    typeof(stringPrice)
)
console.log(
    "hasPassword:",
    typeof(hasPassword)
)

// string (metinsel) bilgileri int ve float'a dönüştürmek
let number1 = "11"
number1 = parseInt(number1)
console.log("number1:",number1,typeof(number1))

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2:",number2,typeof(number2))

let number3 = "11px"
number3 = Number(number3)
console.log("number3:",number3,typeof(number3))

let number4 = "11"
number4 = Number(number4)
console.log("number4:",number4,typeof(number4))

let number5 = "11.4px"
number5 = parseFloat(number5)
console.log("number5:",number5,typeof(number5))

// number veri tipinden string'e dönüştürmek
let number6 = 55
number6.toString()
console.log(number6, typeof(number6))

let number7 = 55
number7 = number7.toString()
console.log(number7, typeof(number7))

