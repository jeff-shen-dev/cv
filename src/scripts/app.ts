import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import '../styles/cv.scss';

// Adjust view height according to the browser interface on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let selector = anchor?.getAttribute('href');
        if (selector)
            document.querySelector(selector)?.scrollIntoView({
                behavior: 'smooth'
            });
    });
});
