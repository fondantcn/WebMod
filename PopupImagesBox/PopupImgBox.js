/**
 * @description: 图片弹窗
 * @param {number} imgid   //开始值
 * @param {string[]} imgsUrl  //图片数组
 * @return {this}
 */

class appPopupImgBox {
  constructor(imgid = 0, imgsUrl) {
    $(this.appImgBox).animate({ opacity: 0 }, 500, function () {
      $('#app-imgBox').hide();
    });
    $('#app-imgBox').show();
    this.imgsUrl = imgsUrl;
    this.imgsUrlLoad = new Array(imgsUrl.length);
    this.imgsIndanx = imgid;
    this.appImgBox = $('#app-imgBox');
    this.imagesBoxImg = $('#app-imgBox .imagesBox img');
    this.setInterval = null;
    this.scale = 1;
    this.rotate = 0;
    this.imgLoad(this.imgsIndanx, this.imagesBoxImg[0]);
    this.BindEvent();
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
      _this.scale = 1;
      _this.rotate = 0;
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
  }
  closeCircle() {
    $(this.appImgBox).animate({ opacity: 0 }, 500, function () {
      $('#app-imgBox').hide();
    });
  }
  leftCircle() {
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
    let _syncCircle = $('#app-imgBox  .sync-circle');
    // 切换图片 切换加载状态
    console.log(_this.imgsUrlLoad);
    if (_this.imgsUrlLoad[id] != 1) {
      $(_this.imagesBoxImg)
        .stop()
        .animate({ opacity: 0 }, 100, function () {
          $(_syncCircle).stop().show().animate({ opacity: 1 }, 100);
        })
        .attr({
          src: _this.imgsUrl[id],
        });

      let timer = setInterval(function () {
        if (img.complete) {
          $(_syncCircle)
            .stop()
            .animate({ opacity: 0 }, 100, function () {})
            .hide();
          _this.scale = 1;
          _this.rotate = 0;
          _this.imgsUrlLoad[id] = 1;
          _this.ReloadImg();
          clearInterval(timer);
        }
      }, 100);
    } else {
      $(_this.imagesBoxImg).attr({
        src: _this.imgsUrl[id],
      });
      _this.scale = 1;
      _this.rotate = 0;
      _this.ReloadImg();
    }
  }
  ReloadImg() {
    let _this = this;
    $(this.imagesBoxImg)
      .attr({
        style: `transform:scale(${_this.scale})rotate(${_this.rotate}deg);`,
      })
      .stop()
      .animate({ opacity: 1 }, 100);
  }
}
