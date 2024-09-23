let pictures = Array.from(document.getElementsByClassName('picture'));
const search = document.getElementById('search-input');
const apiKey = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getData() {
  try {
    let url = `https://api.unsplash.com/search/photos?query=${search.value}&client_id=${apiKey}&per_page=12`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const images = data.results;
    pictures.forEach((picture, index) => {
      if (index < images.length) {
        picture.style.backgroundImage = `url(${images[index].urls.small})`;
      } else {
        picture.style.backgroundImage = 'none';
      }
    });
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}
const button = document.getElementById('icon-search')

// навешиваем обработчик на событие клик
button.addEventListener('click', function () {
    getData()
})

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search-input");
  searchInput.autocomplete = "off";
  searchInput.focus();

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      getData();
    }
  });
});
// при онклоике брать значение value импуте вызывать getData