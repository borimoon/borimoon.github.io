Vue.use(VueSmoothScroll);
var classes = new Vue({
  el: '#classes',
  data: {
    classItems: [
      {
        title: 'Harmonie tánc',
        text: 'Az Art Jazz  mozdulatvilágával ismerkedünk, amit a Limón technika elemeivel egészítünk ki. A táncórán a gerinc, a karok és a láb mozdulatainak, összehangolt kecses, elnyújtott formáit, íveit, kapcsoljuk össze.',
        timeTables: [
        {
          level: 'haladó',
          day: 'hétfő',
          time: '18.00'
        },

        {
          level: 'középhaladó',
          day: 'kedd',
          time: '18.00'
        },

        {
          level: 'kezdő',
          day: 'hétfő',
          time: '19.30'
        }
      ]
    },

    {
      title: 'Kortárstánc és kombináció',
      text: 'Útkeresés, a mozdulatokon belül. Minden elengedett, ejtett, lendített, elmozdulás a térben érzelmi töltést kap, melyben szabadon és játékosan fedezzük fel a test mozgáshatárait. Felszabadult, vidám együttműködés jellemzi a táncórát.',
      timeTables: [
      {
        day: 'szerda',
        time: '19.30'
      },

      {
        day: 'péntek',
        time: '18.00'
        }
      ]
    },

    {
      title: 'Fejlesztés és koreográfia',
      text: 'Erősítő gyakorlatokkal átmozgatjuk az egész testet, ezután több kombináció és koreográfia követi egymást, amit eltáncolunk és finomítunk.',
      timeTables: [
      {
        day: 'szerda',
        time: '18.00'
        }
      ]
    },

    {
      title: 'Kortárs duó',
      text: 'Kontakt tánctechnika, kompozíció, emelések. Megtanuljátok, hogyan dolgozzatok együtt, miként hozzatok létre közös mozdulatokat. Az órán maximum két pár vesz részt. Állandó párokkal dolgozunk, párcsere nincs.',
      timeTables: [
      {
        day: 'csütörtök',
        time: '18.00'
      },

      {
        day: 'csütörtök',
        time: '19.30'
        }
      ]
    },

      {title: 'Esküvőtánc',
      text: 'Ha egy igazán különleges koreográfiát táncolnátok el a nagy napon, egy általatok választott zenére, személyre szabottan, olyan mozdulatokból építjük fel a koreográfiát, amiben mindketten jól érzitek magatokat. A keringő mellett, kérésre emeléseket, szép karvezetéseket, meghitt pillanatokat is beépíthetünk a táncotokba.'},

      {title: 'Magánóra',
      text: 'Ha szeretnél a saját tempódban haladni, vannak ötleteid, amiket megvalósítanál, esetleg felvételire, fellépésre készülsz, lehetőséged van magánórát foglalni. Beszéljünk meg egy időpontot.'},

      {title: 'Ha nehéz választani…',
      text: '…írj bátran és segítek. Az első táncórádon, megajándékozunk egy plusz alkalommal, hogy két tánctechnikát, vagy fejlesztő táncórát is kipróbálhass. Így biztosan megtalálod azt a mozdulatvilágot, ami hozzád a legközelebb áll. Így az első héten 2 táncórán is részt vehetsz.'}
    ]
  }
});
