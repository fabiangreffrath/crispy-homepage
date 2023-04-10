const SHOW_TEXT = '\u2965 Show more...';
const HIDE_TEXT = '\u2963 Collapse';

export class ElementController {
    constructor() {
        this.toggleButtons = document.getElementsByClassName('toggle-button');
        this.addToggleButtonsListeners();
    }

    addToggleButtonsListeners() {
        for (const toggleButton of this.toggleButtons) {
            toggleButton.innerText = SHOW_TEXT;
            toggleButton.addEventListener('click', () => {
                const divStyle = document.getElementById(toggleButton.getAttribute('data-div')).style;

                divStyle.display = divStyle.display === 'block' ? 'none' : 'block';
                toggleButton.innerText = divStyle.display === 'block' ? HIDE_TEXT : SHOW_TEXT;
            });
        }
    }
}
