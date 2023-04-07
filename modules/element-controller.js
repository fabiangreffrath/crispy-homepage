export class ElementController {
    constructor() {
        this.showMoreButtons = document.getElementsByClassName('show-more-button');
        this.addShowMoreListeners();
    }

    addShowMoreListeners() {
        for (const showMoreButton of this.showMoreButtons) {
            showMoreButton.addEventListener('click', () => {
                document.getElementById(showMoreButton.getAttribute('data-div')).style.display = 'block';
                showMoreButton.style.display = 'none';
            });
        }
    }
}
