(function () {
  "use strict";

  const featuredIds = ["inflate-tire", "replace-tube", "dropped-chain", "remove-reinstall-wheel", "rim-brake-inspect", "shifting-problems", "pre-ride-check", "flat-cause"];
  const quickChecks = ["Tire condition and pressure", "Wheel attachment", "Brake operation", "Handlebar and steering security", "Pedal and crank security", "Chain condition", "Frame and fork", "Unusual noises, looseness, or damage"];
  const titleCase = (value) => value.replace(/\b\w/g, (letter) => letter.toUpperCase());
  const byCategory = (categoryId) => REPAIR_CATEGORIES.find((category) => category.id === categoryId);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const guideCard = (repair) => `<article class="guide-card"><a href="#guide/${encodeURIComponent(repair.id)}">${escapeHtml(repair.title)}</a><p>${escapeHtml(repair.summary)}</p><span class="card-meta">${escapeHtml(byCategory(repair.category).title)} · ${escapeHtml(repair.difficulty)}</span></article>`;
  const listMarkup = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  function renderHome() {
    document.getElementById("featured-guides").innerHTML = featuredIds.map((id) => guideCard(REPAIR_BY_ID[id])).join("");
    document.getElementById("category-links").innerHTML = REPAIR_CATEGORIES.map((category) => {
      const count = REPAIRS.filter((repair) => repair.category === category.id).length;
      return `<a class="category-link" href="#repairs?category=${encodeURIComponent(category.id)}">${escapeHtml(category.title)}<span>${count} guides</span></a>`;
    }).join("");
    document.getElementById("category-guide-lists").innerHTML = REPAIR_CATEGORIES.map((category) => {
      const repairs = REPAIRS.filter((repair) => repair.category === category.id);
      return `<section class="category-group" id="category-${category.id}"><h3>${escapeHtml(category.title)}</h3><div class="guide-grid">${repairs.map(guideCard).join("")}</div></section>`;
    }).join("");
    document.getElementById("guide-count").textContent = `${REPAIRS.length} guides`;
    document.getElementById("tool-list").innerHTML = STATION_TOOLS.map((tool) => `<article class="tool-card"><h3>${escapeHtml(tool.name)}</h3><p>${escapeHtml(tool.use)}</p></article>`).join("");
    document.getElementById("quick-checklist").innerHTML = quickChecks.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function toolGuideMarkup(repair) {
    const tools = repair.available.length ? `<ul class="tool-list">${listMarkup(repair.available)}</ul>` : "<p>No station tool is confirmed as necessary for this guide.</p>";
    const extra = repair.extra.length ? `<ul class="tool-list">${listMarkup(repair.extra)}</ul>` : "<p>No additional items normally needed; follow component instructions.</p>";
    return `<section class="content-card"><h2>Tools and supplies</h2><h3>Available at this station</h3>${tools}<h3>You may also need</h3>${extra}</section>`;
  }

  function guideDetailMarkup(repair) {
    const category = byCategory(repair.category);
    const videos = repair.video ? `<section class="content-card video-card"><h2>Watch a video</h2><a href="${escapeHtml(repair.video.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repair.video.linkText)}</a></section>` : "";
    const related = repair.related.map((id) => REPAIR_BY_ID[id]).filter(Boolean);
    return `<article class="guide-detail page-width">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#home">Home</a> / <a href="#repairs?category=${encodeURIComponent(repair.category)}">${escapeHtml(category.title)}</a> / <span aria-current="page">${escapeHtml(repair.title)}</span></nav>
      <header class="guide-header"><p class="eyebrow">${escapeHtml(category.title)}</p><h1>${escapeHtml(repair.title)}</h1><p class="guide-summary">${escapeHtml(repair.summary)}</p><div class="guide-badges"><span class="badge">Difficulty: ${escapeHtml(repair.difficulty)}</span><span class="badge">Estimated time: ${escapeHtml(repair.time)}</span></div></header>
      <div class="guide-columns">
        <div class="guide-main">
          <section class="content-card"><h2>Symptoms</h2><ul>${listMarkup(repair.symptoms)}</ul></section>
          <section class="content-card warning-card"><h2>Before you begin</h2><p>${escapeHtml(repair.warning)}</p><p><strong>Compatibility:</strong> ${escapeHtml(repair.compatibility)}</p></section>
          <section class="content-card"><h2>Step-by-step</h2><ol>${listMarkup(repair.steps)}</ol></section>
          <section class="content-card"><h2>Check your work</h2><ul>${listMarkup(repair.success)}</ul><h3>Safety verification</h3><ul>${listMarkup(repair.safety)}</ul></section>
          <section class="content-card warning-card"><h2>Stop and consult a qualified mechanic if…</h2><p>${escapeHtml(repair.stop)}</p></section>
        </div>
        <aside class="guide-aside">${toolGuideMarkup(repair)}${videos}<section class="content-card"><h2>Related guides</h2><div class="related-links">${related.map((item) => `<a href="#guide/${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a>`).join("")}</div></section></aside>
      </div>
      <a class="back-link" href="#repairs">← Back to all repairs</a>
    </article>`;
  }

  function renderRoute() {
    const hash = window.location.hash || "#home";
    const detailHost = document.getElementById("detail-host");
    const detailMatch = hash.match(/^#guide\/([^?]+)/);
    if (detailMatch) {
      const repair = REPAIR_BY_ID[decodeURIComponent(detailMatch[1])];
      document.body.classList.add("detail-mode");
      if (repair) {
        detailHost.innerHTML = guideDetailMarkup(repair);
        document.title = `${repair.title} | Better Bikes`;
      } else {
        detailHost.innerHTML = `<section class="page-width guide-detail"><h1>Guide not found</h1><p>That repair guide does not exist in this library.</p><a href="#repairs">Browse all repairs</a></section>`;
        document.title = "Guide not found | Better Bikes";
      }
      window.scrollTo(0, 0);
      closeMenu();
      return;
    }

    document.body.classList.remove("detail-mode");
    detailHost.innerHTML = "";
    document.title = "Better Bikes | Get Back on the Road";
    const categoryMatch = hash.match(/^#repairs\?category=([^&]+)/);
    if (categoryMatch) {
      const categoryId = decodeURIComponent(categoryMatch[1]);
      const target = document.getElementById(`category-${categoryId}`);
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ block: "start" }), 0);
      } else {
        document.getElementById("repairs").scrollIntoView({ block: "start" });
      }
    } else if (hash === "#all-guides") {
      document.getElementById("all-guides").scrollIntoView({ block: "start" });
    } else if (hash !== "#home") {
      const target = document.querySelector(hash);
      if (target) window.setTimeout(() => target.scrollIntoView({ block: "start" }), 0);
    }
    closeMenu();
  }

  function closeMenu() {
    const nav = document.getElementById("primary-nav");
    const toggle = document.querySelector(".menu-toggle");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  const search = document.getElementById("repair-search");
  const results = document.getElementById("search-results");
  const featured = document.getElementById("featured-guides");
  const clearButton = document.getElementById("clear-search");
  const status = document.getElementById("search-status");

  function doSearch() {
    const term = search.value.trim().toLocaleLowerCase();
    clearButton.hidden = !term;
    if (!term) {
      results.hidden = true;
      featured.hidden = false;
      status.textContent = "Search all repair guides.";
      return;
    }
    const matches = REPAIRS.filter((repair) => {
      const category = byCategory(repair.category).title;
      const haystack = [repair.title, repair.summary, category, repair.keywords.join(" "), repair.symptoms.join(" ")].join(" ").toLocaleLowerCase();
      return haystack.includes(term);
    });
    featured.hidden = true;
    results.hidden = false;
    if (matches.length) {
      results.innerHTML = `<div class="guide-grid">${matches.map(guideCard).join("")}</div>`;
      status.textContent = `${matches.length} ${matches.length === 1 ? "guide" : "guides"} found.`;
    } else {
      results.innerHTML = `<div class="empty-state"><strong>No guides found for “${escapeHtml(search.value.trim())}”.</strong><p>Try a part name, symptom, or a broader word such as “wheel” or “brake”.</p></div>`;
      status.textContent = "No matching guides.";
    }
  }

  document.querySelector(".menu-toggle").addEventListener("click", () => {
    const nav = document.getElementById("primary-nav");
    const open = nav.classList.toggle("is-open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(open));
  });
  document.getElementById("primary-nav").addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.getElementById("repair-search-form").addEventListener("submit", (event) => event.preventDefault());
  search.addEventListener("input", doSearch);
  clearButton.addEventListener("click", () => {
    search.value = "";
    doSearch();
    search.focus();
  });
  document.getElementById("all-guides").addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#guide/"]');
    if (anchor) window.location.hash = anchor.getAttribute("href");
  });
  window.addEventListener("hashchange", renderRoute);
  renderHome();
  renderRoute();
}());
