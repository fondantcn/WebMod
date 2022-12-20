(function () {
    const addHtmlTag = (Element, dad = "html", set = {}, text = '') => {
        let create = document.createElement(Element)
        create.innerHTML = text
        for (let key in set) {
            create.setAttribute(key, set[key])
        }
        document.querySelector(dad).appendChild(create)
    }
    addHtmlTag('link', 'html', {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/c/font_3744158_yul2iukvz89.css',
    });
    addHtmlTag('script', 'html', {
        src: 'https://cdn.jsdelivr.net/npm/jquery@3.6.2/dist/jquery.min.js',
    });
})();
