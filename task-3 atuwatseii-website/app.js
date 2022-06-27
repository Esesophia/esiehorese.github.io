const mainNavBtn = document.querySelector('.main-nav-btn');
const navDropdown = document.querySelector('.nav-dropdown');
const footerNav = document.querySelector('.footer-nav');
const footerNavBtn = document.querySelector('#footer-nav-btn');

mainNavBtn.addEventListener('click' , ()=>{
    navDropdown.classList.toggle('content')
 })
footerNavBtn.addEventListener('click' , ()=>{
   footerNav.classList.toggle('move-footer-nav')
})

