const nav = document.querySelector("#navigation-container");
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    /* Change color of nav bar when scrolling */
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY <= nav.clientHeight) {
        nav.className = '';
    } else {
        nav.className = 'scrolled';
    }

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-500px";
    }
    prevScrollpos = currentScrollPos;

};