
const znajdzNajwiekszaLiczbe = (liczby) => {
  let najwiekszaLiczba = liczby[0];
  for (let i = 1; i < liczby.length; i++) {
    if (liczby[i] > najwiekszaLiczba) {
      najwiekszaLiczba = liczby[i];
    }
  }
  return najwiekszaLiczba;
}

function wypiszElementyTablicyWiekszeOd(tablica, minWartosc) {
  
  for (let i = 0; i< tablica.length; i++) {
    if (tablica[i] > minWartosc) {
      console.log(tablica[i]);
    }
  }
}

console.log(znajdzNajwiekszaLiczbe([1,2,3,4,5,6]))



const innaTablica = [-3, -4, -1];
console.log(znajdzNajwiekszaLiczbe(innaTablica));


console.log(wypiszElementyTablicyWiekszeOd([1,2,3,4,5,6], 3))
