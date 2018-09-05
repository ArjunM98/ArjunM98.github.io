const nav = document.querySelector("#navigation-container");
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    /* Change color of nav bar when scrolling */
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY <= nav.clientHeight) {
        nav.classList.remove("scrolled");
    } else {
        nav.classList.add("scrolled");
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

// expanding navbar onclick
function expandNavbar() {
    classNames = nav.className.split(" ");
    if (classNames.indexOf("responsive-display") == -1) {
        nav.classList.add("responsive-display");
    } else {
        nav.classList.remove("responsive-display");
    }
}

// smooth scrolling effect
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // close expanding nav bar
        classNames = nav.className.split(" ");
        if (classNames.indexOf("responsive-display") != -1) {
            nav.classList.remove("responsive-display");
        }

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;

        });
    } // End if
});