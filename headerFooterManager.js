class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div
      class="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:bg-black mb-10"
    >
      <img
        src="./images/header-bg-color.png"
        alt=""
        class="w-full dark:bg-black"
      />
    </div>

    <nav
      class="w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
    >
      <a href="./index.html">
      <img
        src="./images/Logo-H-1.png"
        alt="Logo"
        class="w-40 mr-14"
      /></a>
      <ul
        class="dark:bg-gray-800 hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-outfit"
      >
        <li><a href="./index.html">Home</a></li>
        <li><a href="./index.html#about">About Me</a></li>
        <li><a href="./index.html#services">Services</a></li>
        <li><a href="./index.html#work">My Work</a></li>
        <li><a href="./index.html#contact">Contact Me</a></li>
      </ul>
      <div class="flex items-center gap-4">
        <!-- <button id="dark-mode-toggle" class="cursor-pointer flex items-center">
          <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button> -->
        <a
          class="hidden lg:flex items-center gap-3 px-10 py-2.5 bg-white border border-gray-500 rounded-full ml-4 font-outfit"
          href="./index.html#contact"
          >Contact <img src="./images/arrow-icon.png" alt="" class="w-3"
        /></a>
        <button
          class="block md:hidden ml-3 cursor-pointer"
          onclick="openMenu()"
        >
          <img src="./images/menu-black.png" alt="" class="w-6" />
        </button>
      </div>
      <!------------ Mobile menu ------------>
      <div>
        <ul
          id="sideMenu"
          class="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-outfit"
        >
          <div class="absolute right-6 top-6" onclick="closeMenu()">
            <img
              src="./images/close-black.png"
              alt=""
              class="w-5 cursor-pointer"
            />
          </div>
          <li><a href="./index.html" onclick="closeMenu()">Home</a></li>
          <li><a href="./index.html#about" onclick="closeMenu()">About Me</a></li>
          <li><a href="./index.html#services" onclick="closeMenu()">Services</a></li>
          <li><a href="./index.html#work" onclick="closeMenu()">My Work</a></li>
          <li><a href="./index.html#contact" onclick="closeMenu()">Contact Me</a></li>
        </ul>
      </div>
    </nav>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div class="mt-20">
      <div class="text-center">
        <img src="./images/Logo-H.png" alt="" class="w-36 mx-auto mb-2" />
        <div
          class="w-max flex items-center gap-2 mx-auto dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          <img src="./images/mail_icon.png" alt="" class="w-6" />
          houssam.saidi05@hotmail.com
        </div>
      </div>
      <div
        class="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>@2025 Houssam Saidi. All rights reserved.</p>
        <ul class="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a href="https://instagram.com/houssam_saidi_">Instagram</a></li>
          <li>
            <a href="https://www.linkedin.com/in/houssam-saidi-385150165">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/Houss-Devthe1st">GitHub</a>
          </li>
        </ul>
      </div>
    </div>`
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

function openMenu() {
  const sideMenu = document.querySelector('#sideMenu');
  if (sideMenu) sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  const sideMenu = document.querySelector('#sideMenu');
  if (sideMenu) sideMenu.style.transform = 'translateX(16rem)';
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (toggleButton) {
    const iconSun  = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    toggleButton.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        iconSun.classList.remove('hidden');
        iconMoon.classList.add('hidden');
      } else {
        iconSun.classList.add('hidden');
        iconMoon.classList.remove('hidden');
      }
    });
  }

  const tabLinks    = document.querySelectorAll('[role="tab"]');
  const tabContents = document.querySelectorAll('[role="tabpanel"]');
  if (tabLinks.length === 0) return;

  tabLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('aria-controls');

      tabLinks.forEach((item) => {
        item.classList.remove('bg-white');
        item.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach((content) => {
        content.classList.add('hidden', 'opacity-0');
        content.classList.remove('block');
      });

      event.currentTarget.classList.add('bg-white');
      event.currentTarget.setAttribute('aria-selected', 'true');

      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove('hidden', 'opacity-0');
        targetContent.classList.add('block', 'opacity-100');
      }
    });
  });
});