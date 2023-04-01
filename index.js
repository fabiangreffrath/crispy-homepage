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
        for (const key in DIVS) {
            if (key === e.currentTarget.innerText) {
                DIVS[key].style.display = 'block';
            } else {
                DIVS[key].style.display = 'none';
            }
        }
    });
});
