function chargerEnTete(navigateurItems = []) {

    // ======================= Création de l'en tête en fonction de la page courante =======================
    const estAccueil = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

    //Récupération du fichier enTete.html
    fetch('enTete.html')
        .then(response => response.text())
        .then(data => {

            //Création d'une balise html "header"
            const enTete = document.createElement('header');
            //Insertion du contenue de "enTete.html" dans la balise html "header"
            enTete.innerHTML = data;

            //Récupération du première élément HTML de l'en-tête
            const enTeteElementParent = enTete.querySelector('#headerAnimé');

            //Vérification de la page courante
            if(!estAccueil) { //Si ce n'est pas la page d'accueil, on applique le style réduit (voir CSS)
                enTeteElementParent.classList.add('shrink');
            }

            //Insertion de l'en-tête dans la page courante
            document.body.insertBefore(enTete, document.body.firstChild);

            // ======================= Gestion du menu dynamique =======================
            //Création dynamique du navigateur
            const navigateur = document.querySelector('#menuDynamique');
            console.log('Navigatuer', navigateur);
            if (navigateur && navigateurItems) {
                navigateurItems.forEach(item => {
                    const baliseLi = document.createElement('li');
                    baliseLi.innerHTML = `<a href="${item.href}">${item.text}</a>`;
                    navigateur.appendChild(baliseLi);
                });
            }

            const header = document.getElementById('headerAnimé');
            const headerHauteur = header.offsetHeight;
            document.body.style.paddingTop = headerHauteur + 'px';

            // Scroll behavior
            document.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    header.classList.add('shrink');
                } else if (estAccueil) {
                    header.classList.remove('shrink');
                }
            });
        });
}
