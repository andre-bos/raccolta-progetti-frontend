// Chiamate Ajax

let xhr = new XMLHttpRequest(); // Ogg in grado di effettuare Richieste al Server - readyState = 0
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // Definisco il Method e URL della chiamate - readyState = 1
xhr.send(); // Eseguo la chiamata - readyState = 2
// readyState = 3	LOADING	Downloading; responseText holds partial data.
// readyState = 4	DONE	The operation is complete.
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log('The operation is complete');
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        console.log(obj);
        createList(obj);
    }
}

/* document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('.users');
    console.log(div);
}) */

/* window.onload = () => {
    let div = document.querySelector('.users');
    console.log(div);
} */

function createList(users) {
    let div = document.querySelector('.users');
    users.forEach(u => {
        let p = document.createElement('p');
        p.innerText = u.name + " (" + u.email + ")";
        div.appendChild(p);
    })
}

