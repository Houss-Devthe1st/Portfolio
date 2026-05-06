const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const htmlElement = document.documentElement;
const toggleButton = document.getElementById('dark-mode-toggle');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', () =>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg, shadow-sm')
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg, shadow-sm')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
})

if (toggleButton) {
  const iconSun  = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  toggleButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
      iconSun.classList.remove('hidden');
      iconMoon.classList.add('hidden');
    } else {
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    }
  });
}
