document.addEventListener('DOMContentLoaded', function () {
    
    var header = document.getElementById('headerAnimé');
    var headerHauteur = header.offsetHeight;

    document.body.style.paddingTop = headerHauteur + 'px';

    document.addEventListener('scroll', function () {
        if (window.scrollY > 100    ) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});