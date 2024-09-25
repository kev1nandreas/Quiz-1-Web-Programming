window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-opacity-90');
        navbar.classList.add('text-black');
    } else {
        navbar.classList.remove('bg-opacity-90');
        navbar.classList.remove('text-black');
    }
});