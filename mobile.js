(function () {
  document.querySelectorAll("[data-menu-toggle]").forEach(function (btn) {
    var id = btn.getAttribute("aria-controls") || "mobileMenu";
    var menu = document.getElementById(id);
    if (!menu) return;
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("menu-open", open);
    });
  });

  document.querySelectorAll(".mobile-menu a, .mobile-menu button[data-close]").forEach(function (el) {
    el.addEventListener("click", function () {
      document.querySelectorAll(".mobile-menu.is-open").forEach(function (m) {
        m.classList.remove("is-open");
      });
      document.body.classList.remove("menu-open");
      document.querySelectorAll("[data-menu-toggle]").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
      });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".mobile-menu.is-open").forEach(function (m) {
        m.classList.remove("is-open");
      });
      document.body.classList.remove("menu-open");
    }
  });
})();
