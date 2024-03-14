// ***** Koşullarla Çalışmak ********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else 

/*

let username = prompt("Kullanıcı adınızı giriniz:")

// kullanıcı ismi varsa ekrana ismini yazdır
// eğer (username.length > 0) {console.log(username)}
// if (username.length > 0) {console.log(username)}

if (username.length){ // if kısmı her zaman true ise çalışır
    console.log(`kullanıcı bilginiz ${username}`);
}else{
    console.log("bilgi yok")
}
//********************************************

let age = prompt("Yaşınızı Giriniz:");
let info = document.querySelector("#info");

if (username && age >=  18){
    info.innerHTML = "Ehliyet alabilir"
}else if(!username) {
    info.innerHTML = "kullanıcı adınızı giriniz"
}else if (!(age >= 18)){
    info.innerHTML = "yaş bilginiz yok veya 18'den küçüksünüz"
}


//******************************************

// ternary operator ile sort if kullanımı

let username = prompt("Kullanıcı adınızı giriniz:")
let age = prompt("Yaşınızı Giriniz:");
let info = document.querySelector("#info");

// koşul ? doğruysa : yanlışsa
info.innerHTML = `${username ? username : "Kullanıcı bilginiz bulunamadı :("}`

*/

// ******** Koşullarla çalışmak Bölüm sonu egzersizi : **********

/* 
1- prompt ile aldığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini #info'ya yazdır
AA 90-100
BA 85-89
BB 80-84
CB 79-75
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0 -49


2- kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et

3- FF bilgisinde üzgün surat ikonu çıkart, diğerlerinde ise gülücük olsun 

4- FF class bilgisi text-danger, diğerlerinin ise text-primary olsun 

*/
