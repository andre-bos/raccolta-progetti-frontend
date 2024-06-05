// Seleziono l'header, il bottone la hero section nel DOM
let header = document.querySelector('header');
let heroSection = document.querySelector('.hero');
let navBtn = document.querySelector('.btn-nav')

// Ottengo l'altezza della sezione hero
let heroSectionHeight = heroSection.offsetHeight;

// Aggiungi un evento scroll al window
window.addEventListener('scroll', function() {
  // Controllo se lo scroll verticale è oltre il 75% l'altezza della sezione hero
  if (window.scrollY > heroSectionHeight * 0.75) {
    // Se è cosi, cambio il colore dell'header e del bottone
    header.style.backgroundColor = '#fff';
    navBtn.style.backgroundColor = '#188917';
  } else if (window.scrollY < heroSectionHeight * 0.75) {
    // Altrimenti, riporto il colore dell'header e del bottone al valore iniziale.
    header.style.backgroundColor = '#ffc017';
    navBtn.style.backgroundColor = '#191919'
  }
});