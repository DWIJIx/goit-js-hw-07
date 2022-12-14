import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulContiner = document.querySelector('.gallery')

const imgMarkup = galleryItem => 
    `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
    </a>
    `
const imagesMarkup = galleryItems.map(imgMarkup).join('')
// console.log(imagesMarkup)

ulContiner.insertAdjacentHTML('beforeend', imagesMarkup)

ulContiner.addEventListener('click', onUlContainerClick)

function onUlContainerClick(evt) {
    evt.preventDefault()

    if (!evt.target.classList.contains('gallery__image')) {
      return;
  }

    var lightbox = new SimpleLightbox('.gallery a',
        { 
            showCounter: false,
            captionsData: 'alt',
            captionDelay: 250
    });
}


