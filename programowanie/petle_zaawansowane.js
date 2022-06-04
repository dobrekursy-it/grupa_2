
const elementyNaFakturze = [{
  nazwa: 'Sprzegło', wartoscNetto: 1000, vat: 0.23
},{
  nazwa: 'Wymiana oleju', wartoscNetto: 100, vat: 0.08
}];

let suma = 0;
for (let i = 0; i < elementyNaFakturze.length; i++) {
  let biezacyElement = elementyNaFakturze[i];
  suma += biezacyElement.wartoscNetto * (1 + biezacyElement.vat);
}
console.log(suma);


const liczby = [34,2,289,30, -4];


let najwiekszaLiczba = liczby[0];
for (let i = 1; i < liczby.length; i++) {
  if (liczby[i] > najwiekszaLiczba) {
    najwiekszaLiczba = liczby[i];
  }
}

console.log(najwiekszaLiczba);
