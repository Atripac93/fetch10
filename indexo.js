let container = document.querySelector("#lista");

const fetchBook = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((result) => {
      console.log(result);
      return result.json();
    })
    .then((data) => {
      console.log(data);

      const imgElement = data.map((book) => {
        return `
        <div class="col-4 col-md-4 col-lg-4 row">
          <div class="card m-2">
            <img src="${book.img}" alt="${book.title}"/> 
            <h3>${book.title}</h3>
            <button>price ${book.price}</button>
          </div>
        </div>`;
      });

      container.innerHTML = imgElement.join("");
    })
    .catch((error) => {
      console.error("Errore, mi dispiace!!!", error);
    });
};

fetchBook();
const searchBooks = () => {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchInput)
  );

  displayBooks(filteredBooks);
};

let body = document.querySelector("body");
body.style.backgroundColor = "yellow";
