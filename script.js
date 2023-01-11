function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please Check "${selection}" selector, no such element exists`
    );
}

class Gallery {
    constructor(element) {
        this.container = element;
        this.list = [...element.querySelectorAll('.img')];
        //target
        this.modal = getElement('.modal');
        this.modalImg = getElement('.main-img');
        this.imageName = getElement('.image-name');
        this.modalImages = getElement('.modal-images');
        this.closeBtn = getElement('.close-btn');
        this.nextBtn = getElement('.next-btn');
        this.prevBtn =  getElement('.prev-btn');
        //self ref
        //let self = this
        //bind functions
        //this.openModal =  this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
        // container event
        this.container.addEventListener('click',
        function(e) {
            //slef.openModal();
            if (e.target.classList.contains('img')) {
                this.openModal(e.target, this.list);
            }
        }.bind(this)
        );
    }
    openModal(selectImage, list) {
        this.setMainImage(selectImage);
        this.modalImage.innerHTML = list
        .map(function (image) {
            return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${slectedImage.dataset.id === image.datset.id ? 'modal-img selected' : 'modal-img'}">`;
        })
        .join('');
        this.modal.classList.add('open');
        this.closeBtn.addEventListener('click', this.closeModal);
        this.nextBtn.addEventListener('click', this.nextImage);
        this.prevBtn.addEventListener('click', this.prevImage);
        this.modalImages.addEventListener('click', this.chooseImage);
    }

    setMainImage(selectedImage) {
        this.modalImg.src = selectedImage.src;
        this.imageName.textContent = selectedImage.title;
    }

    closeModal() {
        this.modal.classList.remove('open');
    }
}