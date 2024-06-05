getDataforAlbum();

document.addEventListener("DOMContentLoaded", function () {
  resizeSiedbarSx();
  const sidebar = document.querySelector(".sidebar-sx");
  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const toggleIconLeft = document.querySelector(".arrow .left");
  const toggleIconRight = document.querySelector(".arrow .right");
  const libreria = document.querySelector("#libreriaScritta");
  const plusButton = document.querySelector(".add-playlist .plus");
  const libreriaBottoni = document.querySelector(".libreria-bottoni");
  const songsInfo = document.querySelectorAll(".song-info");
  const marginImages = document.querySelectorAll(".album-table-left > div");
  const iconeAlbum = document.querySelectorAll(".icona-album");
  const openLibraryIcon = document.querySelector("#open-library-icon");
  const collapsedLibraryIcon = document.querySelector(
    "#collapsed-library-icon"
  );
  const homeBtnScritta = document.querySelector("#homeScritta");
  const cercaBtnScritta = document.querySelector("#cercaScritta");
  let headTable = document.querySelector(".tabella thead");
  libBottDx = document.querySelector(".libreria-bottoni .libreria-bottoni-dx");
  libBottDxDown = document.querySelector(".tabella .libreria-bottoni-dx");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-retracted");

    // Modifica la visibilità degli elementi in base allo stato della sidebar
    if (sidebar.classList.contains("sidebar-retracted")) {
      toggleIconLeft.style.display = "none";
      toggleIconRight.style.display = "block";
      libreria.style.display = "none";
      plusButton.style.display = "none";
      libreriaBottoni.classList.remove("d-flex");
      libreriaBottoni.classList.add("d-none");
      openLibraryIcon.classList.remove("d-none");
      collapsedLibraryIcon.classList.add("d-none");
      homeBtnScritta.classList.add("d-none");
      cercaBtnScritta.classList.add("d-none");
      headTable.classList.add("d-none");
      libBottDxDown.classList.add("d-none");

      songsInfo.forEach((songInfo) => {
        songInfo.classList.add("d-none");
      });
      marginImages.forEach((marginImage) => {
        marginImage.classList.remove("m-3", "mb-0");
        marginImage.classList.add("mb-3");
      });
      iconeAlbum.forEach((iconaAlbum) => iconaAlbum.classList.add("mx-auto"));

      toggleBtn.classList.add("w-100", "mb-3");
      toggleBtn.classList.remove("m-4");
    } else {
      toggleIconLeft.style.display = "block";
      toggleIconRight.style.display = "none";
      libreria.style.display = "block";
      plusButton.style.display = "block";
      libreriaBottoni.classList.remove("d-none");
      libreriaBottoni.classList.add("d-flex");
      openLibraryIcon.classList.add("d-none");
      collapsedLibraryIcon.classList.remove("d-none");
      homeBtnScritta.classList.remove("d-none");
      cercaBtnScritta.classList.remove("d-none");
      headTable.classList.remove("d-none");
      libBottDxDown.classList.remove("d-none");

      songsInfo.forEach((songInfo) => {
        songInfo.classList.remove("d-none");
      });
      marginImages.forEach((marginImage) => {
        marginImage.classList.remove("m-3", "mb-0");
      });
      iconeAlbum.forEach((iconaAlbum) =>
        iconaAlbum.classList.remove("mx-auto")
      );
      toggleBtn.classList.remove("w-100", "mb-3");
      toggleBtn.classList.add("m-4");
    }
  });

  // Aggiungi l'evento di click alla freccia sinistra
  toggleIconLeft.addEventListener("click", function () {
    sidebar.classList.add("sidebar-retracted");
    toggleIconLeft.style.display = "none";
    toggleIconRight.style.display = "block";
    libreria.style.display = "none";
    plusButton.style.display = "none";
    libreriaBottoni.classList.remove("d-flex");
    libreriaBottoni.classList.add("d-none");
    openLibraryIcon.classList.remove("d-none");
    collapsedLibraryIcon.classList.add("d-none");
    toggleBtn.classList.add("w-100", "mb-3");
    toggleBtn.classList.remove("m-4");
    homeBtnScritta.classList.add("d-none");
    cercaBtnScritta.classList.add("d-none");
    headTable.classList.add("d-none");
    libBottDxDown.classList.add("d-none");

    songsInfo.forEach((songInfo) => {
      songInfo.classList.add("d-none");
    });
    marginImages.forEach((marginImage) => {
      marginImage.classList.remove("m-3", "mb-0");
    });
    iconeAlbum.forEach((iconaAlbum) => iconaAlbum.classList.add("mx-auto"));
  });

  // Aggiungi l'evento di click alla freccia destra
  toggleIconRight.addEventListener("click", function () {
    sidebar.classList.remove("sidebar-retracted");
    toggleIconLeft.style.display = "block";
    toggleIconRight.style.display = "none";
    libreria.style.display = "block";
    plusButton.style.display = "block";
    libreriaBottoni.classList.remove("d-none");
    libreriaBottoni.classList.add("d-flex");
    openLibraryIcon.classList.add("d-none");
    collapsedLibraryIcon.classList.remove("d-none");
    toggleBtn.classList.remove("w-100", "mb-3");
    toggleBtn.classList.add("m-4");
    homeBtnScritta.classList.remove("d-none");
    cercaBtnScritta.classList.remove("d-none");
    headTable.classList.remove("d-none");
    libBottDxDown.classList.add("d-none");

    songsInfo.forEach((songInfo) => {
      songInfo.classList.remove("d-none");
    });
    marginImages.forEach((marginImage) => {
      marginImage.classList.remove("m-3", "mb-0");
    });
    iconeAlbum.forEach((iconaAlbum) => iconaAlbum.classList.remove("mx-auto"));
  });
});

