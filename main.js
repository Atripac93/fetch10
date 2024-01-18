const go = function () {
  const asin = document.querySelector("#campoRicerca");
  console.log("asin", asin);
  fetch("https://striveschool-api.herokuapp.com/books" + asin.title)
    .then((respo) => respo.json())
    .then((json) => console.log(json));
  let result = "";

  json.data.map((item) => {
    const libroCorrente = item.asin;
    result += `
    <div class="row">
      <div class="col-10">
        <div id="${libroCorrente.title.lowerCase()}">
          <h2>Risulto</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3"
          id="${libroCorrente.title.lowerCase()}">
          <a href="ansin"
          </div>
        </div>
      </div>
    </div>
    
    `;
  });
};
