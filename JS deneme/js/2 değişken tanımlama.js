// Değişken Tanımlama Sitesi
// https://www.w3schools.com/js/js_conventions.asp

// #### Değişken Genel Tanımlama Kuralları :
// camelCase Kullanımı:
let fullname = "" // bu kullanım doğru değil 
let kodluyoruzserverinfo = "" // bu kullanım doğru değil 
let kodluyoruz_server_info = "" // bu kullanım doğru değil 
let kodluyoruzSERcerInfo = "" // bu kullanım doğru değil 

let fullName = "" 
let kodluyoruzServerInfo = ""

// UPPER_CASE Kullanımı:
const password = "1234" // bu kullanım doğru değil 
const PASSWORD = "1234"
const SERVER_PASSWORD = "1234"

// değişkenlerde Türkçe ve diğer dillerin kulllanımı:
let türkçeBilgi = "Türkçe Bilgi Yazdırılıyor ..." // bu kullanım doğru değil 
let info = "Türkçe Bilgi Yazdırılıyor ..."
console.log(info)

// anlamsız değişken adları KULLANMAYIN !!
// when I wrote this, only God and I understand what I was doing
// Now, God only knows
let x = 1; // bu kullanım doğru değil 
// x, y, z, k, i, e gibi anlamsız değişken isimlerini KULLANMA !!


// ### Ek Bilgi:
// 1: boolean tanımlarken is/has kullanılması:
let isActive = true
let hasPassword = false

// 2: Line Lenght < 80
// kodlama 80 karakter olmasın :D Hem daha kolay okunması Hem de karışıklık olmaması için 