import { randomInRange } from './helpers.js';

const PIXELATEDBACKGROUND = document.getElementById('pixelated-background');
const LOWESTOFFSET = 300; // Y position at which opacity stops changing

// total number of image files in the assets/backgrounds folder
const NUMBEROFIMAGES = 7;

export class BackgroundController {
    constructor() {
        this.currentOpacity = 1;
        this.setRandomImage();
        this.setOpacity();
        this.addScrollListener();
    }

    setRandomImage() {
        const roll = randomInRange(1, NUMBEROFIMAGES);
        const backgroundImageString = `url("./assets/backgrounds/${roll}.png")`;
        PIXELATEDBACKGROUND.style.backgroundImage = backgroundImageString;
    }

    addScrollListener() {
        window.addEventListener('scroll', this.setOpacity);
    }

    setOpacity() {
        if (window.pageYOffset >= LOWESTOFFSET) {
            this.opacity = 0.5;
        } else {
            this.opacity = 1 - window.pageYOffset / (LOWESTOFFSET * 2);
        }
        PIXELATEDBACKGROUND.style.opacity = this.opacity;
    }
}
