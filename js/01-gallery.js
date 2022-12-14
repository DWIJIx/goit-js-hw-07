import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems[0].original);



/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const imgMarkup = galleryItem =>
`
<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>
`
// console.log(imgMarkup(galleryItems[0]))

const imagesMarkup = galleryItems.map(imgMarkup).join('')

console.log(imagesMarkup)

const divContiner = document.querySelector('.gallery')

divContiner.insertAdjacentHTML('afterbegin', imagesMarkup)