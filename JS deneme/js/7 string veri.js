// ******* String veri türü işlemleri *********
// https://www.w3schools.com/js/js_strings.asp

let email = "burcusena16@gmail.com"
let firstName = "burcu"
let lastName = "BALBAY"

// string karakter sayısı -> Lenght
console.log( email.length) 

// ilk karakteri bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(1))

// büyük harf / küçük harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"))
console.log(email[11])
// olmayan bir şey aratılırsa -1 şeklinde görünür 

// belirli bir yere kadar al -> slice:  (domain bilgisi)

// let DOMAIN = email.slice( email.search("@")) --> @ ile beraber gerisini aldı
// console.log(DOMAİN)

let DOMAIN = email.slice( email.search("@") + 1 ) //--> @ işaretinden sonrasını aldı
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.') ) // sadece gmail kısmını aldık
)

// bilgiyi değiştir -> replace:
email = email.replace("gmail.com", "kodluyoruz.org")
console.log(email)

// istediğim bilgi var mı? -> includes:
email.includes("sdfg") // false
email.includes("@") // true

// istediğim bilgiyle başladı mı? bitti mi? -> startsWidth, endsWidth:
console.log(
    email.endsWith("kodluyoruz.org")
)

// ilk harflerinni Büyük yapmak
firstName2 = "first"
lastName2 = "last"
/*let fullName = ´${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}´ */

let fullName2 = `${firstName2[0].toUpperCase()}${firstName2.slice(1).toLowerCase()} 
${lastName2[0].toUpperCase()}${lastName2.slice(1).toLowerCase()}`

console.log(fullName2)