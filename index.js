// elements
const aboutlink = document.getElementById('aboutlink');
const featureslink = document.getElementById('featureslink');
const downloadlink = document.getElementById('downloadlink');
const sourcecodelink = document.getElementById('sourcecodelink');
const LINKS = [aboutlink, downloadlink, featureslink, sourcecodelink];
const DIVS = {};

// fetch divs
(function fetchdivs() {
    LINKS.forEach((link) => {
        DIVS[link.innerText] = document.getElementById(link.innerText);
    });
})();

// add link listeners
LINKS.forEach((link) => {
    link.addEventListener('click', (e) => {
        whitenAllLinks();
        for (const key in DIVS) {
            if (key === e.currentTarget.innerText) {
                reddenLink(e.currentTarget);
                DIVS[key].style.display = 'block';
            } else {
                DIVS[key].style.display = 'none';
            }
        }
    });
});

// redden link
function reddenLink(link) {
    link.classList.add('active');
}

// whiten links
function whitenAllLinks() {
    LINKS.forEach((link) => {
        link.classList.remove('active');
    });
}
