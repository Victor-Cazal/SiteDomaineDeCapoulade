//Charger le pied de page
function chargerPiedDePage(lienItems) {
    console.log('liensItems reçus:', lienItems);
    fetch('piedDePage.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau lors du chargement du pied de page');
            }
            return response.text();
        })
        .then(data => {

            // Création du footer
            const footer = document.createElement('footer');
            footer.innerHTML = data;
            document.body.appendChild(footer);

            // Création dynamique des liens "droit image"
            const liens = footer.querySelector('.droitImage');
            console.log('liens:', liens);
            if (liens && lienItems) {
                lienItems.forEach(item => {
                    const baliseA = document.createElement('a');
                    baliseA.href = item.href;
                    baliseA.textContent = item.text;
                    liens.appendChild(baliseA);
                });
            }
        })
        .catch(err => {
            console.error('Erreur chargement pied de page :', err);
        });
}