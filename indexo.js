let container = document.querySelector("#lista");
let booksData = [];

const fetchBook = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      booksData = data;

      const imgElement = data.map((book) => {
        return `
        <div class="col-4 col-md-4 col-lg-4 row">
          <div class="card m-2">
          <img src="${book.img}" alt="${book.title}"/> 
            <h3>${book.title}</h3>
            <button class="rounded-pill bg-info">Prezzo ${book.price}</button>
          </div>
        </div>`;
      });

      container.innerHTML = imgElement.join("");
    })
    .catch((error) => {
      console.error("Errore, mi dispiace!!!", error);
    });
};

const searchBooks = () => {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  if (searchInput === "") {
    alert("inserisci un testo");
    return;
  }
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchInput)
  );
  displayBooks(filteredBooks);
  document.getElementById("searchInput").value = "";
};

const displayBooks = (books) => {
  const imgElement = books.map((book) => {
    return `
    <div class="col-4 col-md-4 col-lg-4 row">
    
    <a class="text-decoration-none" href="https://www.libraccio.it/libri-nuovi?gad_source=1&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3LtuPk7BNbQA87ShhI8jNaBMLvfxW6DljHJbOQHyGMlK3Zmi_d00l8aAjg4EALw_wcB" target="_blank" class="card-link">
      <div class="card m-2">
       <img src="${book.img}" alt="${book.title}"/>
        <h3>${book.title}</h3>
        <button>Prezzo ${book.price}</button>
      </div>
      </a>
    </div>`;
  });

  container.innerHTML = imgElement.join("");
};
const fern = document.querySelector(".druck");
fern.addEventListener("click", searchBooks);

fetchBook();
