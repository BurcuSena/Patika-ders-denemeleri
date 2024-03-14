// ******* Template Literals Kullanımın *******
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "Burcu"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin", email)

let info = ´
merhaba ${username} sitemize hoşgeldin.. 
mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
günün saat bilgisi: ${new Date( ).getHours( )}

kısa isminiz: ${username[0]}
´

console.let(info)