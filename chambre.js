document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.photo');
    const boutonPrecedent = document.querySelector('.carouselBoutonPrecedent');
    const pointsCarrousel = document.querySelector('.carrouselPointsDefilement');
    const boutonSuivant = document.querySelector('.carrouselBoutonSuivant');
    let currentIndex = 0;

    // Crée les points de défilement
    images.forEach((_, index) => {
        const point = document.createElement('div');
        point.classList.add('point');
        point.addEventListener('click', () => {
            currentIndex = index;
            updateDisplay();
        });
        pointsCarrousel.appendChild(point);
    });
    const points = document.querySelectorAll('.point');

    // Affiche uniquement l'image courante
    function updateDisplay() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
        points.forEach((point, index) => {
            point.classList.toggle('actif', index === currentIndex);
        });
    }

    // Gérer clic bouton suivant
    boutonSuivant.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateDisplay();
    });

    // Gérer clic bouton précédent
    boutonPrecedent.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateDisplay();
    });

    updateDisplay(); // Initialisation
});
