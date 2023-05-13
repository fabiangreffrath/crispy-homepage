const md = window.marked;

const CONTENT_TO_FETCH = [
    {
        element: 'cheats',
        url: 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/cheats.md',
    },
    {
        element: 'params',
        url: 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/params.md',
    },
    {
        element: 'crispness-menu',
        url: 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/crispness.md',
    },
    {
        element: 'compatibility',
        url: 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/compatibility.md',
    },
    {
        element: 'controls',
        url: 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/controls.md',
    },
    {
        element: 'faq',
        url: 'https://raw.githubusercontent.com/fabiangreffrath/crispy-doom/master/docs/faq.md',
    },
];

export class PageBuilder {
    static async buildPages() {
        // stitch local page stogether
        await this.stitchPages();

        // fetch from crispy-doom repo
        await this.fetchContent();
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

        // help page
        res = await fetch('./pages/help.html');
        document.getElementById('help').innerHTML = await res.text();
    }

    static async fetchContent() {
        CONTENT_TO_FETCH.forEach(async (content) => {
            const res = await fetch(content.url);
            document.getElementById(content.element).innerHTML = md.parse(await res.text());
        });
    }
}
