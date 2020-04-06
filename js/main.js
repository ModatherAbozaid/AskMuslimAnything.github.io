document.querySelector('.menu-btn').addEventListener('click', () => (document.querySelector('.nav-menu').classList.toggle('show')));

document.querySelector('.search-btn').addEventListener('click', () => {
    document.querySelector('.search-box').classList.toggle('showBox')
    document.querySelector('.search-field').classList.toggle('showField')
});