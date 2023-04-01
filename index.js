// elements
const aboutlink = document.getElementById('aboutlink');
const featureslink = document.getElementById('featureslink');
const downloadlink = document.getElementById('downloadlink');

const aboutdiv = document.getElementById('aboutdiv');
const featuresdiv = document.getElementById('featuresdiv');
const downloaddiv = document.getElementById('downloaddiv');

const LINKS = [aboutlink, featureslink, downloadlink];
const DIVS = [aboutdiv, featuresdiv, downloaddiv];

// set first link & page active
reddenLink(0);
showDivAtIndex(0);

// add link listeners
LINKS.forEach((link, index) => {
    link.addEventListener('click', () => {
        whitenAllLinks();
        reddenLink(index);
        showDivAtIndex(index);
    });
});

function showDivAtIndex(indexToShow) {
    DIVS.forEach((div, i) => {
        if (indexToShow === i) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

function reddenLink(index) {
    LINKS[index].classList.add('active');
}

function whitenAllLinks() {
    LINKS.forEach((link) => {
        link.classList.remove('active');
    });
}
