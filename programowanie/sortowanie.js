const liczby = [34, 5, 6, 7, 12, 12, 11];
///   liczby = [5, 34, 6, 7, 12, 12, 11];
///   liczby = [5, 6, 34, 7, 12, 12, 11];
// ....
//    liczby = [5, 6, 7, 12, 12, 11, 34];

//   X 6

const posortuj = (tablica) => {
  let iteracje = 0;
  for (let p = 0; p < tablica.length; p++) {
    for (let index = 0; index < tablica.length - 1 - p; index += 1) {
      if (tablica[index] > tablica[index + 1]) {
        let tmp = tablica[index];
        tablica[index] = tablica[index + 1];
        tablica[index + 1] = tmp;
      }
      iteracje += 1;
    }
  }
  console.log(iteracje);
  return tablica;
}

console.log(posortuj(liczby));
