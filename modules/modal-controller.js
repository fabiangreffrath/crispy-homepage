const MODALDIV = document.getElementById('modal');
const MODALIMAGE = document.getElementById('modal-image-placeholder');

export class ModalController {
    constructor() {
        this.addCloseModalListener();
        this.addOpenModalListeners();
    }

    addCloseModalListener() {
        MODALDIV.addEventListener('click', () => {
            MODALDIV.style.display = 'none';
        });
    }

    addOpenModalListeners() {
        const images = document.getElementsByClassName('modal-image');
        for (const image of images) {
            image.addEventListener('click', () => {
                this.openModal(image);
            });
        }
    }

    openModal(e) {
        if (window.innerWidth < 600) {
            return;
        }
        MODALIMAGE.src = e.src;
        MODALDIV.style.display = 'block';
    }
}
