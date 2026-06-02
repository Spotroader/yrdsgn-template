(function () {
  var KEY = "yuru-theme";
  var root = document.documentElement;

  function systemTheme() {
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  }

  apply(localStorage.getItem(KEY) || systemTheme());

  window.YURU_theme = {
    get: function () {
      return root.getAttribute("data-theme") || "dark";
    },
    set: function (theme) {
      localStorage.setItem(KEY, theme);
      apply(theme);
      if (window.ScrollTrigger) ScrollTrigger.refresh(true);
    },
    toggle: function () {
      this.set(this.get() === "dark" ? "light" : "dark");
    },
  };

  function bind() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      if (btn.dataset.themeBound) return;
      btn.dataset.themeBound = "1";
      btn.addEventListener("click", function () {
        YURU_theme.toggle();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }

  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem(KEY)) apply(e.matches ? "dark" : "light");
  });
})();
