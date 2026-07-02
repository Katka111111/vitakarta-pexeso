// Dvojice pojem/popis pro pexeso VITAKARTA.
// Vychází z textů v Documents\vitakarta-hra\otazky.js, přepsáno do podoby
// "pojem" + samostatná popisná věta (bez podtržítka).
const KARTICKY = [
  // --- snadné ---
  { id: 1, pojem: "BankID", popis: "Jedna z možností, jak se zaregistrovat do aplikace VITAKARTA (vedle účtu OZP nebo Identity občana).", obtiznost: "lehka" },
  { id: 2, pojem: "SMS kód", popis: "Devítimístný kód, který klient dostane na mobilní telefon a zadá ho při prvním přihlášení.", obtiznost: "lehka" },
  { id: 3, pojem: "18 let", popis: "Minimální věk, od kterého se lze zaregistrovat do VITAKARTY.", obtiznost: "lehka" },
  { id: 4, pojem: "16 znaků", popis: "Maximální počet znaků, které může mít heslo do VITAKARTY (minimum je 8).", obtiznost: "lehka" },
  { id: 5, pojem: "Přehled", popis: "Dashboard, který se klientovi zobrazí automaticky hned po přihlášení.", obtiznost: "lehka" },
  { id: 6, pojem: "Zdraví", popis: "Dashboard, kde klient najde přehled preventivních prohlídek a termín další návštěvy.", obtiznost: "lehka" },
  { id: 7, pojem: "Benefity", popis: "Dashboard s widgetem aktuálního počtu kreditů a přehledem benefitů za kredity.", obtiznost: "lehka" },
  { id: 8, pojem: "Profily", popis: "Dashboard, kde klient najde osobní údaje, průkaz pojištěnce a pozvánky ke sdílení.", obtiznost: "lehka" },
  { id: 9, pojem: "500 kreditů", popis: "Odměna, kterou klient získá za úspěšné pozvání kamaráda do VITAKARTY.", obtiznost: "lehka" },

  // --- střední ---
  { id: 10, pojem: "Vykázaná péče", popis: "Zde klient zkontroluje zdravotní péči nahlášenou zdravotnickými zařízeními a může nahlásit nesrovnalost.", obtiznost: "stredni" },
  { id: 11, pojem: "Odměny lékařům", popis: "Zde může klient ohodnotit kvalitu péče svých lékařů přidělením bodů.", obtiznost: "stredni" },
  { id: 12, pojem: "Atlas doktorů", popis: "Katalog poskytovatelů zdravotních služeb s vyhledáváním podle lokality nebo odbornosti.", obtiznost: "stredni" },
  { id: 13, pojem: "Kuponový systém", popis: "Druhý typ benefitního systému VITAKARTY vedle kreditního – nárokový systém.", obtiznost: "stredni" },
  { id: 14, pojem: "Katalog benefitů", popis: "Místo, kde klient najde přehled všech benefitů čerpatelných za kupony nebo za kredity.", obtiznost: "stredni" },
  { id: 15, pojem: "VITASHOP", popis: "Vlastní e-shop OZP, kde lze za kredity nakoupit například vitamíny nebo permanentky na cvičení.", obtiznost: "stredni" },
  { id: 16, pojem: "Nálepky", popis: "Malé nepeněžní odměny za zdravé chování, které se sbírají automaticky.", obtiznost: "stredni" },
  { id: 17, pojem: "Hravě zdravě", popis: "Časově omezené výzvy a soutěže, které motivují pojištěnce ke zdravějšímu životnímu stylu.", obtiznost: "stredni" },
  { id: 18, pojem: "Osobní údaje", popis: "Zde může klient upravit svůj telefon, e-mail, adresu nebo bankovní spojení.", obtiznost: "stredni" },

  // --- těžké ---
  { id: 19, pojem: "Průkaz pojištěnce", popis: "Obrazovka, kde si klient může požádat o vydání nového průkazu pojištěnce.", obtiznost: "tezka" },
  { id: 20, pojem: "Zdravotní profil", popis: "Sem si klient zapisuje informace o svém zdravotním stavu, které mohou pomoci ošetřujícímu lékaři.", obtiznost: "tezka" },
  { id: 21, pojem: "Chronické potíže", popis: "Upozorňuje klienta na možné dlouhodobé zdravotní obtíže na základě vykázané péče.", obtiznost: "tezka" },
  { id: 22, pojem: "Pojistné", popis: "Zde klient řeší platební bilanci, přehled OSVČ nebo potvrzení bezdlužnosti.", obtiznost: "tezka" },
  { id: 23, pojem: "Oznámení", popis: "Zde si klient nastavuje, zda chce dostávat upozornění e-mailem nebo push notifikací.", obtiznost: "tezka" },
  { id: 24, pojem: "Autorizovaná zařízení", popis: "Umožňuje klientovi vzdáleně odebrat přístup mobilnímu zařízení, které ztratil nebo mu bylo odcizeno.", obtiznost: "tezka" },
  { id: 25, pojem: "Souhlasy s podmínkami", popis: "Zde klient uděluje nebo odvolává souhlasy s podmínkami používání VITAKARTY.", obtiznost: "tezka" },
  { id: 26, pojem: "Zprávy", popis: "Zde najdeme komunikaci mezi klientem a OZP, včetně možnosti položit dotaz přes tlačítko „Napište nám“.", obtiznost: "tezka" },
];

// Nastavení jednotlivých úrovní obtížnosti.
const UROVNE = {
  lehka: { nazev: "Lehká", pocetParu: 3, skupiny: ["lehka"] },
  stredni: { nazev: "Střední", pocetParu: 6, skupiny: ["lehka", "stredni"] },
  tezka: { nazev: "Těžká", pocetParu: 9, skupiny: ["lehka", "stredni", "tezka"] },
};
