// Kişi Bilgileri 
// Oporatörler

let IndexKivanc;
let IndexAda;

const kgKivanc = 71;
const kgAda = 45;

const heightKivanc = 1.72;
const heightAda = 1.55;

IndexAda = (kgAda) / (heightAda * heightAda);
IndexKivanc = (kgKivanc) / (heightKivanc * heightKivanc);

console.log(IndexAda, IndexKivanc);


// Karşılaştır

let adaHigherIndex = IndexAda > IndexKivanc;
let kivancHigherIndex = IndexKivanc > IndexAda;

console.log("Adanın kilo indeksi Kivanç'ın kilo Indeksinden daha büyük : " + adaHigherIndex);

console.log("Kıvanç'ın kilo indeksi Ada'nın kilo indeksinden daha büyük: " + kivancHigherIndex);



// Pozisyon
let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log("Ada Zayıf : " + AdaZayif);
console.log("Ada Normal : " + AdaNormal);
console.log("Ada Kilolu: " + AdaKilolu);
console.log("Ada Şişman : " + AdaSisman);