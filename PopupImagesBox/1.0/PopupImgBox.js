/**
 * @description: 图片弹窗
 * @param {number} imgid   //开始值
 * @param {string[]} imgsUrl  //图片数组
 * @return {this}
 */

class appPopupImgBox {
    constructor(imgid = 0, imgsUrl) {
        this.appImgBox = $('#app-imgBox');

        this.imgsUrl = imgsUrl;
        this.imgsUrlLoad = new Array(imgsUrl.length);
        this.imgsIndanx = imgid;
        this.imagesBox = $('#app-imgBox .imagesBox');
        this.imagesBoxImg = $('#app-imgBox .imagesBox img');
        this.imagesScale = $('#app-imgBox .imagesBox .imagesScale');
        this.imagesBoxImgTop = 0;
        this.imagesBoxImgLeft = 0;
        this.setInterval = null;
        this.scale = 0.9;
        this.rotate = 0;
        $('#app-imgBox  .sync-circle').hide();
        $(this.appImgBox).hide();
        $(this.appImgBox)
            .show()
            .animate({ opacity: 1 }, 100, function () {});
        this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0]);
        this.BindEvent();
        console.log(this);
    }
    BindEvent() {
        var _this = this;
        $('#app-imgBox .icon.close-circle').click(function () {
            _this.closeCircle();
        });
        $('#app-imgBox .icon.left-circle').click(function () {
            _this.leftCircle();
        });
        $('#app-imgBox .icon.right-circle').click(function () {
            _this.rightCircle();
        });
        $('#app-imgBox .icon.plus-circle').on({
            click: function () {
                _this.scale += 0.05;
                _this.ReloadImg();
            },
        });
        $('#app-imgBox .icon.minus-circle').on({
            click: function () {
                _this.scale -= 0.05;
                _this.ReloadImg();
            },
        });
        $('#app-imgBox .icon.expend-circle').click(function () {
            _this.scale = 0.9;
            _this.rotate = 0;
            _this.imagesBoxImgTop = 0;
            _this.imagesBoxImgLeft = 0;
            _this.ReloadImg();
        });
        $('#app-imgBox .icon.undo-circle').click(function () {
            _this.rotate -= 15;
            _this.ReloadImg();
        });
        $('#app-imgBox .icon.redo-circle').click(function () {
            _this.rotate += 15;
            _this.ReloadImg();
        });
        // 取消默认事件
        document.getElementsByTagName('body')[0].ondragstart = function () {
            window.event.returnValue = false;
            return false;
        };
        // 图片移动
        _this.imagesBoxImg[0].onmousedown = function (e) {
            //先计算出鼠标按下那一刻，鼠标在图片上的位置
            const OE = e || event;
            const disX =
                OE.clientX - _this.imagesBoxImg[0].offsetLeft * _this.scale;
            const disY =
                OE.clientY - _this.imagesBoxImg[0].offsetTop * _this.scale;
            document.onmousemove = function (e) {
                _this.imagesBoxImgLeft = (e.clientX - disX) / _this.scale;
                _this.imagesBoxImgTop = (e.clientY - disY) / _this.scale;
                $(_this.imagesBoxImg)
                    .css({
                        top: _this.imagesBoxImgTop,
                        left: _this.imagesBoxImgLeft,
                    })
                    .stop()
                    .animate({ opacity: 1 }, 100);
            };
        };
        // 鼠标放开初始化
        document.onmouseup = function (e) {
            document.onmousedown = null;
            document.onmousemove = null;
        };
        // 鼠标滚轮
        document.onwheel = (e) => {
            let delta = e.wheelDelta && (e.wheelDelta > 0 ? 1 : -1);
            if (delta > 0) {
                _this.scale += 0.1;
                _this.ReloadImg();
            } else {
                _this.scale -= 0.1;
                _this.ReloadImg();
            }
        };
    }
    debounce(fn, delay = 100) {
        let valid = true;
        if (!valid) {
            //休息时间 暂不接客
            return false;
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, delay);
    }
    closeCircle() {
        $(this.appImgBox).animate({ opacity: 0 }, 500, function () {
            $('#app-imgBox').hide();
        });
    }
    leftCircle() {
        console.log(this.imgsIndanx);
        if (this.imgsIndanx > 0) {
            this.imgsIndanx--;
            this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0]);
        }
    }
    rightCircle() {
        if (this.imgsIndanx < this.imgsUrl.length - 1) {
            this.imgsIndanx++;
            this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0]);
        }
    }
    imgLoad(id, img) {
        let _this = this;
        _this.imagesBoxImgTop = 0;
        _this.imagesBoxImgLeft = 0;
        let _syncCircle = $('#app-imgBox  .sync-circle');
        // 切换图片 切换加载状态
        if (_this.imgsUrlLoad[id] != 1) {
            $(_this.imagesScale)
                .stop()
                .animate({ opacity: 0 }, 100, function () {
                    $(_syncCircle).show();
                });
            $(_this.imagesBoxImg).attr({
                src: _this.imgsUrl[id],
            });
            let timer = setInterval(function () {
                if (img.complete) {
                    console.log(img.complete);
                    $(_syncCircle).hide();
                    _this.scale = 0.9;
                    _this.rotate = 0;
                    _this.imgsUrlLoad[id] = 1;
                    $(_this.imagesScale).css({
                        top: () => {
                            return $(window).height() / 2;
                        },
                        left: () => {
                            return $(window).width() / 2;
                        },
                    });
                    _this.ReloadImg();

                    clearInterval(timer);
                }
                console.log(img.complete);
            }, 10);
        } else {
            $(_this.imagesBoxImg).attr({
                src: _this.imgsUrl[id],
            });
            _this.scale = 0.9;
            _this.rotate = 0;

            _this.ReloadImg();
        }
    }
    ReloadImg() {
        let _this = this;
        if (_this.scale >= 4) _this.scale = 4;
        if (_this.scale <= 0.3) _this.scale = 0.3;

        this.debounce(function () {
            $(_this.imagesScale)
                .css({
                    transform: () => {
                        return `scale(${_this.scale})rotate(${_this.rotate}deg)`;
                    },
                })
                .stop()
                .animate({ opacity: 1 }, 100);
            $(_this.imagesBoxImg).css({
                top: _this.imagesBoxImgTop,
                left: _this.imagesBoxImgLeft,
            });
        }, 50);
    }
}
