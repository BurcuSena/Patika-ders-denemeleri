// DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

console.log(document.location.hostname);

// pathname
console.log(document.location.pathname);

console.log(document.head);
console.log(document.body);

document.body.style.backgroundColor = "aqua"

//! ******************************************
// DOM İçinden Öge Seçimi

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// let title = document.getElementsByTagName("h2");

let title = document.getElementById('title');
title.innerHTML = 'Değişen Bilgi'
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a");
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add('btn') // 8. alıştırmayı yorum satırından çıkarınca hata vermez
