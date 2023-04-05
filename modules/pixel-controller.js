const PIXELBACKGROUND = document.getElementById('pixel-background');
const LOWESTOFFSET = 300; // Y position at which opacity stops changing

export class PixelController {
    constructor() {
        this.currentOpacity = 1;
        this.addScrollListener();
    }

    addScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset <= LOWESTOFFSET) {
                this.opacity = 1 - window.pageYOffset / (LOWESTOFFSET * 2);
            }
            PIXELBACKGROUND.style.opacity = this.opacity;
        });
    }
}
