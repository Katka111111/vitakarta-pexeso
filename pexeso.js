let aktualniUroven = null;
let karty = [];
let otoceneKarty = [];
let zamceno = false;
let nalezenoParu = 0;
let celkemParu = 0;
let casStart = null;
let casInterval = null;

function zamichej(pole) {
  const vysledek = [...pole];
  for (let i = vysledek.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [vysledek[i], vysledek[j]] = [vysledek[j], vysledek[i]];
  }
  return vysledek;
}

function vyberDvojice(uroven) {
  const nastaveni = UROVNE[uroven];
  const dostupne = KARTICKY.filter((k) => nastaveni.skupiny.includes(k.obtiznost));
  return zamichej(dostupne).slice(0, nastaveni.pocetParu);
}

function vytvorKarty(vybraneDvojice) {
  const noveKarty = [];
  vybraneDvojice.forEach((d) => {
    noveKarty.push({ id: 'p-' + d.id, dvojiceId: d.id, typ: 'pojem', text: d.pojem, otocena: false, zmizela: false });
    noveKarty.push({ id: 'o-' + d.id, dvojiceId: d.id, typ: 'popis', text: d.popis, otocena: false, zmizela: false });
  });
  return zamichej(noveKarty);
}

function zahajitHru(uroven) {
  aktualniUroven = uroven;
  const dvojice = vyberDvojice(uroven);
  karty = vytvorKarty(dvojice);
  celkemParu = dvojice.length;
  nalezenoParu = 0;
  otoceneKarty = [];
  zamceno = false;
  casStart = null;
  zastavCas();
  document.getElementById('cas-hodnota').textContent = '0:00';

  document.getElementById('vyber-urovne').hidden = true;
  document.getElementById('vysledek').hidden = true;
  document.getElementById('hra').hidden = false;

  vykresliPlochu();
}

function vykresliPlochu() {
  const plocha = document.getElementById('plocha');
  plocha.innerHTML = '';
  karty.forEach((karta) => {
    const el = document.createElement('div');
    el.className = 'karta';
    el.dataset.id = karta.id;
    el.innerHTML =
      '<div class="karta-vnitrek">' +
      '<div class="karta-strana karta-rub"><img src="assets/ozp-logo.png" alt="OZP"></div>' +
      '<div class="karta-strana karta-lic typ-' + karta.typ + '">' + karta.text + '</div>' +
      '</div>';
    el.addEventListener('click', () => klikNaKartu(karta.id));
    plocha.appendChild(el);
  });
}

function najdiKartu(id) {
  return karty.find((k) => k.id === id);
}

function vykresliKartu(karta) {
  const el = document.querySelector('.karta[data-id="' + karta.id + '"]');
  if (!el) return;
  el.classList.toggle('otocena', karta.otocena);
  el.classList.toggle('zmizela', karta.zmizela);
}

function klikNaKartu(id) {
  if (zamceno) return;
  const karta = najdiKartu(id);
  if (!karta || karta.otocena || karta.zmizela) return;

  if (otoceneKarty.length === 0) {
    spustCas();
  }

  karta.otocena = true;
  vykresliKartu(karta);
  otoceneKarty.push(karta);

  if (otoceneKarty.length === 2) {
    zamceno = true;
    setTimeout(vyhodnotDvojici, 1800);
  }
}

function vyhodnotDvojici() {
  const [prvni, druha] = otoceneKarty;
  const sedi = prvni.dvojiceId === druha.dvojiceId && prvni.typ !== druha.typ;

  if (sedi) {
    prvni.zmizela = true;
    druha.zmizela = true;
    vykresliKartu(prvni);
    vykresliKartu(druha);
    nalezenoParu++;
    otoceneKarty = [];
    zamceno = false;

    if (nalezenoParu === celkemParu) {
      setTimeout(dokoncitHru, 500);
    }
  } else {
    prvni.otocena = false;
    druha.otocena = false;
    vykresliKartu(prvni);
    vykresliKartu(druha);
    otoceneKarty = [];
    zamceno = false;
  }
}

function spustCas() {
  if (casInterval) return;
  casStart = Date.now();
  casInterval = setInterval(aktualizujCas, 500);
}

function zastavCas() {
  if (casInterval) {
    clearInterval(casInterval);
    casInterval = null;
  }
}

function formatujCas(ms) {
  const celkemSekund = Math.floor(ms / 1000);
  const minuty = Math.floor(celkemSekund / 60);
  const sekundy = celkemSekund % 60;
  return minuty + ':' + String(sekundy).padStart(2, '0');
}

function aktualizujCas() {
  document.getElementById('cas-hodnota').textContent = formatujCas(Date.now() - casStart);
}

function dokoncitHru() {
  zastavCas();
  const finalniCas = formatujCas(Date.now() - casStart);
  document.getElementById('vysledny-cas').textContent = finalniCas;
  document.getElementById('hra').hidden = true;
  document.getElementById('vysledek').hidden = false;
}

function zpetNaVyberUrovne() {
  zastavCas();
  document.getElementById('hra').hidden = true;
  document.getElementById('vysledek').hidden = true;
  document.getElementById('vyber-urovne').hidden = false;
}

document.querySelectorAll('.btn-uroven').forEach((btn) => {
  btn.addEventListener('click', () => zahajitHru(btn.dataset.uroven));
});
document.getElementById('btn-zmenit-uroven').addEventListener('click', zpetNaVyberUrovne);
document.getElementById('btn-zpet-na-uroven').addEventListener('click', zpetNaVyberUrovne);
document.getElementById('btn-nova-hra').addEventListener('click', () => zahajitHru(aktualniUroven));
