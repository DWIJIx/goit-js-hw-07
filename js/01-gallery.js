import { galleryItems } from './gallery-items.js';


const divContiner = document.querySelector('.gallery')

const imgMarkup = ({preview, original, description}) =>
`
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
const imagesMarkup = galleryItems.map(imgMarkup).join('')

divContiner.insertAdjacentHTML('afterbegin', imagesMarkup)

divContiner.addEventListener('click', onDivContainerClick)


function onDivContainerClick(evt) {
  
  
  if (!evt.target.classList.contains('gallery__image')) {
      return;
  }
  
  evt.preventDefault()

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
  `, 
  /*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscButtonPress)
    },
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscButtonPress)
      }
   }
  )

  instance.show()
  
  function onEscButtonPress(e) {
   
    if (e.code === "Escape") {
      instance.close()
    } 
    
  }
}