import { PageController } from './modules/PageController.js';
import { ModalController } from './modules/ModalController.js';
import { BackgroundController } from './modules/BackgroundController.js';
import { ElementController } from './modules/ElementController.js';
import { PageBuilder } from './modules/PageBuilder.js';

await PageBuilder.buildMainPages();
const pageController = new PageController();
const modalController = new ModalController();
const backgroundController = new BackgroundController();
const elementController = new ElementController();
