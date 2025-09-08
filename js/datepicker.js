document.addEventListener("DOMContentLoaded", () => {
  // 年
  document.querySelectorAll(".datepicker.year").forEach(function (el) {
    new tempusDominus.TempusDominus(el, {
      display: {
        components: {
          calendar: true,
          date: false,
          month: false,
          year: true,
          decades: true,
          clock: false,
          hours: false,
          minutes: false,
          seconds: false,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy",
      },
      useCurrent: true,
    });
  });

  // 年-月
  document.querySelectorAll(".datepicker.month").forEach(function (el) {
    new tempusDominus.TempusDominus(el, {
      display: {
        components: {
          calendar: true,
          date: false,
          month: true,
          year: true,
          decades: true,
          clock: false,
          hours: false,
          minutes: false,
          seconds: false,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy-MM",
      },
      useCurrent: true,
    });
  });

  // 年-月-日
  document.querySelectorAll(".datepicker.date").forEach(function (el) {
    new tempusDominus.TempusDominus(el, {
      display: {
        components: {
          clock: false,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy-MM-dd",
      },
      useCurrent: true,
    });

    // 加入輸入限制：只允許數字和 "-"
    const input = el.querySelector("input");
    if (input) {
      input.addEventListener("keydown", (e) => {
        const allowedKeys = [
          "Backspace",
          "ArrowLeft",
          "ArrowRight",
          "Delete",
          "Tab",
          "Home",
          "End",
        ];
        const numberKeys = /^[0-9]$/;
        if (
          allowedKeys.includes(e.key) ||
          numberKeys.test(e.key) ||
          e.key === "-"
        ) {
          return;
        }
        e.preventDefault();
      });
      input.addEventListener("input", (e) => {
        const filtered = e.target.value.replace(/[^0-9\-]/g, "");
        if (filtered !== e.target.value) {
          e.target.value = filtered;
        }
      });
    }
  });

  // 年-月-日 時:分:秒
  document.querySelectorAll(".datepicker.time").forEach(function (el) {
    new tempusDominus.TempusDominus(el, {
      display: {
        components: {
          calendar: true,
          date: true,
          month: true,
          year: true,
          decades: true,
          clock: true,
          hours: true,
          minutes: true,
          seconds: true,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy-MM-dd HH:mm:ss",
      },
      useCurrent: true,
    });
  });

  // 日期區間 (年-月-日 ~ 年-月-日)
  document.querySelectorAll(".date-period").forEach((periodEl) => {
    const maxMonthsAttr = periodEl.getAttribute("data-max-months");
    const maxMonths = maxMonthsAttr ? parseInt(maxMonthsAttr) : null;

    const startEl = periodEl.querySelector(".datepicker.start");
    const endEl = periodEl.querySelector(".datepicker.end");
    if (!startEl || !endEl) return;

    const linkedStart = new tempusDominus.TempusDominus(startEl, {
      localization: { format: "yyyy-MM-dd" },
    });
    const linkedEnd = new tempusDominus.TempusDominus(endEl, {
      localization: { format: "yyyy-MM-dd" },
      useCurrent: false,
    });

    const Namespace = tempusDominus.Namespace;

    startEl.addEventListener(Namespace.events.change, (e) => {
      const startDate = new Date(e.detail.date);
      let maxEndDate = null;
      if (maxMonths !== null && !isNaN(maxMonths)) {
        maxEndDate = new Date(startDate);
        maxEndDate.setMonth(maxEndDate.getMonth() + maxMonths);
      }

      linkedEnd.updateOptions({
        restrictions: {
          minDate: startDate,
          maxDate: maxEndDate || undefined,
        },
      });

      // 非合法時清空結束框
      const endInput = endEl.querySelector("input");
      if (endInput?.value) {
        const endValue = new Date(endInput.value.replace(/-/g, "/"));
        if (
          isNaN(endValue) ||
          endValue < startDate ||
          (maxEndDate && endValue > maxEndDate)
        ) {
          endInput.value = "";
          linkedEnd.dates.clear();
        }
      }
      console.log(
        "start changed:",
        startDate,
        "=> end min/max:",
        startDate,
        maxEndDate
      );
    });

    linkedEnd.subscribe(Namespace.events.change, (e) => {
      const endDate = new Date(e.date);

      linkedStart.updateOptions({
        restrictions: {
          maxDate: endDate || undefined,
        },
      });

      // 非合法時清空開始框
      const startInput = startEl.querySelector("input");
      if (startInput?.value) {
        const startValue = new Date(startInput.value.replace(/-/g, "/"));
        if (isNaN(startValue) || (endDate && startValue > endDate)) {
          startInput.value = "";
          linkedStart.dates.clear();
        }
      }
      console.log("end changed:", endDate, "=> start max:", endDate);
    });

    // 初始化同步 restrictions
    linkedStart.updateOptions({});
    linkedEnd.updateOptions({});
  });
});
