var sideMenu = document.getElementById('menu_left');
var sideMenuHandle = document.getElementById('menu_left_handle');
var sideMenuButton = document.getElementById('menu_left_button');
var searchIcon = document.querySelector('header .search-form form a');
var searchInput = document.querySelector('header .search-form form input[type=text]');

sideMenuHandle.addEventListener('click', toogleOpen);
searchIcon.addEventListener('click', openSearchInput);

function toogleOpen() {
    sideMenu.style.left = sideMenu.style.left == '-185px' ? '0px' : '-185px';
    sideMenuButton.style.transform = sideMenuButton.style.transform == 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
}

function openSearchInput() {
    console.log(searchIcon);
    searchInput.classList.toggle('form--invisible');
}

