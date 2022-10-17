/**
 * @description: 图片弹窗
 * @param {number} imgid   //开始值
 * @param {string[]} imgsUrl  //图片数组
 * @return {this}
 */
class appPopupImgBox {
    constructor(imgid = 0, imgsUrl) {
        $("#app-imgBox").remove()
        $("html>body").append(
            `<div id="app-imgBox"><style>#app-imgBox *{margin:0;padding:0;box-sizing:border-box}#app-imgBox{z-index:200;user-select:none;position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden;background:rgba(0,0,0,0.3);backdrop-filter:blur(3px);color:#fff}#app-imgBox .icon{z-index:205;position:absolute;top:90vh;left:0vw;width:35px;height:35px;cursor:pointer;transition:all 0.2s;color:#e7e5e5;opacity:0.6;background:rgba(0,0,0,0.3);border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,0.2)}#app-imgBox .icon:hover{transform:scale(1.1);opacity:1}#app-imgBox .icon svg path{fill:#fff}#app-imgBox .icon.close-circle{top:2vw;left:inherit;right:2vw;width:40px;height:40px}#app-imgBox .icon.left-circle{top:50vh;left:2vw;width:40px;height:40px}#app-imgBox .icon.right-circle{top:50vh;left:inherit;right:2vw;width:40px;height:40px}#app-imgBox .iconBox{position:absolute;width:300px;height:45px;bottom:5vh;left:50%;transform:translateX(-50%);display:flex;justify-content:space-around;align-items:center;border-radius:22px;background:rgba(0,0,0,0.3);padding:0 10px;transition:all 0.3s;box-shadow:0 0 6px rgba(0,0,0,0.3)}#app-imgBox .iconBox:hover{transform:translateX(-50%) scale(1.05)}#app-imgBox .iconBox .icon{position:initial;background:rgba(0,0,0,0);box-shadow:0 0 4px rgba(0,0,0,0)}#app-imgBox .imagesBox{position:absolute;transform:scale(1) rotate(0deg) translate(-50%,-50%);top:50%;left:50%}#app-imgBox .imagesBox img{height:100vh;display:block;margin:0 auto;transition:all 0.4s}#app-imgBox .imagesBox img.w{width:100vw;height:auto}#app-imgBox .sync-circle{position:fixed;top:0;left:0;width:100%;height:100%;z-index:206;background-color:#fff0;box-shadow:0 0 0 #fff0;opacity:1;background:rgba(0,0,0,0.3);backdrop-filter:blur(3px)}#app-imgBox .sync-circle svg{width:35px;height:35px;transition:all 0.2s;color:#e7e5e5;animation:circle 1.5s linear infinite;transform:rotate(0deg) scale(2);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}#app-imgBox .sync-circle svg path{fill:#fff}@keyframes circle{0%{transform:rotate(0deg) scale(2)}100%{transform:rotate(360deg) scale(2)}}</style><div class="sync-circle"><svg t="1665746365824"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="8884"><path d="M964.388184 477.340047a72.848985 72.848985 0 0 1 22.16189 53.612757c0 20.991625-7.387297 38.691881-22.16189 53.612757a72.044428 72.044428 0 0 1-53.466474 22.16189c-20.845342 0-38.618739-7.460438-53.612757-22.16189a72.848985 72.848985 0 0 1-22.16189-53.612757c0-20.991625 7.387297-38.691881 22.16189-53.612757a72.848985 72.848985 0 0 1 53.612757-22.161889c20.7722 0 38.765022 7.460438 53.466474 22.161889m-99.911359 348.885199a73.141551 73.141551 0 0 1-22.527598 53.393332 72.995268 72.995268 0 0 1-53.393332 22.527598c-20.991625 0-38.618739-7.460438-53.612757-22.16189a72.848985 72.848985 0 0 1-22.16189-53.612757c0-20.991625 7.460438-38.618739 22.16189-53.612757a72.848985 72.848985 0 0 1 53.612757-22.16189c20.991625 0 38.691881 7.460438 53.612757 22.16189a72.410136 72.410136 0 0 1 22.308173 53.466474m56.904127-590.179175c0 36.717059-13.019196 68.094784-39.13073 93.913751a128.070856 128.070856 0 0 1-93.621185 38.691881c-36.643917 0-68.021642-12.946055-93.913752-38.691881a127.924573 127.924573 0 0 1-38.618739-93.913751c0-36.351351 12.946055-67.582793 38.618739-93.621186a127.924573 127.924573 0 0 1 93.986893-39.13073c36.351351 0 67.582793 13.092338 93.548044 39.203872 26.111534 25.818968 39.13073 57.05041 39.13073 93.548044m-374.192175 658.566525a72.848985 72.848985 0 0 1 22.088748 53.612757c0 20.991625-7.387297 38.691881-22.088748 53.612757a72.848985 72.848985 0 0 1-53.685899 22.16189c-20.991625 0-38.618739-7.460438-53.612757-22.16189a72.410136 72.410136 0 0 1-22.16189-53.612757c0-20.991625 7.460438-38.618739 22.16189-53.612757a72.848985 72.848985 0 0 1 53.612757-22.16189c20.991625 0 38.765022 7.460438 53.685899 22.16189M574.251151 33.151408c22.088748 22.16189 33.206264 48.931698 33.206264 80.675131 0 31.743433-11.117516 58.366958-33.206264 80.601989a109.566043 109.566043 0 0 1-80.60199 33.133123c-31.743433 0-58.366958-11.117516-80.601989-33.133123a109.346619 109.346619 0 0 1-33.206264-80.601989c0-31.743433 11.190657-58.366958 33.206264-80.675131A109.785468 109.785468 0 0 1 493.57602 0.018285c31.59715 0 58.366958 11.117516 80.601989 33.133123M252.208901 772.612489a72.848985 72.848985 0 0 1 22.088749 53.612757c0 20.991625-7.387297 38.691881-22.088749 53.685898a72.848985 72.848985 0 0 1-53.685898 22.088749 73.141551 73.141551 0 0 1-53.393332-22.527598 72.995268 72.995268 0 0 1-22.454457-53.393332c0-20.991625 7.387297-38.618739 22.088749-53.612757a72.848985 72.848985 0 0 1 53.685898-22.088748c20.991625 0 38.911305 7.387297 53.75904 22.235031M265.37438 168.975268c18.577954 18.577954 27.866931 40.959269 27.866931 66.92452 0 26.038392-9.288977 48.273424-27.866931 66.99766-18.577954 18.651096-40.959269 28.013214-66.99766 28.013214-25.965251 0-48.273424-9.215835-66.924519-27.940072a91.134373 91.134373 0 0 1-27.866931-66.924519c0-25.965251 9.215835-48.273424 27.866931-66.92452 18.724237-18.724237 40.959269-27.940072 66.924519-27.940072 26.038392 0 48.273424 9.215835 66.99766 27.793789M129.98937 477.340047a72.848985 72.848985 0 0 1 22.161889 53.612757c0 20.991625-7.460438 38.691881-22.161889 53.612757a72.190711 72.190711 0 0 1-53.612757 22.16189c-20.991625 0-38.691881-7.460438-53.612757-22.16189A72.190711 72.190711 0 0 1 0.601966 531.025946c0-20.991625 7.460438-38.691881 22.16189-53.612757a72.848985 72.848985 0 0 1 53.612757-22.16189c20.991625 0 38.765022 7.460438 53.612757 22.16189"p-id="8885"></path></svg></div><div class="imagesBox"><img src=""alt=""/></div><div class="icons"><!--关闭--><div class="icon close-circle"><svg t="1665733558132"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="7419"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"p-id="7420"fill="#777777"></path></svg></div><!--左--><div class="icon left-circle"><svg t="1665733650928"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="7766"><path d="M603.3 327.5l-246 178c-4.4 3.2-4.4 9.7 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"p-id="7767"fill="#777777"></path></svg></div><!--右--><div class="icon right-circle"><svg t="1665733702412"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="8124"><path d="M666.7 505.5l-246-178c-5.3-3.8-12.7-0.1-12.7 6.5v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"p-id="8125"fill="#777777"></path></svg></div><div class="iconBox"><!--缩小--><div class="icon plus-circle"><svg t="1665733814859"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="8327"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"p-id="8328"fill="#777777"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"p-id="8329"fill="#777777"></path></svg></div><!--放大--><div class="icon minus-circle"><svg t="1665733875639"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="8530"><path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"p-id="8531"fill="#777777"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"p-id="8532"fill="#777777"></path></svg></div><!--缩放--><div class="icon expend-circle"><svg t="1665733982093"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="8733"><path d="M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM920 664h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z"p-id="8734"fill="#777777"></path></svg></div><!--左--><div class="icon undo-circle"><svg t="1665734136839"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="8935"><path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-0.3 13 6.3 12.9l167-0.8c5.2 0 9-4.9 7.7-9.9L369.8 727c-1.6-6.5-10-8.3-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-7.5 7.5-15.3 14.5-23.4 21.2-3.4 2.8-3.9 7.7-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"p-id="8936"fill="#777777"></path></svg></div><!--右--><div class="icon redo-circle"><svg t="1665734186268"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="9137"><path d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-9.3 9.3-19.1 18-29.3 26L668.2 724c-4.1-5.3-12.5-3.5-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 0.8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"p-id="9138"></path></svg></div></div></div></div>`
        )
        this.imgsUrl = imgsUrl
        this.imgsIndanx = imgid
        this.appImgBox = $("#app-imgBox")
        this.imagesBoxImg = $("#app-imgBox .imagesBox img")
        this.setInterval = null
        this.scale = 1
        this.rotate = 0
        this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0])
        this.BindEvent()
    }
    BindEvent() {
        var _this = this
        $("#app-imgBox .icon.close-circle").click(function () {
            _this.closeCircle()
        })
        $("#app-imgBox .icon.left-circle").click(function () {
            _this.leftCircle()
        })
        $("#app-imgBox .icon.right-circle").click(function () {
            _this.rightCircle()
        })
        $("#app-imgBox .icon.plus-circle").on({
            click: function () {
                _this.scale += 0.05
                _this.ReloadImg()
            },
        })
        $("#app-imgBox .icon.minus-circle").on({
            click: function () {
                _this.scale -= 0.05
                _this.ReloadImg()
            },
        })
        $("#app-imgBox .icon.expend-circle").click(function () {
            _this.scale = 1
            _this.rotate = 0
            _this.ReloadImg()
        })
        $("#app-imgBox .icon.undo-circle").click(function () {
            _this.rotate -= 15
            _this.ReloadImg()
        })
        $("#app-imgBox .icon.redo-circle").click(function () {
            _this.rotate += 15
            _this.ReloadImg()
        })
    }
    closeCircle() {
        $(this.appImgBox).animate({ opacity: 0 }, 500, function () {
            $("#app-imgBox").remove()
        })
    }
    leftCircle() {
        if (this.imgsIndanx > 0) {
            this.imgsIndanx--
            this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0])
        }
    }
    rightCircle() {
        if (this.imgsIndanx < this.imgsUrl.length - 1) {
            this.imgsIndanx++
            this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0])
        }
    }
    imgLoad(id, img) {
        let _this = this
        let _syncCircle = $("#app-imgBox  .sync-circle")
        $(this.imagesBoxImg).stop().animate({ opacity: 0 }, 100).attr({ src: _this.imgsUrl[id] })
        $(_syncCircle).stop().show().animate({ opacity: 1 }, 100)
        let timer = setInterval(function () {
            if (img.complete) {
                $(_syncCircle)
                    .stop()
                    .animate({ opacity: 0 }, 100, function () {
                        if ($(_this.imagesBoxImg).width() > $(window).width()) {
                            $(_this.imagesBoxImg).addClass("w")
                        } else {
                            $(_this.imagesBoxImg).removeClass("w")
                        }
                    })
                    .hide()
                _this.scale = 1
                _this.rotate = 0
                _this.ReloadImg()
                clearInterval(timer)
            }
        }, 500)
    }
    ReloadImg() {
        let _this = this
        $(this.imagesBoxImg)
            .attr({ style: `transform:scale(${_this.scale})rotate(${_this.rotate}deg);` })
            .stop()
            .animate({ opacity: 1 }, 100)
    }
}
