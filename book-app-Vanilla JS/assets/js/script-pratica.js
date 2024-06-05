function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

// Recupero i libri dall'endpoint con un a chiamata AJAX

let ajaxCall = new XMLHttpRequest() // Readystate = 0: Creo l'oggetto di chiamata
ajaxCall.open('GET', 'https://striveschool-api.herokuapp.com/books') // Readystate = 1: Apro la chiamata, definendo il metodo GET perché voglio recuperare dei dati e l'url dal quale voglio recuperarli
ajaxCall.send() // Readystate 2: invio la chiamata
// Readystate 3: Aspetto il download dei dati
// Readystate 4: Operazione completata

// Creo una funzione che controlla che la richiesta sia andata a buon fine e trasforma il testo in JSON

ajaxCall.onreadystatechange = function() {
    if(ajaxCall.readyState == 4 && ajaxCall.status == 200) {
        console.log("La richiesta di dati è stata completa con successo")
        let json = ajaxCall.responseText
        console.log(json)
        //Trasmormo il JSON in un array di oggetti
        let booksObj = JSON.parse(json)
        console.log(booksObj)
        // Richiamo la funzione creaCards e le passo come argomento l'array di oggetti appena creato. Sarà compito di questa funzione ciclare l'array
        creaCards(booksObj)
    }
}

function creaCards(books) {
  let carrello = []
  let divCards = document.querySelector('#cards .row')
  console.log(divCards)
  books.forEach((book, index) => {
        /* divCards.innerHTML += `
        <div class="card col-md-3 pt-4 my-4">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                      <h5 class="card-title">${book.title}</h5>
                      <p class="card-text"><strong>Price: ${book.price} $</strong></p>
                      <span class="badge badge-primary">${book.category}</span>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`; */

        
    let singleCardContainer = document.createElement('div')
    singleCardContainer.classList.add('col-md-3', 'mb-5', 'd-flex', 'align-items-stretch')
    divCards.appendChild(singleCardContainer)
    let card = document.createElement('div')
    let cardIndex = index
    card.classList.add('card')
    card.setAttribute('data-index', cardIndex)
    singleCardContainer.appendChild(card)
    let imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    card.appendChild(imgContainer)
    let cardImg = document.createElement('img')
    let imgUrl = book.img
    let imgAlt = book.title
    setAttributes(cardImg, {"src": imgUrl, "alt": imgAlt})
    cardImg.classList.add('card-img-top', 'img-fluid')
    imgContainer.appendChild(cardImg)
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body', 'd-flex', 'flex-column')
    card.appendChild(cardBody)
    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = book.title
    cardBody.appendChild(cardTitle)
    let pPrice = document.createElement('p')
    pPrice.classList.add('card-text')
    pPrice.innerHTML = `<strong>Price: ${book.price} $</strong>`
    cardBody.appendChild(pPrice)
    let categoryTag = document.createElement('button')
    categoryTag.setAttribute('type', 'button')
    categoryTag.classList.add('btn', 'btn-outline-primary', 'align-self-start')
    categoryTag.textContent = book.category
    cardBody.appendChild(categoryTag)
    let buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('d-flex', 'mt-4')
    cardBody.appendChild(buttonsContainer)
    let discardBtn = document.createElement('button')
    discardBtn.setAttribute('type', 'button')
    discardBtn.classList.add('btn', 'btn-danger')
    discardBtn.textContent = 'Scarta libro'
    buttonsContainer.appendChild(discardBtn)
    let buyBtn = document.createElement('button')
    buyBtn.setAttribute('type', 'button')
    buyBtn.classList.add('btn', 'btn-primary')
    buyBtn.textContent = 'Aggiugi al carrello'
    buttonsContainer.appendChild(buyBtn)

    buttonsContainer.addEventListener('click', (eve) => {
      if(eve.target.classList.contains('btn-danger')) {
        singleCardContainer.remove()
          } else {
            carrello.push(book)
            console.log(carrello)
            let carrelloJSON = JSON.stringify(carrello)
            console.log(carrelloJSON)
          }

      if(divCards.childElementCount === 0) {
        alert('Tutti gli elementi sono stati rimossi')
      }
    })
});
}