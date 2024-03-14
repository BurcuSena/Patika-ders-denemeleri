// Merhaba Dünya Örnekleri

// Dökümana(dokumant) Yazdırma ile:
// document.write("Merhaba Dünya");

// Uyarı Mesajı ile:
// alert("Merhaba Dünya");

// console.log ile:
//console.log("Merhaba Dünya");
//***************************************

// Let ve Const ile Değişken tanımlama

// var ile değişken tanımlama: (Artık çok kullanılmıyor)
/*var serverName = "Burcu Sena"
console.log(serverName)*/

// let ile değişkeni boş tanımlamak:
let serverName;
console.log(serverName)
// let ile değişkene bilgi atamak:
serverName = "Burcu Sena"
console.log(serverName)
// let ile değişkene bilgi atayarak tanımlamak:
let password = "1234";
console.log(password)

//değişken ataması yapmadan önce kullanmaya çalışmak:
/* Hatalı Kullanım
console.log(fullName)
let fullName = "Burcu Sena Balbay";*/

//Doğru Kullanım
let fullName = "Burcu Sena Balbay";

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
fullName = "Lorem Ipsum"
console.log(fullName) 

// birleştirme veya eklame işlemi
fullName + "Yeni Eklenen Bilgi" // acaba eklendi mi?
console.log(fullName + " Test Bilgisi") // Ekle ve Göster ama değişkene eklemedik
fullName = fullName + " Yeni Bilgi"
fullName = "2. Bilgi " + fullName

fullName = "Sıfırlandı"
fullName += " ve Yeni Bilgi" // "+=" yapınca direkt birleştirip yazıyor, Sadece "+" kullanırsak birleştirip eklemiyoruz
console.log(fullName)

// const ile değişkeni boş tanımlamaya çalışmak:
// const serverPassword; // Sadece değişken tanımlandı aa içi boş ?? ÇALIŞMADI

// const ile değişken tanımlamak:
const SERVER_PASSWORD = "sdfghjk"
console.log(SERVER_PASSWORD)

/* SERVER_PASSWORD = "1234"
console.log(SERVER_PASSWORD) Değişmez şekilde ayarladığımız için tekrar kullanamayız */
