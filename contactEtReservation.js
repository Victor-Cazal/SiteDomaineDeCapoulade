
document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById('contactFormulaire');
    const confirmation = document.getElementById('confirmation');

    formulaire.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.send("service_6til1zd", "template_qo43aod", {
            nom: formulaire.nom.value,
            email: formulaire.email.value,
            message: formulaire.message.value,
            objet : formulaire.objet.value,
        })
            .then(function () {
                confirmation.textContent = "Message envoyé avec succès !";
                confirmation.style.color = "green";
                formulaire.reset();
            }, function (error) {
                confirmation.textContent = "Une erreur est survenue...";
                confirmation.style.color = "red";
                console.error("Erreur :", error);
            });
    });
});
