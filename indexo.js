const cerca = function () {
  const artist = document.querySelector("#putsearch");
  console.log("artist", artist);
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.value
  );
};
cerca();
