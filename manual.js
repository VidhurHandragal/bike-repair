(function () {
  "use strict";
  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const list = (items) => items.map((item) => `<li>${esc(item)}</li>`).join("");
  document.getElementById("manual-tools-grid").innerHTML = STATION_TOOLS.map((tool) => `<article class="tool-card"><h3>${esc(tool.name)}</h3><p>${esc(tool.use)}</p></article>`).join("");
  document.getElementById("manual-content").innerHTML = REPAIR_CATEGORIES.map((category) => {
    const guides = REPAIRS.filter((repair) => repair.category === category.id);
    return `<section class="manual-category"><h2>${esc(category.title)}</h2>${guides.map((repair) => `<article class="manual-guide">
      <h3>${esc(repair.title)}</h3><p>${esc(repair.summary)}</p>
      <p><strong>Difficulty:</strong> ${esc(repair.difficulty)} · <strong>Estimated time:</strong> ${esc(repair.time)}</p>
      <p><strong>Symptoms:</strong></p><ul>${list(repair.symptoms)}</ul>
      <p class="manual-warning"><strong>Warning:</strong> ${esc(repair.warning)}</p>
      <p><strong>Compatibility:</strong> ${esc(repair.compatibility)}</p>
      <h4>Available at this station</h4>${repair.available.length ? `<ul>${list(repair.available)}</ul>` : "<p>No station tool is confirmed as necessary.</p>"}
      <h4>You may also need</h4>${repair.extra.length ? `<ul>${list(repair.extra)}</ul>` : "<p>No additional items normally needed; follow component instructions.</p>"}
      <h4>Steps</h4><ol>${list(repair.steps)}</ol>
      <h4>Check your work</h4><ul>${list(repair.success)}</ul>
      <h4>Safety verification</h4><ul>${list(repair.safety)}</ul>
      <p class="manual-warning"><strong>Stop and consult a qualified mechanic:</strong> ${esc(repair.stop)}</p>
      <p><strong>Related guides:</strong> ${repair.related.map((id) => REPAIR_BY_ID[id]).filter(Boolean).map((related) => esc(related.title)).join("; ")}</p>
      ${repair.video ? `<p><strong>Verified video:</strong> <a href="${esc(repair.video.url)}">${esc(repair.video.linkText)}</a></p>` : ""}
    </article>`).join("")}</section>`;
  }).join("");
}());
