
let wiek = 10;
while (wiek < 18) {
  // kod
  console.log('Odmowa sprzedazy alkoholu, poczekaj rok, bo twoj wiek to ' + wiek);
  wiek += 1;
}


const uczestnicy = ['Seweryn', 'Krzysztof', 'Ksawery', 'Krystyna'];
let index = 0;
while (index < uczestnicy.length) {
  console.log(uczestnicy[index]);
  index += 1;
}

for (let index = 0;index < uczestnicy.length; index+=1) {
  console.log(uczestnicy[index]);
}
