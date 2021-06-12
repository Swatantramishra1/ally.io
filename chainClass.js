
const $ = (selector) => {
  const elements = document.querySelectorAll(selector);

  const funcList = {
    element: elements,
    addClass: function (className) {
      for (let i = 0; i < this.element.length; i++) {
        this.element[i].classList.add(className);
      }
      return this;
    },
    show: function () {
      for (let i = 0; i < this.element.length; i++) {
        this.element[i].style.display = "block";
      }
      return this;
    },
    hide: function () {
      for (let i = 0; i < this.element.length; i++) {
        this.element[i].style.display = "none";
      }
      return this;
    }
  };

  return funcList;
};

console.log("ele", $("#app").addClass("a").hide().show());
