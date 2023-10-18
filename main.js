const hamburgerBtn = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.side-menu');
const sideMenuItems = document.querySelector('.side-menu-items');
const container = document.querySelector('.container');


hamburgerBtn.addEventListener('click', function() {
    sideMenu.style.width = "300px";
    /* container.style.marginRight = "0"; */
    document.body.style.backgroundColor = "rgba(0,0,0, 0.7)";
});

closeBtn.addEventListener('click', function() {
    sideMenu.style.width = "0";
    /* container.style.marginRight = "0"; */
    document.body.style.backgroundColor = "white";
})

