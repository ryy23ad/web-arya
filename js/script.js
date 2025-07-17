function updateViewerCount() {
  const min = 80000;
  const max = 200000;
  const viewers = Math.floor(Math.random() * (max - min + 1)) + min;
  const el = document.getElementById("activeViewers");
  if (el) el.innerText = viewers.toLocaleString();
}
setInterval(updateViewerCount, 5000);
updateViewerCount();

// Search judul film
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const movies = document.querySelectorAll(".movie-card");
    movies.forEach((movie) => {
      const title = movie.getAttribute("data-title").toLowerCase();
      movie.style.display = title.includes(query) ? "block" : "none";
    });
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}