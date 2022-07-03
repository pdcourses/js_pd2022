const btnHome = document.getElementById('btnHome');

btnHome.addEventListener('click', () => {
    location.replace(`${location.origin}`);
});