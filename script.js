let pictures = Array.from(document.getElementsByClassName('picture'));
const search = document.getElementById('search-input');
const apiKey = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getData(query = '') {
  try {
    let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=12`;
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

const button = document.getElementById('icon-search');
button.addEventListener('click', function () {
    getData(search.value)
});

document.addEventListener("DOMContentLoaded", function() {
    getData('зима');
  const searchInput = document.getElementById("search-input");
  searchInput.autocomplete = "off";
  searchInput.focus();
  searchInput.value = '';

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      getData(search.value);
    }
  });
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    const searchInput = document.getElementById("search-input");
  searchInput.value = '';
});