// sidebar dx
let closeBtn = document.querySelector(".close-btn");
let friendsBtn = document.querySelector("#friends-btn");

let main = document.querySelector(".main");
let cards = document.querySelectorAll(".card");

closeBtn.addEventListener("click", closeCustomNav);
friendsBtn.addEventListener("click", openCustomNav);

function openCustomNav() {
  document.getElementById("myCustomSidebar").style.width = "350px";
}

function closeCustomNav() {
  document.getElementById("myCustomSidebar").style.width = "0";
  document.getElementById("myCustomSidebar").style.overflow = "hidden";
}

function responsiveCards() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.parentNode.className = "";
    if (main.offsetWidth < 576) {
      card.parentNode.classList.add("col-4");
    } else if (main.offsetWidth >= 576 && main.offsetWidth < 767) {
      card.parentNode.classList.add("col-4");
    } else if (main.offsetWidth >= 768 && main.offsetWidth < 992) {
      card.parentNode.classList.add("col-3");
    } else if (main.offsetWidth >= 993 && main.offsetWidth < 1200) {
      card.parentNode.classList.add("col-2");
    } else if (main.offsetWidth > 1200) {
      card.parentNode.classList.add("col-2");
    }
  });
}

// left sidebar width control
const leftWidthControl = document.querySelector(".sidebar-sx-width-control");
const sidebarSx = document.querySelector(".sidebar-sx");
// const sidebarDx = document.querySelector('#myCustomSidebar');

let leftIsDragging = false;
let leftInitialX;
let sidebarSxInitialWidth = sidebarSx.offsetWidth;

leftWidthControl.addEventListener("mousedown", (e) => {
  leftIsDragging = true;
  leftInitialX = e.clientX;
  sidebarSxInitialWidth = sidebarSx.offsetWidth;

  document.addEventListener("mousemove", handleMouseMoveLeft);
  document.addEventListener("mouseup", () => {
    leftIsDragging = false;
    document.removeEventListener("mousemove", handleMouseMoveLeft);
  });
});

