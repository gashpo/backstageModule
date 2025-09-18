document.addEventListener("DOMContentLoaded", () => {
  // 年
  document.querySelectorAll(".datepicker.year").forEach(function (el) {
    // 初始化年份選擇器
    const picker = new tempusDominus.TempusDominus(el, {
      display: {
        theme: "light",
        components: {
          calendar: true,
          date: false,
          month: false,
          year: true,
          decades: false,
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
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: true,
    });

    // 取得 input 元素
    const input = el.querySelector("input");

    if (input) {
      const yearPattern = /^\d{4}$/; // YYYY 格式

      // 禁止手動輸入
      input.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      input.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      input.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示選擇器
      input.addEventListener("focus", () => {
        picker.show();
      });

      // 失焦時驗證格式
      input.addEventListener("blur", () => {
        const value = input.value.trim();
        if (value && !yearPattern.test(value)) {
          input.value = ""; // 清空不合法輸入
        }
      });
    }
  });

  // 年-月
  document.querySelectorAll(".datepicker.month").forEach(function (el) {
    // 初始化月份選擇器
    const picker = new tempusDominus.TempusDominus(el, {
      display: {
        theme: "light",
        components: {
          calendar: true,
          date: false,
          month: true,
          year: true,
          decades: false,
          clock: false,
          hours: false,
          minutes: false,
          seconds: false,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy/MM",
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: true,
    });

    // 取得 input 元素
    const input = el.querySelector("input");

    if (input) {
      const monthPattern = /^\d{4}-\d{2}$/; // YYYY-MM 格式

      // 禁止手動輸入
      input.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      input.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      input.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示選擇器
      input.addEventListener("focus", () => {
        picker.show();
      });

      // 失焦時驗證格式
      input.addEventListener("blur", () => {
        const value = input.value.trim();
        if (value && !monthPattern.test(value)) {
          input.value = ""; // 清空不合法輸入
        }
      });
    }
  });

  // 年-月-日
  document.querySelectorAll(".datepicker.date").forEach(function (el) {
    // 初始化日期選擇器
    const picker = new tempusDominus.TempusDominus(el, {
      display: {
        theme: "light",
        components: {
          decades: false,
          clock: false,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy/MM/dd",
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: true,
    });

    // 取得 input 元素
    const input = el.querySelector("input");

    if (input) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD 格式

      // 禁止手動輸入
      input.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      input.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      input.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示選擇器
      input.addEventListener("focus", () => {
        picker.show();
      });

      // 失焦時驗證格式
      input.addEventListener("blur", () => {
        const value = input.value.trim();
        if (value && !datePattern.test(value)) {
          input.value = ""; // 清空不合法輸入
        }
      });
    }
  });

  // 年-月-日 時:分:秒
  document.querySelectorAll(".datepicker.datetime").forEach(function (el) {
    // 初始化日期時間選擇器
    const picker = new tempusDominus.TempusDominus(el, {
      display: {
        theme: "light",
        components: {
          calendar: true,
          date: true,
          month: true,
          year: true,
          decades: false,
          clock: true,
          hours: true,
          minutes: true,
          seconds: true,
        },
      },
      localization: {
        locale: "ch",
        startOfTheWeek: 1,
        format: "yyyy/MM/dd HH:mm:ss",
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: true,
    });

    // 取得 input 元素
    const input = el.querySelector("input");

    if (input) {
      const dateTimePattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/; // YYYY-MM-DD HH:mm:ss

      // 禁止手動輸入
      input.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      input.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      input.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示選擇器
      input.addEventListener("focus", () => {
        picker.show();
      });

      // 失焦時驗證格式
      input.addEventListener("blur", () => {
        const value = input.value.trim();
        if (value && !dateTimePattern.test(value)) {
          input.value = ""; // 清空不合法輸入
        }
      });
    }
  });

  // 時:分:秒
  document.querySelectorAll(".datepicker.time").forEach(function (el) {
    // 初始化日期時間選擇器
    const picker = new tempusDominus.TempusDominus(el, {
      display: {
        theme: "light",
        components: {
          calendar: false,
          clock: true,
          hours: true,
          minutes: true,
          seconds: true,
        },
      },
      localization: {
        locale: "ch",
        format: "HH:mm:ss",
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: true,
    });

    // 取得 input 元素
    const input = el.querySelector("input");

    if (input) {
      const dateTimePattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/; // YYYY-MM-DD HH:mm:ss

      // 禁止手動輸入
      input.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      input.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      input.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示選擇器
      input.addEventListener("focus", () => {
        picker.show();
      });

      // 失焦時驗證格式
      input.addEventListener("blur", () => {
        const value = input.value.trim();
        if (value && !dateTimePattern.test(value)) {
          input.value = ""; // 清空不合法輸入
        }
      });
    }
  });

  // 日期區間 (年-月-日 ~ 年-月-日)
  document.querySelectorAll(".date-period").forEach((el) => {
    const maxMonthsAttr = el.getAttribute("data-max-months");
    const maxMonths = maxMonthsAttr ? parseInt(maxMonthsAttr) : null;

    const startEl = el.querySelector(".datepicker.start");
    const endEl = el.querySelector(".datepicker.end");
    if (!startEl || !endEl) return;

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD 格式
    // -------- startInput --------
    const startInput = startEl.querySelector("input");
    if (startInput) {
      // 禁止手動輸入
      startInput.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      startInput.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      startInput.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示
      startInput.addEventListener("focus", () => {
        linkedStart.show();
      });

      // 失焦時驗證格式
      startInput.addEventListener("blur", () => {
        const value = startInput.value.trim();
        if (value && !datePattern.test(value)) {
          startInput.value = "";
        }
      });
    }

    // -------- endInput --------
    const endInput = endEl.querySelector("input");
    if (endInput) {
      // 禁止手動輸入
      endInput.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      endInput.addEventListener("paste", (e) => {
        e.preventDefault();
      });
      endInput.addEventListener("drop", (e) => {
        e.preventDefault();
      });

      // 聚焦時顯示
      endInput.addEventListener("focus", () => {
        linkedEnd.show();
      });

      // 失焦時驗證格式
      endInput.addEventListener("blur", () => {
        const value = endInput.value.trim();
        if (value && !datePattern.test(value)) {
          endInput.value = "";
        }
      });
    }

    const linkedStart = new tempusDominus.TempusDominus(startEl, {
      display: {
        theme: "light",
        components: {
          clock: false,
          decades: false,
        },
      },
      localization: {
        format: "yyyy/MM/dd",
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: false,
    });
    const linkedEnd = new tempusDominus.TempusDominus(endEl, {
      display: {
        theme: "light",
        components: {
          clock: false,
          decades: false,
        },
      },
      localization: {
        format: "yyyy/MM/dd",
        dayViewHeaderFormat: { year: "numeric", month: "numeric" },
      },
      useCurrent: false,
    });

    const Namespace = tempusDominus.Namespace;

    let lastStartDate = null;
    startEl.addEventListener(Namespace.events.change, (e) => {
      if (!e.detail.date) return;
      const startDate = new Date(e.detail.date);
      if (lastStartDate && startDate.getTime() === lastStartDate.getTime())
        return;
      lastStartDate = startDate;

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

      const endInput = endEl.querySelector("input");
      if (endInput?.value) {
        const endValue = new Date(endInput.value);
        if (
          isNaN(endValue) ||
          endValue < startDate ||
          (maxEndDate && endValue > maxEndDate)
        ) {
          endInput.value = "";
          linkedEnd.dates.clear();
        }
      }
    });

    let lastEndDate = null;
    endEl.addEventListener(Namespace.events.change, (e) => {
      if (!e.detail.date) return;
      const endDate = new Date(e.detail.date);
      if (lastEndDate && endDate.getTime() === lastEndDate.getTime()) return;
      lastEndDate = endDate;

      let minStartDate = null;
      if (maxMonths !== null && !isNaN(maxMonths)) {
        minStartDate = new Date(endDate);
        minStartDate.setMonth(minStartDate.getMonth() - maxMonths);
      }

      linkedStart.updateOptions({
        restrictions: {
          minDate: minStartDate,
          maxDate: endDate || undefined,
        },
      });

      const startInput = startEl.querySelector("input");
      if (startInput?.value) {
        const startValue = new Date(startInput.value);
        if (
          isNaN(startValue) ||
          startValue > endDate ||
          (minStartDate && startValue < minStartDate)
        ) {
          startInput.value = "";
          linkedStart.dates.clear();
        }
      }
    });

    linkedStart.updateOptions({});
    linkedEnd.updateOptions({});
  });
});
