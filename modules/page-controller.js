const PAGES = {
    about: document.getElementById('about'),
    features: document.getElementById('features'),
    download: document.getElementById('download'),
};

export class PageController {
    constructor() {
        this.links = document.getElementsByClassName('link');
        this.addLinkListeners();
        this.goToPage('about');
    }

    addLinkListeners() {
        for (const link of this.links) {
            link.addEventListener('click', () => {
                this.goToPage(link.getAttribute('data-to'));
                this.setAllLinksInactive();
                this.setLinkActive(link);
            });
        }
    }

    setLinkActive(link) {
        link.classList.add('active');
    }

    setAllLinksInactive() {
        for (const link of this.links) {
            link.classList.remove('active');
        }
    }

    goToPage(destination) {
        for (const key in PAGES) {
            if (destination === key) {
                PAGES[key].style.display = 'block';
            } else {
                PAGES[key].style.display = 'none';
            }
        }
    }
}
