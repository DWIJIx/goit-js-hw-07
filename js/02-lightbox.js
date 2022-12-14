import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulContiner = document.querySelector('.gallery')

const imgMarkup = ({preview, original, description}) => 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    `
const imagesMarkup = galleryItems.map(imgMarkup).join('')
// console.log(imagesMarkup)

ulContiner.insertAdjacentHTML('beforeend', imagesMarkup)

const lightbox = new SimpleLightbox('.gallery a',
        { 
            showCounter: false,
            captionsData: 'alt',
            captionDelay: 250
    });

ulContiner.addEventListener('click', onUlContainerClick)

function onUlContainerClick(evt) {
      if (!evt.target.classList.contains('gallery__image')) {
      return;
      }
    
    evt.preventDefault();

  
    
}


