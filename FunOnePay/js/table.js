$(document).ready(function () {
  $(".dataTable").each(function () {
    var $table = $(this);

    // 從 data-* 讀取固定欄位數，若無設定則為0
    var fixedLeft = parseInt($table.data("fixed-left")) || 0;
    var fixedRight = parseInt($table.data("fixed-right")) || 0;

    // 讀取 rowReorder 開關，字串 "true" 或 boolean true 都視為 true
    var rowReorder = $table.data("rowreorder");
    rowReorder = rowReorder === true || rowReorder === "true";

    var dtInstance = $table.DataTable({
      scrollX: true,
      order: [],
      pageLength: 50,
      rowReorder: rowReorder,
      fixedColumns: {
        leftColumns: fixedLeft,
        rightColumns: fixedRight,
      },
      layout: {
        topStart: null,
        topEnd: null,
        bottomStart: null,
        bottomEnd: {
          paging: {
            buttons: 7,
          },
        },
      },
      language: {
        emptyTable: `<div>查詢無結果</div>`,
        zeroRecords: `<div>資料讀取失敗，請縮小範圍或再試一次。</div>`,
      },
      columnDefs: [{ targets: "_all", orderable: false, type: "string" }],
      initComplete: function () {
        var $wrapper = $table.closest(".dt-container");
        var $scroller = $wrapper.find(".dt-scroll-body, .dt-scroll-head");
        var $headTable = $wrapper.find(".dt-scroll-head table.dataTable");

        // 自動判斷是否要變成抓取手勢光標
        function updateCursorGrab() {
          var scroller = $scroller.get(0);
          var hasScrollbar = scroller.scrollWidth > $(scroller).innerWidth();
          if (hasScrollbar) {
            $scroller.css("cursor", "grab");
          } else {
            $scroller.css("cursor", "default");
          }
        }
        updateCursorGrab();
        $(window).on("resize", updateCursorGrab);

        // 拖曳手勢拖動橫向滾動
        var isDown = false,
          startX = 0,
          scrollLeft = 0;
        $scroller.on("mousedown", function (e) {
          var scroller = $scroller.get(0);
          if (scroller.scrollWidth <= $(scroller).innerWidth()) return;
          isDown = true;
          $scroller.addClass("grabbing").css("cursor", "grabbing");
          startX = e.pageX - $scroller.offset().left;
          scrollLeft = $scroller.scrollLeft();
          e.preventDefault();
        });
        $(document).on("mouseup", function () {
          if (!isDown) return;
          isDown = false;
          updateCursorGrab();
          $scroller.removeClass("grabbing");
        });
        $scroller.on("mouseleave", function () {
          if (!isDown) return;
          isDown = false;
          updateCursorGrab();
          $scroller.removeClass("grabbing");
        });
        $scroller.on("mousemove", function (e) {
          if (!isDown) return;
          e.preventDefault();
          var x = e.pageX - $scroller.offset().left;
          var walk = x - startX;
          $scroller.scrollLeft(scrollLeft - walk);
        });
      },
    });
  });
});
