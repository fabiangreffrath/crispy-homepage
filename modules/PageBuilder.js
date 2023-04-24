const md = window.marked;

const CHEATS_URL = 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/cheats.md';
const PARAMS_URL = 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/params.md';
const CRISPNESS_URL = 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/crispness.md';
const COMPATIBILITY_URL = 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/compatibility.md';

export class PageBuilder {
    static async buildPages() {
        // stitch local page stogether
        await this.stitchPages();

        // fetch from crispy-doom repo
        await this.fetchCheats();
        await this.fetchParams();
        await this.fetchCrispness();
        await this.fetchCompatibility();
    }

    static async stitchPages() {
        let res;
        res = await fetch('./pages/about.html');
        document.getElementById('about').innerHTML = await res.text();

        // usage page
        res = await fetch('./pages/usage.html');
        document.getElementById('usage').innerHTML = await res.text();

        // download page
        res = await fetch('./pages/download.html');
        document.getElementById('download').innerHTML = await res.text();
    }

    static async fetchCheats() {
        const res = await fetch(CHEATS_URL);
        document.getElementById('cheats').innerHTML = md.parse(await res.text());
    }

    static async fetchParams() {
        const res = await fetch(PARAMS_URL);
        document.getElementById('params').innerHTML = md.parse(await res.text());
    }

    static async fetchCrispness() {
        const res = await fetch(CRISPNESS_URL);
        document.getElementById('crispness-menu').innerHTML = md.parse(await res.text());
    }

    static async fetchCompatibility() {
        const res = await fetch(COMPATIBILITY_URL);
        document.getElementById('compatibility').innerHTML = md.parse(await res.text());
    }
}
