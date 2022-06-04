
let wiek = 230;

let liczbaAlkoholi = 0;

if (wiek >= 18 && liczbaAlkoholi > 0) {
  console.log("Sprzedjemy alkohol");
} else {
  console.log("ODMOWA SPRZEDAŻY");
}

let a = 4;
let b = 3;
let c = 2;

if (a > b) {
  if (c > a) {
    console.log("Najwieksze jest " + c);
  } else {
    console.log("Najwieksze jest " + a);
  }
} else {
  if (c > b) {
    console.log("Najwieksze jest " + c);
  } else {
    console.log("Najwieksze jest " + b);
  }
}
