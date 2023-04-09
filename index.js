import { PageController } from './modules/page-controller.js';
import { ModalController } from './modules/modal-controller.js';
import { BackgroundController } from './modules/background-controller.js';
import { ElementController } from './modules/element-controller.js';
import { stitchPages } from './modules/helpers.js';

await stitchPages();

const pageController = new PageController();
const modalController = new ModalController();
const backgroundController = new BackgroundController();
const elementController = new ElementController();
