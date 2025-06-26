document.addEventListener('DOMContentLoaded', function () {

    //Création des variables (récupération des éléments html)
    const images = document.querySelectorAll('.imagesChambre .photo');
    const boutonPrecedent = document.querySelector('.carouselBoutonPrecedent');
    const pointsCarrousel = document.querySelector('.carrouselPointsDefilement');
    const boutonSuivant = document.querySelector('.carrouselBoutonSuivant');
    let currentIndex = 0;

    // Création des points de défilement
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

    // Initialisation du carrousel
    updateDisplay();

    // Fontcion Carrousel (Afficher seulement l'image courante et rendre actif le point de défilement correspondant)
    function updateDisplay() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
        points.forEach((point, index) => {
            point.classList.toggle('actif', index === currentIndex);
        });
    }
});
