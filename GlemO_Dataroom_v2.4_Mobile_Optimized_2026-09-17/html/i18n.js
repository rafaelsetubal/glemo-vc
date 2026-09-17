/* GlemO data room — shared i18n engine.
   English is the source of truth; translations are a courtesy rendering.
   Legal, compliance and canonical pages are intentionally English-only. */
(function () {
  var KEY = "glemo_dr_lang";
  var LANGS = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" }
  ];
  var originals = new WeakMap();
  var ciCache = {};

  function dict(lang) {
    var all = window.GLEMO_I18N || {};
    return all[lang] || null;
  }

  function lookup(d, key, lang) {
    if (!d) return null;
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    if (!ciCache[lang]) {
      var m = {};
      for (var k in d) m[k.toLowerCase()] = d[k];
      ciCache[lang] = m;
    }
    return ciCache[lang][String(key).toLowerCase()] || null;
  }

  function walk() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].indexOf(p.tagName) >= 0) return NodeFilter.FILTER_REJECT;
        if (p.closest("#glemo-lang-bar")) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var out = [], n;
    while ((n = w.nextNode())) out.push(n);
    return out;
  }

  function apply(lang) {
    var d = dict(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    walk().forEach(function (node) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      var orig = originals.get(node);
      var trimmed = orig.trim();
      if (!trimmed) return;
      if (!d) { node.nodeValue = orig; return; }
      var t = lookup(d, trimmed, lang);
      node.nodeValue = t ? orig.replace(trimmed, t) : orig;
    });
    // translate title attributes on links where available
    try { sessionStorage.setItem(KEY, lang); } catch (e) {}
    var sel = document.getElementById("glemo-lang-select");
    if (sel && sel.value !== lang) sel.value = lang;
  }

  function mountSelector() {
    if (document.getElementById("glemo-lang-bar")) return;
    var wrap = document.createElement("div");
    wrap.id = "glemo-lang-bar";
    wrap.setAttribute("style",
      "position:fixed;top:10px;right:12px;z-index:99999;");
    var sel = document.createElement("select");
    sel.id = "glemo-lang-select";
    sel.setAttribute("aria-label", "Language");
    sel.setAttribute("style",
      "background:#12233e;color:#cadcfc;border:1px solid rgba(217,184,63,.5);" +
      "border-radius:6px;padding:5px 8px;font-size:12px;font-weight:700;cursor:pointer;");
    LANGS.forEach(function (l) {
      var o = document.createElement("option");
      o.value = l.code; o.textContent = l.label;
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () { apply(this.value); });
    wrap.appendChild(sel);
    document.body.appendChild(wrap);
  }

  function rtlStyles() {
    if (document.getElementById("glemo-rtl-style")) return;
    var st = document.createElement("style");
    st.id = "glemo-rtl-style";
    st.textContent = [
      'html[dir="rtl"] body{direction:rtl;text-align:right;}',
      'html[dir="rtl"] .shell{direction:rtl;}',
      'html[dir="rtl"] .content,html[dir="rtl"] .sidebar{direction:rtl;text-align:right;}',
      'html[dir="rtl"] table th,html[dir="rtl"] table td{text-align:right;}',
      'html[dir="rtl"] .nav a{text-align:right;}',
      'html[dir="rtl"] #glemo-lang-bar{right:auto;left:12px;}',
      'html[dir="rtl"] .hero-divider{margin-left:auto;margin-right:0;}',
      'html[dir="rtl"]{font-family:"Noto Naskh Arabic","Segoe UI",Tahoma,Arial,sans-serif;}',
      'html[dir="rtl"] .notice{border-left:none;border-right:3px solid var(--gold,var(--color-brand-yellow));}'
    ].join("\n");
    document.head.appendChild(st);
  }

  function init() {
    rtlStyles();
    mountSelector();
    var saved = null;
    try { saved = sessionStorage.getItem(KEY); } catch (e) {}
    if (saved && ["es","fr","ar"].indexOf(saved) >= 0) apply(saved); else apply("en");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
