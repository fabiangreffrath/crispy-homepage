// fetch elements from document
const aboutlink = document.getElementById('aboutlink');
const featureslink = document.getElementById('featureslink');
const downloadlink = document.getElementById('downloadlink');
const aboutdiv = document.getElementById('aboutdiv');
const featuresdiv = document.getElementById('featuresdiv');
const downloaddiv = document.getElementById('downloaddiv');

const PAGES = {
    about: {
        link: aboutlink,
        div: aboutdiv,
    },
    features: {
        link: featureslink,
        div: featuresdiv,
    },
    download: {
        link: downloadlink,
        div: downloaddiv,
    },
};

// go to a specific page. desination is a string
// that matches a key of the PAGES object
function goToPage(destination) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    for (const key in PAGES) {
        if (destination === key) {
            setLinkActive(PAGES[key].link);
            PAGES[key].div.style.display = 'block';
        } else {
            PAGES[key].div.style.display = 'none';
        }
    }
}

function setLinkActive(link) {
    // remove active state from all links
    for (const key in PAGES) {
        PAGES[key].link.classList.remove('active');
    }
    // set link as active
    link.classList.add('active');
}

// pixel-background transparency on scroll
let opacity = 1;
const lowestOffset = 300; // Y position at which opacity stops changing
window.addEventListener('scroll', () => {
    if (window.pageYOffset <= lowestOffset) {
        opacity = 1 - window.pageYOffset / (lowestOffset * 2);
    }
    document.getElementById('pixels').style.opacity = opacity;
});

// load about page on first load
goToPage('about');
