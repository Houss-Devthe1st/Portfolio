// Home page: renders the Work grid from js/projects.js and sends the contact form.

(function renderWork() {
  const grid = document.getElementById("project-grid");
  const filterBar = document.getElementById("project-filter");
  if (!grid || !filterBar) return;

  const projects = window.PROJECTS || [];
  const types = (window.PROJECT_TYPES || []).filter((t) =>
    projects.some((p) => p.type === t.id)
  );
  const typeLabel = (id) => (types.find((t) => t.id === id) || { label: id }).label;

  const placeholder = `
    <li class="placeholder-card">
      <p class="h-item m-0">More projects on the way</p>
      <p class="m-0">I'm adding larger projects here soon.</p>
    </li>`;

  function card(p) {
    const status = p.status
      ? `<span class="status" data-state="${p.status.state}">${p.status.label}</span>`
      : "";
    const stack = p.stack.map((s) => `<li class="tag">${s}</li>`).join("");
    return `
      <li>
        <a class="project-card" href="${p.url}">
          <div class="frame"><img src="${p.image}" alt="${p.imageAlt}" loading="lazy" /></div>
          <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 class="h-item project-title">${p.title}</h3>
            ${status}
          </div>
          <p class="note m-0">${typeLabel(p.type)}</p>
          <p class="m-0 muted">${p.summary}</p>
          <ul class="tag-list" aria-label="Built with">${stack}</ul>
        </a>
      </li>`;
  }

  function render(typeId) {
    const shown = typeId === "all" ? projects : projects.filter((p) => p.type === typeId);
    grid.innerHTML = shown.map(card).join("") + (typeId === "all" ? placeholder : "");
    filterBar.querySelectorAll("button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.type === typeId));
    });
  }

  const buttons = [{ id: "all", label: "All" }, ...types].map((t) => {
    const count = t.id === "all" ? projects.length : projects.filter((p) => p.type === t.id).length;
    return `<button type="button" data-type="${t.id}" aria-pressed="false">${t.label}<span class="count">${count}</span></button>`;
  });
  filterBar.innerHTML = buttons.join("");
  filterBar.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) render(button.dataset.type);
  });

  render("all");
})();

(function contactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const submit = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submit.disabled = true;
    status.dataset.state = "";
    status.textContent = "Sending your message…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      form.reset();
      status.dataset.state = "success";
      status.textContent = "Message sent. I'll reply to your email soon.";
    } catch (err) {
      status.dataset.state = "error";
      status.textContent =
        "Your message wasn't sent. Check your connection and try again, or email me directly.";
    } finally {
      submit.disabled = false;
    }
  });
})();
