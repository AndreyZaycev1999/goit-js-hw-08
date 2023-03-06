import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
    return items
        .map(({preview, original, description}) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
    `;
    }).join(' ');
};

var lightbox = new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionsDelay: 250, });
