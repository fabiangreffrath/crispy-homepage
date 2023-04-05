const PAGES = {
    about: document.getElementById('about'),
    features: document.getElementById('features'),
    download: document.getElementById('download'),
};

const STARTINGPAGE = 'about';

export class PageController {
    constructor() {
        this.links = document.getElementsByClassName('link');
        this.addLinkListeners();
        this.activePage = STARTINGPAGE;
        this.goToActivePage();
    }

    addLinkListeners() {
        for (const link of this.links) {
            link.addEventListener('click', () => {
                this.activePage = link.getAttribute('data-to');
                this.setActiveNavbarLink();
                this.goToActivePage();
            });
        }
    }

    setActiveNavbarLink() {
        for (const link of this.links) {
            if (link.getAttribute('data-to') === this.activePage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    }

    goToActivePage() {
        for (const key in PAGES) {
            if (this.activePage === key) {
                PAGES[key].style.display = 'block';
            } else {
                PAGES[key].style.display = 'none';
            }
        }
    }
}
