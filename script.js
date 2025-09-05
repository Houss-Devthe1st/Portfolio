const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

const toggleButton = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;
const iconElement = document.getElementById('dark-mode-icon');



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

toggleButton.addEventListener('click', () => {
  // Toggle the 'dark' class on the html element
  htmlElement.classList.toggle('dark');
  
  // Check if the 'dark' class is present and update the icon
  if (htmlElement.classList.contains('dark')) {
    iconElement.src = './images/sun_icon.png';
    iconElement.alt = 'Toggle Light Mode';
  } else {
    iconElement.src = './images/moon_icon.png';
    iconElement.alt = 'Toggle Dark Mode';
  }
});