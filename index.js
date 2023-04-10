import { PageController } from './modules/PageController.js';
import { ModalController } from './modules/ModalController.js';
import { BackgroundController } from './modules/BackgroundController.js';
import { ElementController } from './modules/ElementController.js';
import { PageBuilder } from './modules/PageBuilder.js';

// get scattered html content & generate pages
await PageBuilder.buildMainPages();

// main content & navbar loader
const pageController = new PageController();

// modal images
const modalController = new ModalController();

// random pixelated background
const backgroundController = new BackgroundController();

// page elements, such as toggle-buttons
const elementController = new ElementController();
