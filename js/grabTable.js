$(document).ready(function () {
  const $slider = $(".grabTable > div > div");

  function checkOverflowAndInitGrab() {
    $slider.each(function () {
      const el = this;

      // 判斷是否出現橫向捲軸（內容超過可視寬度）
      if (el.scrollWidth > el.clientWidth) {
        $(el).addClass("grabable");

        // 套用滑鼠拖曳橫向捲動
        let isDown = false;
        let startX;
        let scrollLeft;

        $(el).off("mousedown mouseleave mouseup mousemove"); // 先移除舊的事件避免重複綁定

        $(el).on("mousedown", function (e) {
          isDown = true;
          $(this).addClass("active");
          startX = e.pageX - this.offsetLeft;
          scrollLeft = this.scrollLeft;
        });

        $(el).on("mouseleave mouseup", function () {
          isDown = false;
          $(this).removeClass("active");
        });

        $(el).on("mousemove", function (e) {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - this.offsetLeft;
          const walk = (x - startX) * 1; // 可調整速度
          this.scrollLeft = scrollLeft - walk;
        });
      } else {
        $(el).removeClass("grabable");
        $(el).off("mousedown mouseleave mouseup mousemove"); // 移除滑鼠事件
      }
    });
  }

  checkOverflowAndInitGrab();

  // 若表格是動態載入的，也可加上 resize 監聽或重複呼叫 checkOverflowAndInitGrab()
  $(window).on("resize", function () {
    checkOverflowAndInitGrab();
  });
});
