//images
const images = document.querySelectorAll(
  '.item'
)! as unknown as HTMLImageElement[];
const mainImage = document.querySelector('#main-image')! as HTMLImageElement;
const modal = document.querySelector('.image-modal')! as HTMLDivElement;
const imageDiv = document.querySelector('.image-container')! as HTMLDivElement;
const modalImage = document.querySelector('.modal-image')! as HTMLImageElement;
const prevBtn = <HTMLButtonElement>document.querySelector('.btn-left')!;
const nxtBtn = <HTMLButtonElement>document.querySelector('.btn-right')!;
let selectedImageIndex: number;

// get selected image
images.forEach((image, i) => {
  //click event handler
  image.addEventListener('click', e => {
    images.forEach(img => img.classList.remove('active-item'));
    const target = e.target as HTMLImageElement;
    target.classList.add('active-item');
    mainImage.src = target.src;
    mainImage.setAttribute('data-id', `${i + 1}`);
    selectedImageIndex = i;
  });
});

mainImage.addEventListener('click', e => {
  modal.style.display = 'block';
  const target = e.target as HTMLImageElement;
  const dataID = target.getAttribute('data-id');
  selectedImageIndex = Number(dataID) || 0;
  const src = target.src;
  const alt = target.alt;
  modalImage.src = src;
  modalImage.alt = alt;
});

window.addEventListener('click', event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

prevBtn.addEventListener('click', goPrevious);
nxtBtn.addEventListener('click', goNext);

function goPrevious() {
  selectedImageIndex--;
  if (selectedImageIndex && selectedImageIndex < 0) {
    selectedImageIndex = images.length - 1;
  }
  const selectedImage = images[selectedImageIndex];
  modalImage.src = selectedImage.src;
  modalImage.alt = selectedImage.alt;
}

function goNext() {
  selectedImageIndex++;

  if (selectedImageIndex && selectedImageIndex === images.length) {
    selectedImageIndex = 0;
  }

  const selectedImage = images[selectedImageIndex];
  modalImage.src = selectedImage.src;
  modalImage.alt = selectedImage.alt;
}
