let currYear = document.querySelector('.current__year');
let currTime = new Date();

let items = document.querySelector('#main-nav__menu--sites')

items.addEventListener('click', e =>{
    e.preventDefault();
    e.target.classList.toggle('main-nav__link--active');
})

currYear.textContent = `${currTime.getFullYear()}`;