function handleMouseMoveLeft(e) {
  const sidebar = document.querySelector(".sidebar-sx");
  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const toggleIconLeft = document.querySelector(".arrow .left");
  const toggleIconRight = document.querySelector(".arrow .right");
  const libreria = document.querySelector("#libreriaScritta");
  const plusButton = document.querySelector(".add-playlist .plus");
  const libreriaBottoni = document.querySelector(".libreria-bottoni");
  const dateAggiunta = document.querySelector(".data-aggiunta");
  const riprodotti = document.querySelector(".riprodotto");

  if (leftIsDragging) {
    const leftMouseX = e.clientX;
    const deltaX = leftMouseX - leftInitialX;
    const tHead = document.querySelector(".playlists-table thead");
    const libreriaBottoni = document.querySelector(".libreria-bottoni");
    const dateAggiunta = document.querySelectorAll(".data-aggiunta");
    const riprodotti = document.querySelectorAll(".riprodotto");

    if (deltaX > 0) {
      if (leftMouseX > 119 && leftMouseX < 320) {
        sidebarSx.classList.add("sidebar-retracted");
      }

      if (leftMouseX > 500) {
        tHead.classList.remove("d-none");
        riprodotti.forEach((riprodotto) =>
          riprodotto.classList.remove("d-none")
        );

        dateAggiunta.forEach((dataAggiunta) =>
          dataAggiunta.classList.remove("d-none")
        );
        libBottDx.classList.remove("d-none");
        libBottDx.classList.add("d-flex");
        libreriaBottoni.classList.add("d-flex");
      }

      if (leftMouseX > window.innerWidth / 2) {
        closeCustomNav();
        return;
      }

      // console.log('Il mouse si sta muovendo verso dx');
      const sidebarSxWidth = sidebarSxInitialWidth + deltaX;

      sidebarSx.style.width = sidebarSxWidth + "px";
      sidebarSx.style.flexGrow = "1";
      sidebarSx.style.flexShrink = "0";
      // main.style.flexGrow = "0";
      // main.style.flexShrink = "1";
      sidebarDx.style.flexGrow = "0";
      sidebarDx.style.flexShrink = "0";
      leftInitialX = sidebarSxWidth;
    } else if (deltaX < 0) {
      if (leftMouseX < 500) {
        libBottDx.classList.add("d-none");
        libBottDx.classList.remove("d-flex");
        tHead.classList.add("d-none");
        riprodotti.forEach((riprodotto) =>
          riprodotto.classList.remove("d-none")
        );
        dateAggiunta.forEach((dataAggiunta) =>
          dataAggiunta.classList.add("d-none")
        );

        libreriaBottoni.classList.remove("d-flex");
      }
      if (leftMouseX < window.innerWidth / 3) {
        openCustomNav();
      }
      if (leftMouseX < 320 && leftMouseX > 120) {
        sidebarSx.style.width = "320px";
        return;
      }

      if (leftMouseX < 120) {
        sidebarSx.classList.add("sidebar-retracted");
        toggleIconLeft.style.display = "none";
        toggleIconRight.style.display = "block";
        libreria.style.display = "none";
        plusButton.style.display = "none";
        libreriaBottoni.classList.remove("d-flex");
        libreriaBottoni.classList.add("d-none");
        return;
      }

      // console.log('Il mouse si sta muovendo verso sx');
      const sidebarSxWidth = sidebarSxInitialWidth + deltaX;
      sidebarSx.style.width = sidebarSxWidth + "px";
      sidebarSx.style.flexGrow = "0";
      sidebarSx.style.flexShrink = "1";
      // main.style.flexGrow = "1"
      // main.style.flexShrink = "0";
      sidebarDx.style.flexGrow = "0";
      sidebarDx.style.flexShrink = "0";
      leftInitialX = sidebarSxWidth;
    }
  }
}

// ------ left sidebar albums
// --- genera 15 album casuali e popola la sidebar di sx

document.addEventListener("mousemove", responsiveCards);
window.addEventListener("resize", responsiveCards);

document.addEventListener("click", responsiveCards);
window.addEventListener("load", responsiveCards);

