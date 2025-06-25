function chargerEnTete(navigateurItems = []) {

    // Page d'acceuil ?
    const estAccueil = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

    //Inserssion de l'en tete
    fetch('enTete.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.createElement('header');

            // Si ce n'est pas la page d'accueil, on de la classe shrink
            if (!estAccueil) {
                // Ajout temporaire dans une div pour manipuler facilement le contenu HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                const headerEl = tempDiv.querySelector('#headerAnimé');
                if (headerEl) {
                    headerEl.classList.add('shrink');
                }

                data = tempDiv.innerHTML;
            }

            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);

            // Menu dynamique
            const navigateur = document.getElementById('menuDynamique');
            if (navigateur) {
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
