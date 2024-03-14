/*
let rakam = prompt("Lütfen 1 ile 5 arasında bir rakam giriniz");

switch(rakam) // "1" "2" "3" "4" "5"
{
    case "1":
        console.log("girilen rakam 1'dir");
    break;    

    case "2":
        console.log("girilen rakam 2'dir");
    break;
    
    case "3":
        console.log("girilen rakam 3'tür");
    break;
    
    case "4":
        console.log("girilen rakam 4'dür");
    break;
    
    case "5":
        console.log("girilen rakam 5'dir");
    break;
    
    default:
        console.log("girilen rakam 1 ile 5 arasında olmalıdır");
    break;    
}

*/

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
+ "2-Salı" + yeniSatir
+ "3-Çarşamba" + yeniSatir
+ "4-Perşembe" + yeniSatir
+ "5-Cuma" + yeniSatir
+ "6-Cumartesi" + yeniSatir
+ "7-Pazar" + yeniSatir
+ "Lütfen bir seçim yapınız";

let deger = prompt(metin);
switch(deger){
    case "1":
        console.log("Pazartesi Günü");
    break;

    case "2":
        console.log("Salı Günü");
    break;

    case "3":
        console.log("Çarşamba Günü");
    break;

    case "4":
        console.log("Perşembe Günü");
    break;

    case "5":
        console.log("Cuma Günü");
    break;

    case "6":
        console.log("Cumartesi Günü");
    break;

    case "7":
        console.log("Pazar Günü");
    break;  

    default:
        console.log("Lütfen geçerli bir değer giriniz");
    break;    

}
