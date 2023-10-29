window.onload = function() {
    document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

    window.addEventListener("scroll", function(event) {
        if (window.pageYOffset > 100) {
            document.getElementById("header").classList.add("header-transparent");
        } else {
            document.getElementById("header").classList.remove("header-transparent");
        }
    });
};