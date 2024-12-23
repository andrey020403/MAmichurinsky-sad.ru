// Функция для отображения выбранной секции
function showSection(sectionId) {
  // Скрываем все секции
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');

  // Показываем выбранную секцию
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Показываем первую секцию по умолчанию (О нас)
document.addEventListener('DOMContentLoaded', () => showSection('about'));

// Данные растений
const plants = [
  { name: 'Роза белая', image: 'images/РозаБелая.jpg' },
  { name: 'Роза красная', image: 'images/РозаКрасная.jpg' },
  { name: 'Тюльпан красный', image: 'images/ТюльпанКрасный.jpg' },
  { name: 'Пион белый', image: 'images/ПионБелый.jpg' },
  { name: 'Пион розовый', image: 'images/пионРозовый.jpg' },
  { name: 'Орхидея Фиолетовая', image: 'images/Орхидея Фиолетовая.jpg' },
  { name: 'Орхидея Белая', image: 'images/Орхидея Белая.jpg' },
  { name: 'Чёрная Смородина', image: 'images/ЧернаяСмородина.jpg' },
  { name: 'Белая смородина', image: 'images/Белая смородина.jpg' },
  { name: 'Красная Смородина', image: 'images/красная смородина.jpg' },
  { name: 'Клубника Сортовая - "Богатая"', image: 'images/Клубника.jpg' },
  { name: 'Малина Сортовая - "Русская"', image: 'images/МалинаРусская.jpg' },
];

// Функция для отображения списка растений
function displayPlants(filter = '') {
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = ''; // Очищаем контейнер

  // Фильтрация растений по имени
  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Динамическое добавление карточек растений
  filteredPlants.forEach(plant => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="plant-image">
      <p class="plant-name">${plant.name}</p>
    `;
    galleryGrid.appendChild(item);
  });
}

// Обработчик для кнопки поиска
document.getElementById('searchBtn').addEventListener('click', () => {
  const searchValue = document.getElementById('searchInput').value;
  displayPlants(searchValue); // Отображаем фильтрованные растения
});

// Показ всех растений при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  displayPlants(); // Показать все растения
});
