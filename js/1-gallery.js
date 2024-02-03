import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  // ... (ваш массив данных об изображениях)
];

const galleryContainer = document.querySelector('ul.gallery');
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

images.forEach((image) => {
  const item = document.createElement('li');
  item.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;

  link.appendChild(img);
  item.appendChild(link);
  galleryContainer.appendChild(item);
});

// Вам больше не нужен обработчик событий и код для него
