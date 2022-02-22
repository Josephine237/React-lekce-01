'use strict';
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

// Cvičení na metody pole

const zasoby = [
  { nazev: '🍏 jablka',    typ: 'ovoce',    pocet: 2,  trvanlivost: 26  },
  { nazev: '🥔 brambory',  typ: 'zelenina', pocet: 27, trvanlivost: 180 },
  { nazev: '🥩 hovězí',    typ: 'maso',     pocet: 3,  trvanlivost: 3   },
  { nazev: '🍞 chleba',    typ: 'pečivo',   pocet: 4,  trvanlivost: 2   },
  { nazev: '🥦 brokolice', typ: 'zelenina', pocet: 1,  trvanlivost: 11  },
  { nazev: '🍩 koblihy',   typ: 'pečivo',   pocet: 6,  trvanlivost: 2   },
  { nazev: '🍓 jahody',    typ: 'ovoce',    pocet: 12, trvanlivost: 7   },
  { nazev: '🥕 mrkev',     typ: 'zelenina', pocet: 7,  trvanlivost: 40  },
  { nazev: '🧀 sýr',       typ: 'sýr',      pocet: 2,  trvanlivost: 10  },
  { nazev: '🍗 kuřecí',    typ: 'maso',     pocet: 4,  trvanlivost: 4   },
];

// Úkoly:

// 1) Projdi pole metodou forEach a vypiš do konzole
// jednu po druhé seznam všech zásob, stačí vždy jen název a počet.

zasoby.forEach((jidlo) => {
  console.log(`${jidlo.nazev}, ${jidlo.pocet} ks`)})


// 2) Přidej na konec pole nové zásoby.
// (JavaScriptem! Ne že je připíšeš ručně do pole nahoře :D)
// - 🧅 cibule, zelenina, 4 kusy, trvanlivost 120 dnů
// - 🍰 dortík, pečivo, 1 kus, trvanlivost 1 den

let cibule = {
  nazev: "🧅 cibule",
  typ: "zelenina",
  pocet: 4,
  trvanlivost: 120,
}

zasoby.push(cibule);

// let dortik = {};
// zasoby.push(dortik = {nazev: "🍰 dortík", typ: "pečivo", pocet: 1, trvanlivost: 1})

zasoby.push({nazev: "🍰 dortík", typ: "pečivo", pocet: 1, trvanlivost: 1});
  // tím, že nahoře nemám objekty pomenované, tak to tam můžu push bez názvu objektu...
  //ALE funguje i horní případ s dortíkem v proměnné, který mam zakomentovaný

console.log(zasoby);      // !!! nezapomenout to vypsat do konzole !!!

console.log("---------------------")


// 3) Vytvoř nové pole zelenina, a filter do něj vyber
// všechny zeleninové zásoby.

let zelenina = zasoby.filter((jidlo) => jidlo.typ === "zelenina");

zelenina.forEach((jidlo) => {
  console.log(`${jidlo.nazev}, ${jidlo.pocet}`)
});


console.log("----------------------")

// 4) Odjíždíš na 5 dnů pryč. Vyfiltruj a vypiš všechny
// zásoby, které je potřeba rychle sníst, aby se nezkazily.
// Tj. mají trvanlivost <= 5.

let food = zasoby.filter((jidlo) => jidlo.trvanlivost <= 5);

food.forEach((jidlo) => {
  console.log(`${jidlo.nazev}, ${jidlo.trvanlivost}`)
}); 


        // const food = zasoby.filter(jidlo => {             // proč jídlo nemusí být v závorce?
        //   return jidlo.trvanlivost <= 5
        // }).map((jidlo) => {
        //   return `${jidlo.nazev}`
        // })

        // console.log(food)


console.log("---------------------")

// 5) Vrátila ses z výletu a máš dojem, že máš prázdnou spižírnu.
// Zeleninu a ovoce moc nejíš, takže ty tě nezajímají,
// ale vyfiltruj a vypiš všechny ostatní potraviny,
// od kterých máš jen 3 kusy nebo méně - jde se nakupovat!

let food2 = zasoby.filter((jidlo) => 
  jidlo.typ !== "zelenina" && jidlo.typ !== "ovoce" && jidlo.pocet <= 3);

food2.forEach((jidlo) => {
  console.log(`${jidlo.nazev}, ${jidlo.pocet}`)
});


        // food2.forEach((jidlo) => {
        //   if (jidlo.pocet <= 3) {
        //   console.log(`${jidlo.nazev}, ${jidlo.pocet}`)
        //   } else {                                            // můžu to takhle nechat prázdné?
        //   }
        // });
