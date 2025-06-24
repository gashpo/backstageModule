class CustomDropdown {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    this.uniqueId = this.generateUniqueId();

    // 配置選項
    this.config = {
      data: options.data || [],
      placeholder: options.placeholder || "請選擇...",
      searchPlaceholder: options.searchPlaceholder || "搜尋...",
      multiple: options.multiple || false,
      searchThreshold: options.searchThreshold || 10,
      maxHeight: options.maxHeight || 240,
      onSelectionChange: options.onSelectionChange || null,
      ...options,
    };

    this.selectedValues = new Set();
    this.filteredData = [...this.config.data];
    this.isOpen = false;

    this.init();
  }

  generateUniqueId() {
    return "dropdown_" + Math.random().toString(36).substr(2, 9);
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    const showSearch = this.config.data.length >= this.config.searchThreshold;
    const modeClass = this.config.multiple ? "multi-select" : "single-select";

    this.container.innerHTML = `
                    <div class="dropdown-toggle ${modeClass}" data-id="${
      this.uniqueId
    }">
                        <span class="dropdown-toggle-text placeholder">${
                          this.config.placeholder
                        }</span>
                        <i class="fas fa-chevron-down dropdown-arrow"></i>
                    </div>
                    
                    <div class="dropdown-menu-container d-none" data-id="${
                      this.uniqueId
                    }">
                        ${
                          showSearch
                            ? `
                            <div class="dropdown-search">
                                <div class="search-input-container">
                                    <i class="fas fa-search search-icon"></i>
                                    <input type="text" class="search-input" placeholder="${this.config.searchPlaceholder}" data-id="${this.uniqueId}">
                                </div>
                            </div>
                        `
                            : ""
                        }
                        
                        <div class="options-container" data-id="${
                          this.uniqueId
                        }" style="max-height: ${this.config.maxHeight}px;">
                            <!-- 選項會動態插入到這裡 -->
                        </div>
                    </div>
                `;

    this.button = this.container.querySelector(
      `[data-id="${this.uniqueId}"].dropdown-toggle`
    );
    this.dropdown = this.container.querySelector(
      `[data-id="${this.uniqueId}"].dropdown-menu-container`
    );
    this.searchInput = this.container.querySelector(
      `[data-id="${this.uniqueId}"].search-input`
    );
    this.optionsContainer = this.container.querySelector(
      `[data-id="${this.uniqueId}"].options-container`
    );
    this.buttonText = this.container.querySelector(".dropdown-toggle-text");

    this.renderOptions();
  }

  renderOptions() {
    const selectedOptions = this.config.data.filter((opt) =>
      this.selectedValues.has(opt.value)
    );
    const unselectedOptions = this.filteredData.filter(
      (opt) => !this.selectedValues.has(opt.value)
    );

    let html = "";

    // 多選模式才顯示全選選項
    if (this.config.multiple && this.filteredData.length > 0) {
      const allSelected = this.filteredData.every((opt) =>
        this.selectedValues.has(opt.value)
      );
      html += this.createSelectAllOption(allSelected);
    }

    // 已選中的項目（多選模式且有選中項目時）
    if (this.config.multiple && selectedOptions.length > 0) {
      html += '<div class="section-divider selected-section">已選擇</div>';
      selectedOptions.forEach((option) => {
        html += this.createOptionHTML(option, true, true);
      });
    }

    // 未選中的項目
    if (unselectedOptions.length > 0) {
      if (this.config.multiple && selectedOptions.length > 0) {
        html += '<div class="section-divider">其他選項</div>';
      }
      unselectedOptions.forEach((option) => {
        html += this.createOptionHTML(option, false, false);
      });
    } else if (this.filteredData.length === 0) {
      html += '<div class="no-results">找不到符合的選項</div>';
    }

    this.optionsContainer.innerHTML = html;
    this.bindOptionEvents();
    this.updateButtonText();
  }

  createSelectAllOption(isChecked) {
    return `
                    <div class="option-item select-all-item" data-action="select-all">
                        <div class="custom-checkbox">
                            <input type="checkbox" ${
                              isChecked ? "checked" : ""
                            }>
                            <span class="checkmark"></span>
                        </div>
                        <span class="option-label">全部</span>
                    </div>
                `;
  }

  createOptionHTML(option, isSelected, isInSelectedSection) {
    const sectionClass = isInSelectedSection
      ? "selected-highlighted"
      : isSelected
      ? "selected"
      : "";
    const inputType = this.config.multiple ? "checkbox" : "radio";
    const inputName = this.config.multiple ? "" : `radio_${this.uniqueId}`;

    if (this.config.multiple) {
      return `
                        <div class="option-item ${sectionClass}" data-value="${
        option.value
      }">
                            <div class="custom-checkbox">
                                <input type="${inputType}" ${
        isSelected ? "checked" : ""
      } ${inputName ? `name="${inputName}"` : ""}>
                                <span class="checkmark"></span>
                            </div>
                            <span class="option-label">${option.label}</span>
                        </div>
                    `;
    } else {
      return `
                        <div class="option-item ${sectionClass}" data-value="${option.value}">
                            <span class="option-label">${option.label}</span>
                        </div>
                    `;
    }
  }

  bindEvents() {
    // 點擊按鈕開關下拉選單
    this.button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // 鍵盤支援
    this.button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggle();
      }
    });

    // 搜尋功能
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.filterOptions(e.target.value);
      });
    }

    // 點擊外部關閉下拉選單
    document.addEventListener("click", (e) => {
      if (!this.container.contains(e.target)) {
        this.close();
      }
    });

    // 阻止下拉選單內的點擊事件冒泡
    this.dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  bindOptionEvents() {
    const optionItems = this.optionsContainer.querySelectorAll(".option-item");

    optionItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        if (item.dataset.action === "select-all") {
          this.toggleSelectAll();
        } else {
          const value = item.dataset.value;

          if (this.config.multiple) {
            this.toggleMultipleSelection(value);
          } else {
            this.setSingleSelection(value);
          }
        }
      });
    });
  }

  toggleSelectAll() {
    const allSelected = this.filteredData.every((opt) =>
      this.selectedValues.has(opt.value)
    );

    if (allSelected) {
      this.filteredData.forEach((opt) => {
        this.selectedValues.delete(opt.value);
      });
    } else {
      this.filteredData.forEach((opt) => {
        this.selectedValues.add(opt.value);
      });
    }

    this.renderOptions();
    this.onSelectionChange();
  }

  toggleMultipleSelection(value) {
    if (this.selectedValues.has(value)) {
      this.selectedValues.delete(value);
    } else {
      this.selectedValues.add(value);
    }

    this.renderOptions();
    this.onSelectionChange();
  }

  setSingleSelection(value) {
    this.selectedValues.clear();
    this.selectedValues.add(value);
    this.renderOptions();
    this.onSelectionChange();
    this.close();
  }

  filterOptions(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    if (term === "") {
      this.filteredData = [...this.config.data];
    } else {
      this.filteredData = this.config.data.filter(
        (option) =>
          option.label.toLowerCase().includes(term) ||
          option.value.toLowerCase().includes(term)
      );
    }
    this.renderOptions();
  }

  updateButtonText() {
    const selectedCount = this.selectedValues.size;

    if (selectedCount === 0) {
      this.buttonText.textContent = this.config.placeholder;
      this.buttonText.className = "dropdown-toggle-text placeholder";
    } else {
      const selectedOptions = this.config.data.filter((opt) =>
        this.selectedValues.has(opt.value)
      );
      const labels = selectedOptions.map((opt) => opt.label);

      let displayText = labels.join(", ");

      // 文字截斷處理
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.fontSize = "14px";
      tempSpan.style.fontFamily = getComputedStyle(this.buttonText).fontFamily;
      tempSpan.textContent = displayText;
      document.body.appendChild(tempSpan);

      const buttonWidth = this.button.offsetWidth;
      const availableWidth = buttonWidth - 60; // 留空間給 padding 和箭頭

      if (tempSpan.offsetWidth > availableWidth) {
        let truncatedLabels = [...labels];
        while (truncatedLabels.length > 0) {
          const testText = truncatedLabels.join(", ") + "...";
          tempSpan.textContent = testText;

          if (
            tempSpan.offsetWidth <= availableWidth ||
            truncatedLabels.length === 1
          ) {
            displayText = testText;
            break;
          }
          truncatedLabels.pop();
        }
      }

      document.body.removeChild(tempSpan);

      this.buttonText.textContent = displayText;
      this.buttonText.className = "dropdown-toggle-text";
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.dropdown.classList.remove("d-none");
    this.button.classList.add("open");
    if (this.searchInput) {
      this.searchInput.focus();
    }
    this.isOpen = true;
  }

  close() {
    this.dropdown.classList.add("d-none");
    this.button.classList.remove("open");
    if (this.searchInput) {
      this.searchInput.value = "";
      this.filterOptions("");
    }
    this.isOpen = false;
  }

  selectAll() {
    this.config.data.forEach((option) => {
      this.selectedValues.add(option.value);
    });
    this.renderOptions();
    this.onSelectionChange();
  }

  clearAll() {
    this.selectedValues.clear();
    this.renderOptions();
    this.onSelectionChange();
  }

  getSelectedValues() {
    return Array.from(this.selectedValues);
  }

  getSelectedOptions() {
    return this.config.data.filter((opt) => this.selectedValues.has(opt.value));
  }

  setData(newData) {
    this.config.data = newData;
    this.filteredData = [...newData];
    this.selectedValues.clear();
    this.renderOptions();
  }

  onSelectionChange() {
    if (this.config.onSelectionChange) {
      this.config.onSelectionChange({
        selectedValues: this.getSelectedValues(),
        selectedOptions: this.getSelectedOptions(),
      });
    }
  }
}

