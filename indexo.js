const url = "https://striveschool-api.herokuapp.com/books";

window.onload = () => {
  fetchBooks();
};
const fetchBooks = () => {
  fetch(url)
    .then((raw) => raw.json())
    .then((res) => {
      let cont = document.querySelector(".img");

      cont.innerHTML = res
        .map((book) => {
          return ` <div class='col col-9'> <div class="card mb-4 shadow-sm" id='book_${book.asin}'>
                <img src='${book.img}' />

                <div class="card-body">
                  <p class='font-weight-bold text-truncate book-title'> ${book.title} </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button class='btn btn-primary' onclick="addToCart('${book.title}', '${book.price}', '${book.asin}')"> EUR ${book.price} </button>
                    <button class='btn btn-secondary' onclick='hideCard(event)'> Nascondi </button>
                    </div>
                    <a class='btn btn-warning w-100' href='./details.html?id=${book.asin}'> Dettagli </a>
                </div>
              </div> </div>`;
        })
        .join("");
    })
    .catch((err) => console.error(err));
};
