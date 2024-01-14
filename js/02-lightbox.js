import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItem(item) {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.dataset.source = item.original;
    image.alt = item.description;

    galleryItem.appendChild(link);
    link.appendChild(image);

    return galleryItem;
}
const gallery = document.querySelector(".gallery");
const galleryItemsElements = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsElements);

const options = {
  captionsData: "alt",
  captionsDelay: 250,
};
const lightbox = new SimpleLightbox(".gallery a", options);

    console.log(galleryItems);