async function fillSidebarSx(artistId) {
  let tBody = document.querySelector(".playlists-table tbody");
  let tr = document.createElement("tr");
  tr.classList.add("py-3");
  // let randomId = numeroACaso();
  let albums = await getArtistAlbums(artistId);
  let artist = await getArtist(artistId);
  // console.log(artist.id)
  let album = albums[0];
  // console.log(album);
  tr.innerHTML = `
    <td class="album-table-left m-3">
    <div class="d-flex m-3">
      <div class="icona-album me-2">
      <img src="${album.cover_small}" />
      </div>
      <div class="song-info">
        <div class="table-artista">${artist.name}</div>
        <div>Artista</div>
      </div>
    </div>
    </td>
  
    <td class="data-aggiunta m-3">
      <div class="h-100 d-flex align-items-center">2 giorni fa</div>
    </td>
    <td class="riprodotto m-3"></td>
  `;

  tBody.appendChild(tr);
}

async function getArtist(artistId) {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
  );
  const artist = await response.json();
  // console.log(artist);
  return artist;
}

async function getArtistTracklist(artistId) {
  let tracks = [];
  const artist = await getArtist(artistId);
  const response = await fetch(artist.tracklist);
  let currentTracklist = await response.json();
  tracks.push(...currentTracklist.data);
  console.log(tracks);
  return tracks;
}

async function getArtistAlbums(artistId) {
  const tracklist = await getArtistTracklist(artistId);
  let albums = [];
  // console.log(tracklist);
  tracklist.forEach((track) => {
    const albumId = track.album.id;
    if (!albums.some((album) => album.id === albumId)) {
      albums.push(track.album);
    }
  });
  // console.log(albums);
  return albums;
}

const searchURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
let query = "CORPSE";
search(query);

async function search(query) {
  const response = await fetch(`${searchURL}/${query}`);
  const data = await response.json();
  console.log(data);
}

function numeroACaso() {
  return Math.floor(Math.random() * 400) + 1;
}

async function fillMainAlbum(artistId) {
  let cardsContainer = document.querySelector(".playlist-cards-container");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  let albums = await getArtistAlbums(artistId);
  let album = albums[0];
  let artist = await getArtist(artistId);
  console.log(artist);
  console.log(album.id);
  cardContainer.innerHTML = `
        <div class="card rounded-4">
        <div class="rounded-4 overflow-hidden p-4">
            <a href="album.html?id=${album.id}">
              <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}" />
            </a>
        </div>
            <div class="card-body">
          <h5 class="card-title text-white">${album.title}</h5>
          <a href="artist.html?id=${artist.id}"
          <p class="card-text">
          ${artist.name}
          </p>
        </div>
      </div>
      `;

  cardsContainer.appendChild(cardContainer);
}

document.addEventListener("DOMContentLoaded", function () {
  var altezzaBrowser = window.outerHeight;
  var altezzaViewport = window.innerHeight;
  var altezzaEffettiva = altezzaViewport - (altezzaBrowser - altezzaViewport);

  document.documentElement.style.height = altezzaEffettiva + "px";
  // Rimuovi margini e padding dal body
  document.body.style.margin = "0";
  document.body.style.padding = "0";
});

// altezza sidebar sx
function resizeSiedbarSx() {
  let container = document.querySelector(".general-container");
  let libreria = document.querySelector(".sidebar-sx-libreria");
  let tBody = document.querySelector(".tabella");
  let containerHeight = container.offsetHeight;

  console.log(containerHeight);
  tBody.style.height = `${containerHeight - 270}px`;
  libreria.classList.add("rounded-4");
  tBody.classList.add("rounded-4");

  libreria.style.height = `${containerHeight - 150}px`;
}

window.addEventListener("resize", resizeSiedbarSx);

// player

let playerHearts = document.querySelectorAll(".player-heart svg");
console.log(playerHearts);
playerHearts.forEach((heart) =>
  heart.addEventListener("click", () => {
    console.log("click");
    playerHearts.forEach((svg) => {
      svg.classList.toggle("d-none");
    });
  })
);

