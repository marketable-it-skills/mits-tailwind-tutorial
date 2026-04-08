import './style.css'

const themeBtn = document.querySelector('#themeBtn');
const themeImg = document.querySelector('#themeBtn img');

// Restore saved theme preference on page load
(function () {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    themeImg.src = '/img/icons/dark-svgrepo-com.svg';
    themeImg.alt = 'Dark mode';
  } else {
    themeImg.src = '/img/icons/light-svgrepo-com.svg';
    themeImg.alt = 'Light mode';
  }
})();

// Toggle dark mode on button click
themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeImg.src = isDark ? '/img/icons/dark-svgrepo-com.svg' : '/img/icons/light-svgrepo-com.svg';
  themeImg.alt = isDark ? 'Dark mode' : 'Light mode';
});
