// *navbar
// nav menu toggle
const navMenu = document.querySelector("#nav-menu");
const bgOverlay = document.querySelector("#bg-overlay");
const sideNavHamburger = document.querySelector("#side-nav-hamburger");
const topNavHamburger = document.querySelector("#top-nav .hamburger-icon");
const menuCloseBtn = document.querySelector("#menu-close-btn");
// open menu
sideNavHamburger.addEventListener("click", function () {
	toggleNavMenu(`translateX(-100%)`, "1", "1", "auto");
});
topNavHamburger.addEventListener("click", function () {
	toggleNavMenu(`translateX(-100%)`, "1", "1", "auto");
});
// close menu
menuCloseBtn.addEventListener("click", function () {
	toggleNavMenu(`translateX(0)`, "0", "0", "none");
});
bgOverlay.addEventListener("click", function () {
	toggleNavMenu(`translateX(0)`, "0", "0", "none");
});
// nav menu toggle function
function toggleNavMenu(moveMenu, menuOpacity, bgOpacity, pEvent) {
	navMenu.style.transform = moveMenu;
	navMenu.style.opacity = menuOpacity;
	bgOverlay.style.opacity = bgOpacity;
	bgOverlay.style.pointerEvents = pEvent;
}
// nav menu toggle

// search box toggle
const searchBox = document.querySelector("#search-box");
const bgOverlay2 = document.querySelector("#bg-overlay2");
const searchBtn = document.querySelector("#search-icon");
// open search box
searchBtn.addEventListener("click", function () {
	toggleSearch("1", "auto");
});
// close search box
bgOverlay2.addEventListener("click", function () {
	toggleSearch("0", "none");
});
// search menu toggle function
function toggleSearch(opacity, pEvent) {
	searchBox.style.opacity = opacity;
	searchBox.style.pointerEvents = pEvent;
	bgOverlay2.style.opacity = opacity;
	bgOverlay2.style.pointerEvents = pEvent;
}
// search box toggle

// signUp page toggle
const signUpBox = document.querySelector("#signUp-box");
const bgOverlay3 = document.querySelector("#bg-overlay3");
const userIcon = document.querySelector("#user-icon");
const formCloseBtn = document.querySelector("#form-close-btn");
// open signUp box
userIcon.addEventListener("click", function () {
	toggleSignUpForm(`translateX(0)`, "1", "auto");
});
// close signUp box
formCloseBtn.addEventListener("click", function () {
	toggleSignUpForm(`translateX(-100vw)`, "0", "none");
});
bgOverlay3.addEventListener("click", function () {
	toggleSignUpForm(`translateX(-100vw)`, "0", "none");
});
// signUp box toggle function
function toggleSignUpForm(moveSignUpForm, opacity, pEvent) {
	signUpBox.style.transform = moveSignUpForm;
	signUpBox.style.pointerEvents = pEvent;
	bgOverlay3.style.opacity = opacity;
	bgOverlay3.style.pointerEvents = pEvent;
}
// signUp page toggle

// shopping cart toggle
const cartMenu = document.querySelector("#cart-menu");
const bgOverlay4 = document.querySelector("#bg-overlay4");
const sideNavCart = document.querySelector("#side-nav-cart");
const topNavCart = document.querySelector("#top-nav-cart");
const cartMenuCloseBtn = document.querySelector("#cart-menu-close-btn");
// open cart menu
sideNavCart.addEventListener("click", function () {
	toggleCartMenu(`translateX(-100%)`, "1", "1", "auto");
});
topNavCart.addEventListener("click", function () {
	toggleCartMenu(`translateX(-100%)`, "1", "1", "auto");
});
// close cart menu
cartMenuCloseBtn.addEventListener("click", function () {
	toggleCartMenu(`translateX(0)`, "0", "0", "none");
});
bgOverlay4.addEventListener("click", function () {
	toggleCartMenu(`translateX(0)`, "0", "0", "none");
});
// cart menu toggle function
function toggleCartMenu(moveMenu, menuOpacity, bgOpacity, pEvent) {
	cartMenu.style.transform = moveMenu;
	cartMenu.style.opacity = menuOpacity;
	bgOverlay4.style.opacity = bgOpacity;
	bgOverlay4.style.pointerEvents = pEvent;
}
// shopping cart toggle
// *navbar

// top nav and scroll-top button
const topNav = document.querySelector("#top-nav");
const topBtn = document.querySelector("#topBtn");
window.onscroll = function () {
	showScrollTop();
	showTopNav();
};

function showScrollTop() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.opacity = "1";
		topBtn.style.pointerEvents = "auto";
	} else if (
		document.body.scrollTop < 20 ||
		document.documentElement.scrollTop < 20
	) {
		topBtn.style.opacity = "0";
		topBtn.style.pointerEvents = "none";
	}
}

function showTopNav() {
	if (
		document.body.scrollTop > 780 ||
		document.documentElement.scrollTop > 780
	) {
		topNav.style.transform = `translateY(0)`;
	} else if (
		document.body.scrollTop < 780 ||
		document.documentElement.scrollTop < 780
	) {
		topNav.style.transform = `translateY(-60px)`;
	}
}

function scrollTopFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// top nav and scroll-top button

// *shopping cart
const cartItemContainer = document.querySelector(".cart-item-container");
const productAmount = document.querySelector(".product-amount-badge");
const totalMoney = document.querySelector("#total-money");
const resetCart = document.querySelector("#reset-cart");
const allProducts = document.querySelector("#pills-tabContent");

// inside cart
let insideCart = [];
// *shopping cart

// wow js
$(document).ready(function () {
	new WOW().init();
});
