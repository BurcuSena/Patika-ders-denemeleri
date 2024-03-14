// ********** NUMBER *********
// number veri türü tanımlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price, 
    "KDV Oranı:", tax, 
    "KDV Tutarı:", priceTax,
    "Fiyat:", total
    )

    let stringNumber = "11"
    console.log(stringNumber)
    let newNumber = Number(stringNumber)
    console.log(newNumber)
    console.log("Number Constructor içine bilgi gönderildi:", Number("111"))

// arttırma ve azaltma işlemleri:
let counter = 320
counter = counter + 1 // Uzun yol
counter += 1;
counter ++;
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 5;
console.log(counter)

// işlem önceliği:
console.log( 2 + 3 * 10) // 50 ???
console.log((2 + 3) * 10) // 50 ??

// mod (kalan) alma % :
// sayı tek mi çift mi??
console.log( 14 % 2) // 0 ise çift 1 ise tek

// 8 ürün alan koliye tüm ürünler sığıyor mu ??
console.log("Kalan Koli Örneği:", 18 % 8)

// üs alma ** :
console.log(2 * 2 * 2 *2)
console.log(2 ** 4)

// aşağı yuvarlama işlemi --> Math.floor:
console.log("Aşağı Yuvarlama:", Math.floor(11.7))

// yukarı yuvarlama işlemi --> Math.ceil:
console.log("Yukarı Yuvarlama:", Math.ceil(1.3))

// yakına yuvarlama işlemi --> Math.round:
console.log("Yakına Yuvarlama:", Math.round(1.5)) // 1.4 -> 1   1.6 -> 2