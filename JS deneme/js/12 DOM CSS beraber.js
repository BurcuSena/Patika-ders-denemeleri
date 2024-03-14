// ********* DOM'a CSS Class Bilgisi ekleme çıkarma *********

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class"); // birden fazla class eklemek

greeting.classList.remove("title", "second-class"); // birden fazla class çıkarmak

console.log(greeting.classList);