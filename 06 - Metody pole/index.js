'use strict';
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

/*
- Procházení pole - array.forEach()
- Filtrování pole - array.filter()
- Mapování pole - array.map()
- Řetězení metod pole
- Find
- Sort, Reduce
*/

const zviratka = [
  { jmeno: '🐱 Chlupík',  vek: 3, druh: 'kočka' },
  { jmeno: '🐶 Štěkálek', vek: 5, druh: 'pes' },
  { jmeno: '🐱 Míca',     vek: 1, druh: 'kočka' },
  { jmeno: '🐸 Kvákal',   vek: 1, druh: 'žába' },
  { jmeno: '🐶 Hafík',    vek: 2, druh: 'pes' },
  { jmeno: '🐹 Hrůzomor', vek: 1, druh: 'morče' },
  { jmeno: '🐱 Fousek',   vek: 4, druh: 'kočka' },
  { jmeno: '🐶 Špagetka', vek: 2, druh: 'pes' }
];



const array = zviratka.filter((item) => {
  return item.vek > 2;
}).map((item) => {
  return `${item.jmeno}`
})

console.log(array)