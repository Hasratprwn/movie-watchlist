function addMovie(movieName) {
  const list = document.getElementById("watchlist");
  const li = document.createElement("li");
  li.textContent = movieName;
  list.appendChild(li);
}
