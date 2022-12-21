(function (window, PopupImgsBox) {
    //初始化
    //动态添加标签
    const addHtmlTag = (Element, dad = "html", set = {}, text = '') => {
        let create = document.createElement(Element)
        if (text != '') create.outerHTML = text
        for (let key in set) {
            create.setAttribute(key, set[key])
        }
        document.querySelector(dad).appendChild(create)
    }
    addHtmlTag('link', 'html', {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/c/font_3744158_yul2iukvz89.css',
    });

    //暴露类
    window.PopupImgsBox = PopupImgsBox()
})(window, (function () {
    class PopupImgsBox {
        constructor() {
        }

        Init() {
            console.log(1111)
        }
    }
    return PopupImgsBox
}));
let a = new PopupImgsBox()
a.Init()