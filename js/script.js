var link = document.querySelector(".btn-search");
var open = document.querySelector(".search-form");

var myMap;

link.addEventListener("click", function(event) {
  event.preventDefault();
  
  if (open.classList.contains("form-open")) {
    open.classList.remove("form-open");
    open.classList.add("form-close");
  }
  else {
    open.classList.remove("form-close");
    open.classList.add("form-open");
  }
});

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [34.865966, -111.763806], // Sedona
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
}