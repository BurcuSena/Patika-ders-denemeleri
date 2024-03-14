// ***** Karşılaştırma ve Mantıksal Operatörler *****
// https://www.w3schools.com/js/js_comparisons.asp

let price = "0"
let user = "sena"

// == Eşitse 
console.log( price == 1 )
console.log( price == 100 )

// === hem değeri hem de türü eşitse
console.log( price === 1 )
console.log( price === 100)
console.log( price === "100")

//. != eşit değlse
console.log( user != "guest" )

// < küçükse
console.log( price < 100 )

// <= küçük veya eşitse
console.log( price <= 100 )

// > büyükse 
console.log( price > 200 )

// >= büyük veya eşitse
console.log( price >= 100 )

// && ve
price = 0
console.log( price > 0 && user != "guest")

// || veya
console.log( price > 0 || user != "guest")

//. ! değil (tersi)
user = "guest"
price = 1
console.log( price > 0 && !user == "guest")