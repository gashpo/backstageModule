$(".dataTable").DataTable({
  scrollX: true,
  // 表頭不排序
  order: [],
  columnDefs: [{ targets: "_all", orderable: false }],
  columnDefs: [
    {
      targets: "_all",
      orderable: false,
      type: "string",
    },
  ],
  pageLength: 10,
  language: {
    emptyTable: `<div>查詢無結果</div>`,
    zeroRecords: `<div>資料讀取失敗，請縮小範圍或再試一次。</div>`,
    lengthMenu: "顯示_MENU_筆 / 共 _TOTAL_ 筆資料",
  },
  layout: {
    topStart: null,
    topEnd: null,
    bottomStart: {
      pageLength: {
        menu: [10, 20, 50],
      },
    },
    bottomEnd: {
      paging: {
        buttons: 7,
      },
    },
  },
  initComplete: function () {
    var $table = $(this.api().table().node());
    var $wrapper = $table.closest(".dt-container");

    var $scroller = $wrapper.find(".dt-scroll-body, .dt-scroll-head");
    var $headTable = $wrapper.find(".dt-scroll-head table.dataTable");

    var hasFixFirst = $table.hasClass("fix-firstline");
    var hasFixLast = $table.hasClass("fix-lastline");
    var hasFixFirstTwo = $table.hasClass("fix-first-twoline"); // 新增判斷

    function updateFixClassesAndCursor() {
      var scroller = $scroller.get(0);
      var hasScrollbar = scroller.scrollWidth > $(scroller).innerWidth();

      if (hasScrollbar) {
        $scroller.css("cursor", "grab");
        if (hasFixFirst) {
          $table.addClass("fix-firstline");
          $headTable.addClass("fix-firstline");
        } else {
          $table.removeClass("fix-firstline");
          $headTable.removeClass("fix-firstline");
        }
        if (hasFixLast) {
          $table.addClass("fix-lastline");
          $headTable.addClass("fix-lastline");
        } else {
          $table.removeClass("fix-lastline");
          $headTable.removeClass("fix-lastline");
        }
        if (hasFixFirstTwo) {
          $table.addClass("fix-first-twoline");
          $headTable.addClass("fix-first-twoline");
        } else {
          $table.removeClass("fix-first-twoline");
          $headTable.removeClass("fix-first-twoline");
        }
      } else {
        $scroller.css("cursor", "default");
        if (hasFixFirst) {
          $table.removeClass("fix-firstline");
          $headTable.removeClass("fix-firstline");
        }
        if (hasFixLast) {
          $table.removeClass("fix-lastline");
          $headTable.removeClass("fix-lastline");
        }
        if (hasFixFirstTwo) {
          $table.removeClass("fix-first-twoline");
          $headTable.removeClass("fix-first-twoline");
        }
      }
    }

    updateFixClassesAndCursor();

    $(window).on("resize", updateFixClassesAndCursor);

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
      updateFixClassesAndCursor();
      $scroller.removeClass("grabbing");
    });

    $scroller.on("mouseleave", function () {
      if (!isDown) return;
      isDown = false;
      updateFixClassesAndCursor();
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
