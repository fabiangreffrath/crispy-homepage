export class PageBuilder {
    static async buildMainPages() {
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
}