// 測試數據
const companyData = [
  { value: "company1", label: "沂碩科技股份有限公司" },
  { value: "company2", label: "瑞旭科技" },
  { value: "company3", label: "瑞旭科技(網站服務)" },
  { value: "company4", label: "HK KKBOX" },
  { value: "company5", label: "雷爵網絡科技-PC平台" },
  { value: "company6", label: "雷爵網絡科技-PC" },
  { value: "company7", label: "紅橙數位科技有限公司" },
  { value: "company8", label: "DG-上海橙英網絡科技有限公司" },
  { value: "company9", label: "廣州要玩" },
  {
    value: "company10",
    label: "測試用超長公司名稱用來驗證文字截斷功能是否正常運作",
  },
];

const itemData = [
  { value: "item1", label: "item1" },
  { value: "item2", label: "item2" },
  { value: "item3", label: "item3" },
  { value: "item4", label: "item4" },
  { value: "item5", label: "item5" },
];

// 創建多選實例
const multiSelectDropdown = new CustomDropdown("multiSelectExample", {
  data: companyData,
  placeholder: "請選擇",
  searchPlaceholder: "請輸入使用者...",
  multiple: true,
  onSelectionChange: (result) => {
    const resultDiv = document.getElementById("multiSelectResult");
    if (result.selectedOptions.length === 0) {
      resultDiv.innerHTML = "尚未選擇任何項目";
      resultDiv.className = "alert alert-info";
    } else {
      const labels = result.selectedOptions.map((opt) => opt.label).join(", ");
      resultDiv.innerHTML = `<strong>選中項目：</strong> ${labels}`;
      resultDiv.className = "alert alert-success";
    }
  },
});

// 創建單選實例
const singleSelectDropdown = new CustomDropdown("singleSelectExample", {
  data: itemData,
  placeholder: "請選擇",
  multiple: false,
  onSelectionChange: (result) => {
    const resultDiv = document.getElementById("singleSelectResult");
    if (result.selectedOptions.length === 0) {
      resultDiv.innerHTML = "尚未選擇任何項目";
      resultDiv.className = "alert alert-info";
    } else {
      const label = result.selectedOptions[0].label;
      resultDiv.innerHTML = `<strong>選中項目：</strong> ${label}`;
      resultDiv.className = "alert alert-success";
    }
  },
});

// 全域函數
function showSelectedValues() {
  const multiValues = multiSelectDropdown.getSelectedValues();
  const singleValues = singleSelectDropdown.getSelectedValues();

  alert(
    `多選選中值：${multiValues.join(", ")}\n單選選中值：${singleValues.join(
      ", "
    )}`
  );
}
