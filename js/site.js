// Shared header and footer for every page, plus the theme toggle and mobile menu.
// Use <site-header home></site-header> on the home page so links stay in-page,
// and <site-header></site-header> on project pages.

const NAV_LINKS = [
  { hash: "#about", label: "About" },
  { hash: "#services", label: "Services" },
  { hash: "#work", label: "Work" },
  { hash: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/houssam-saidi-385150165", label: "LinkedIn" },
  { href: "https://github.com/Houss-Devthe1st", label: "GitHub" },
  { href: "https://instagram.com/houssam_saidi_", label: "Instagram" },
];

const EMAIL = "houssam.saidi05@hotmail.com";

const ICONS = {
  moon: `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>`,
  sun: `<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.25"/><path d="M12 2.5v2.25M12 19.25v2.25M2.5 12h2.25M19.25 12h2.25M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3.5 7h17M3.5 12h17M3.5 17h17"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/></svg>`,
};

function isDark() {
  return document.documentElement.classList.contains("dark");
}

function setTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch (e) {
    // Storage blocked: the theme still changes for this visit.
  }
  document.querySelectorAll("[data-theme-toggle]").forEach(updateToggle);
}

function updateToggle(button) {
  const label = isDark() ? "Switch to light theme" : "Switch to dark theme";
  button.setAttribute("aria-label", label);
  button.setAttribute("title", label);
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const base = this.hasAttribute("home") ? "" : "index.html";
    const home = this.hasAttribute("home") ? "#top" : "index.html";
    const links = NAV_LINKS.map(
      (l) => `<li><a class="nav-link" href="${base}${l.hash}">${l.label}</a></li>`
    ).join("");

    this.innerHTML = `
      <header class="site-header">
        <div class="sheet flex h-16 items-center justify-between gap-6">
          <a class="wordmark" href="${home}" aria-label="Houssam Saidi, home">HOUSSAM<span class="wordmark-dot" aria-hidden="true"></span></a>
          <nav class="hidden md:block" aria-label="Main">
            <ul class="clean-list flex items-center gap-8">${links}</ul>
          </nav>
          <div class="flex items-center gap-2">
            <button type="button" class="icon-btn" data-theme-toggle>${ICONS.moon}${ICONS.sun}</button>
            <button type="button" class="icon-btn md:hidden" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">${ICONS.menu}</button>
          </div>
        </div>
        <nav id="mobile-nav" class="mobile-nav md:hidden" aria-label="Main" hidden>
          <div class="sheet pb-4"><ul class="clean-list">${links}</ul></div>
        </nav>
      </header>`;

    const themeButton = this.querySelector("[data-theme-toggle]");
    updateToggle(themeButton);
    themeButton.addEventListener("click", () => setTheme(!isDark()));

    const menuButton = this.querySelector("[data-menu-toggle]");
    const menu = this.querySelector("#mobile-nav");
    const setMenu = (open) => {
      menu.hidden = !open;
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuButton.innerHTML = open ? ICONS.close : ICONS.menu;
    };
    menuButton.addEventListener("click", () => setMenu(menu.hidden));
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) {
        setMenu(false);
        menuButton.focus();
      }
    });
    window.matchMedia("(min-width: 48rem)").addEventListener("change", (e) => {
      if (e.matches) setMenu(false);
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const social = SOCIAL_LINKS.map(
      (l) => `<li><a class="link" href="${l.href}" target="_blank" rel="noopener">${l.label}</a></li>`
    ).join("");

    this.innerHTML = `
      <footer class="sheet pb-10 pt-4">
        <div class="title-block sm:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1fr_0.9fr]">
          <div>
            <span class="tb-label">Drawn by</span>
            <span class="h-sub block">Houssam Saidi</span>
            <span class="muted">Software developer, Lebanon</span>
          </div>
          <div>
            <span class="tb-label">Email</span>
            <a class="link break-all" href="mailto:${EMAIL}">${EMAIL}</a>
          </div>
          <div>
            <span class="tb-label">Elsewhere</span>
            <ul class="clean-list flex flex-wrap gap-x-4 gap-y-1">${social}</ul>
          </div>
          <div>
            <span class="tb-label">Revision</span>
            <span>&copy; ${new Date().getFullYear()} Houssam Saidi.<br />All rights reserved.</span>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
