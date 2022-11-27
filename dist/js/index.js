//images
var images = document.querySelectorAll('.item');
var mainImage = document.querySelector('#main-image');
var modal = document.querySelector('.image-modal');
var imageDiv = document.querySelector('.image-container');
var modalImage = document.querySelector('.modal-image');
var prevBtn = document.querySelector('.btn-left');
var nxtBtn = document.querySelector('.btn-right');
var selectedImageIndex;
// get selected image
images.forEach(function (image, i) {
    //click event handler
    image.addEventListener('click', function (e) {
        images.forEach(function (img) { return img.classList.remove('active-item'); });
        var target = e.target;
        target.classList.add('active-item');
        mainImage.src = target.src;
        mainImage.setAttribute('data-id', "".concat(i + 1));
        selectedImageIndex = i;
    });
});
mainImage.addEventListener('click', function (e) {
    modal.style.display = 'block';
    var target = e.target;
    var dataID = target.getAttribute('data-id');
    selectedImageIndex = Number(dataID) || 0;
    var src = target.src;
    var alt = target.alt;
    modalImage.src = src;
    modalImage.alt = alt;
});
window.addEventListener('click', function (event) {
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
    var selectedImage = images[selectedImageIndex];
    modalImage.src = selectedImage.src;
    modalImage.alt = selectedImage.alt;
}
function goNext() {
    selectedImageIndex++;
    if (selectedImageIndex && selectedImageIndex === images.length) {
        selectedImageIndex = 0;
    }
    var selectedImage = images[selectedImageIndex];
    modalImage.src = selectedImage.src;
    modalImage.alt = selectedImage.alt;
}
