const PAGES = {
    about: document.getElementById('about'),
    usage: document.getElementById('usage'),
    download: document.getElementById('download'),
    help: document.getElementById('help'),
};

export class PageController {
    constructor() {
        this.links = document.getElementsByClassName('link');
        this.activePage = 'about'; // starting page
        this.addLinkListeners();
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