// FUNZIONI ---------------------
async function getDataforAlbum() {
  let searchParams = new URLSearchParams(window.location.search);
  let albumId = searchParams.get("id");
  let album = await getAlbum(albumId);
  console.log(album);

  let wrapper = document.querySelector(".wrapper-for-album");
  let table = document.createElement("table");
  table.classList.add("album-songs");
  let tbody = document.createElement("tbody");
  album.tracks.data.forEach((track, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="text-white">${index + 1}</td>
      <td class="d-inline-block">
         <img
          class="foto-copertina "
          src=${album.cover_small}
          alt=""
        />
      </td>
      <td class="text-white"><a href=${track.preview} target="_blank">${track.title}</a></td>
      <td class="text-white">${track.rank}</td>
      <td class="text-white">${Math.floor(track.duration / 60)}:${String(
      track.duration % 60
    ).padStart(2, "0")}</td>
      `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  let container = document.createElement("div");
  container.innerHTML = `
    <div
    class="artist-container d-flex flex-column justify-content-end pb-3 ps-4"
  >
    <div class="top-info-artist d-flex">
      <div class="cover-album-head">
      <img
      class="rounded-2"
      src=${album.cover_medium}
      alt=""
    />
      </div>
      <div class="info-artist d-flex flex-column justify-content-end">
        <p class="text-white">
          Album
        </p>
        <p class="artist-name-big text-white fw-bold">
          ${album.title}
        </p>
        <div class="text-white fw-bold d-flex align-items-center">
          <img src="${album.artist.picture_small}"
          class="cerchietto rounded-circle me-2"/>
          <a href="artist.html?id=${album.artist.id}" class="artist-link-head text-white fw-bold" >${album.artist.name}</a> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
          </svg>
          <div class="release-date">
          ${(album.release_date.slice(0,4))}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
          </svg>
          <div class="numero-brani me-1">
          ${album.nb_tracks} Brani,
          </div>
          <div class="durata-album">
          ${Math.floor(album.duration/60)} min ${album.duration % 60} sec
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bottoni mb-4 pt-3">
    <button class="play-btn rounded-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-play-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
        />
      </svg>
    </button>
    <button class="random-music">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#b3b3b3"
        class="bi bi-shuffle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
        />
        <path
          d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"
        />
      </svg>
    </button>
    <a class="btn-segui" href="">Segui</a>
    <button class="altre-opzioni">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#b3b3b3"
        class="bi bi-three-dots"
        viewBox="0 0 16 16"
      >
        <path
          d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
        />
      </svg>
    </button>
  </div>
  <div class="folk-music">
    <p class="fw-bold text-white">Popolari</p>
  </div>
  
  <div class="music mx-5">
  ${table.outerHTML}
  </div>
  `;
  let topBar = document.querySelector(".blurred-bg");

  wrapper.appendChild(container);
  let artistContainer = document.querySelector(".artist-container");
  artistContainer.style.backgroundImage = `url(${album.artist.picture_big})`;

  artistContainer.style.backgroundSize = "cover";
  artistContainer.style.backgroundRepeat = "no-repeat";
  topBar.style.backgroundImage = `url(${album.artist.picture_big})`;
  topBar.style.filter = "blur(10px)";
  topBar.style.transform = "scale(2)";
  topBar.style.opacity = "0";
  let nameContainer = document.querySelector(".play-album-name");

  nameContainer.innerText = `${album.title}`;
  topBar.style.zIndex = -1;
  console.log(table);
  console.log(wrapper);
}

async function getAlbum(albumId) {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
  );
  const album = await response.json();
  console.log(album);
  return album;
}

//   FINE FUNZIONI -------------------------------------------------
const scrollableElement = document.querySelector(".main");
let playlistArtistContainer = document.querySelector(".play-album-container");
scrollableElement.addEventListener("scroll", () => {
  let topBar = document.querySelector(".blurred-bg");
  const scrollTopValue = scrollableElement.scrollTop;
  if (scrollTopValue > 400) {
    topBar.style.opacity = "1";
    topBar.style.transition = "all 0.3s linear";
    playlistArtistContainer.classList.add("d-flex");
    playlistArtistContainer.classList.remove("d-none");
  } else {
    topBar.style.opacity = "0";
    playlistArtistContainer.classList.remove("d-flex");
    playlistArtistContainer.classList.add("d-none");
  }

  // Puoi fare qualcosa con il valore di scroll
  console.log("Scroll Top:", scrollTopValue);
});
