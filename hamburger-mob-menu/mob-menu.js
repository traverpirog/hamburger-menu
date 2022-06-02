var _document, _document2, _document3, _document4;

var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
var menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
var overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('mob-menu--active');

    if (menu !== null && menu !== void 0 && menu.classList.contains('mob-menu--active')) {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
    } else {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    }
});
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function () {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('mob-menu--active');
});
menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(function (el) {
    el.addEventListener('click', function () {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('mob-menu--active');
    });
});


let mobParentBtn = document.querySelectorAll('.mob-menu__btn');
let mobChildMenu = document.querySelectorAll('.mob-menu__child');

for (let i = 0; i < mobParentBtn.length; i++) {
    mobParentBtn[i].addEventListener('click', () => {
        mobParentBtn[i].classList.toggle('mob-menu__btn--active');
        mobChildMenu[i].classList.toggle('mob-menu__child--active');
    });
}