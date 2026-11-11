/* ZakkMG.com: the Aa button.
   Every word is in ZakkMG Hand. The Aa button in the top bar switches to plain fonts
   and the browser remembers the choice. Loaded in <head> so the page never flashes
   the wrong font. */
(function () {
  var KEY = "zakkmg-font";
  var root = document.documentElement;
  try { if (localStorage.getItem(KEY) === "plain") root.classList.add("font-plain"); } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".font-switch");
    if (!btn) return;
    var label = btn.querySelector(".sr");
    function sync() {
      var plain = root.classList.contains("font-plain");
      btn.setAttribute("aria-pressed", plain ? "true" : "false");
      if (label) label.textContent = plain ? "Handwriting font" : "Plain font";
    }
    sync();
    btn.addEventListener("click", function () {
      var plain = root.classList.toggle("font-plain");
      try { localStorage.setItem(KEY, plain ? "plain" : "hand"); } catch (e) {}
      sync();
    });
  });
})();
