(function () {
    const addHtmlTag = (Element, dad, set) => {
        let create = document.createElement(Element);
        for (let key in set) {
            create.setAttribute(key, set[key]);
        }
        document.querySelector(dad).appendChild(create);
    };
    addHtmlTag('link', 'html', {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/c/font_3744158_yul2iukvz89.css',
    });
})();
