(function (global, factory) {
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
        href: '//at.alicdn.com/t/c/font_3744158_oepzxhayz.css',
    });

    //暴露类
    global.PopupImgsBox = factory()
    console.log(PopupImgsBox)
    console.log(new PopupImgsBox)
})(window, (function () {
    let IMG = undefined
    class PopupImgsBox {
        constructor() {
            this.images = IMG
        }
        // static
        Init() {
            console.log(1111)
        }
    }
    return PopupImgsBox
}));