import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import '../styles/cv.scss';

document.getElementById('app');

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

