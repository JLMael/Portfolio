document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = contactForm.nom.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire
    // à un serveur ou les traiter d'une autre manière.
    console.log("Formulaire soumis :", { nom, email, message });

    // Réinitialiser le formulaire
    contactForm.reset();

    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.getElementsByClassName("close")[0];
  const projectButtons = document.querySelectorAll(".btn[data-project]");

  // Données des projets (à remplacer par vos propres données)
  const projectData = {
    1: {
      title: "Projet 1",
      description:
        "Description détaillée du projet 1. Vous pouvez ajouter ici autant d'informations que vous le souhaitez sur ce projet.",
    },
    2: {
      title: "Projet 2",
      description:
        "Description détaillée du projet 2. Expliquez les technologies utilisées, les défis rencontrés, etc.",
    },
    3: {
      title: "Projet 3",
      description:
        "Description détaillée du projet 3. Expliquez les technologies utilisées, les défis rencontrés, etc.",
    },
    // Ajoutez d'autres projets ici
  };

  projectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const project = projectData[projectId];

      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
