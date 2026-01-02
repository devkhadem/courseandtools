const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
