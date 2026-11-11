/* ZakkMG.com: fills in the posts and project cards from posts.js, and runs the tabs.
   Addresses: zakkmg.com/#politics opens a tab; zakkmg.com/#some-post-slug opens that
   post's tab and scrolls to it. You shouldn't need to edit this file. */
(function () {
  var TABS = ["news", "politics", "blog", "projects"];
  var posts = window.POSTS || [];
  var projects = window.PROJECTS || [];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // Paragraphs from a blank line; *word* becomes italics. Built with text nodes, never innerHTML.
  function addBody(parent, body) {
    String(body || "").trim().split(/\n\s*\n/).forEach(function (para) {
      var p = el("p");
      para.trim().split(/(\*[^*\n]+\*)/).forEach(function (bit) {
        if (/^\*[^*]+\*$/.test(bit)) p.appendChild(el("em", null, bit.slice(1, -1)));
        else if (bit) p.appendChild(document.createTextNode(bit));
      });
      parent.appendChild(p);
    });
  }

  // ---- posts ----
  var bySlug = {};
  TABS.forEach(function (t) {
    var box = document.querySelector('[data-posts="' + t + '"]');
    if (!box) return;
    var mine = posts.filter(function (p) { return p.section === t; });
    if (!mine.length) { box.appendChild(el("p", "empty", "Nothing filed here yet.")); return; }
    mine.forEach(function (p) {
      var a = el("article", "post");
      a.id = p.slug;
      bySlug[p.slug] = t;
      var head = el("p", "post-when");
      head.appendChild(document.createTextNode(p.when || ""));
      var link = el("a", "post-link", "#");
      link.href = "#" + p.slug;
      link.setAttribute("aria-label", "Link to this post");
      head.appendChild(link);
      a.appendChild(head);
      a.appendChild(el("h3", "post-title", p.title));
      var body = el("div", "post-body");
      addBody(body, p.body);
      a.appendChild(body);
      if (p.quote) a.appendChild(el("blockquote", "post-quote", "“" + p.quote + "”"));
      if (p.tags && p.tags.length) {
        var tags = el("ul", "post-tags");
        p.tags.forEach(function (tg) { tags.appendChild(el("li", null, tg)); });
        a.appendChild(tags);
      }
      box.appendChild(a);
    });
  });

  // ---- project cards ----
  var pbox = document.querySelector("[data-projects]");
  if (pbox) projects.forEach(function (pr) {
    var c = el("div", "project");
    var h = el("h3", "project-name", pr.name);
    c.appendChild(h);
    if (pr.status) c.appendChild(el("p", "project-status", pr.status));
    c.appendChild(el("p", "project-text", pr.text));
    if (pr.link) {
      var a = el("a", "project-btn", (pr.button || "Open") + " →");
      a.href = pr.link;
      c.appendChild(a);
    }
    pbox.appendChild(c);
  });

  // ---- tabs ----
  var links = document.querySelectorAll(".tabs a[data-tab]");
  var panels = document.querySelectorAll(".tab-panel");
  function show(tab) {
    panels.forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== tab; });
    links.forEach(function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  function route(scroll) {
    var id = decodeURIComponent(location.hash.slice(1));
    if (TABS.indexOf(id) >= 0) {
      show(id);
      if (scroll) document.querySelector(".tabs").scrollIntoView({ block: "start" });
      return;
    }
    if (bySlug[id]) {
      show(bySlug[id]);
      var target = document.getElementById(id);
      document.querySelectorAll(".post.is-target").forEach(function (x) { x.classList.remove("is-target"); });
      target.classList.add("is-target");
      target.scrollIntoView({ block: "start" });
      return;
    }
    show("news");
  }
  // Tab clicks change the tab without jumping the page.
  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var t = a.getAttribute("data-tab");
      history.replaceState(null, "", "#" + t);
      show(t);
    });
  });
  window.addEventListener("hashchange", function () { route(true); });
  route(false);
  if (location.hash && bySlug[decodeURIComponent(location.hash.slice(1))]) route(false);
})();
