export async function stitchPages() {
    let res;

    // about page
    res = await fetch('./pages/about.html');
    document.getElementById('about').innerHTML = await res.text();

    // usage page
    res = await fetch('./pages/usage.html');
    document.getElementById('usage').innerHTML = await res.text();

    // download page
    res = await fetch('./pages/download.html');
    document.getElementById('download').innerHTML = await res.text();
}

// min & max are inclusive
export function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
