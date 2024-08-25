document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");
  const projectButtons = document.querySelectorAll(".btn[data-project]");

  const projectData = {
    1: {
      title: "Projet Viet",
      description:
        "Le Projet Viet était une initiative visant à créer un site vitrine pour un restaurant vietnamien, accompagné d'un système de gestion de contenu (CMS) personnalisé. Bien que le projet ait été annulé, il a permis d'explorer des technologies modernes comme TypeScript, Prisma et Tailwind CSS. L'objectif était de fournir une plateforme élégante et facile à gérer pour le restaurant, mettant en valeur leur menu, leur histoire et leurs services.",
      status: "Annulé",
      technologies: ["TypeScript", "Prisma", "Tailwind CSS"],
      github: "https://github.com/JLMael/vietwok",
    },
    2: {
      title: "DofusNoobTraveller",
      description:
        "DofusNoobTraveller est un script Python conçu pour automatiser certaines actions dans le jeu Dofus. Il permet de changer de fenêtre, de coller du texte et d'appuyer sur la touche Entrée, facilitant ainsi certaines tâches répétitives pour les joueurs. Ce projet, bien que simple, démontre une compréhension de l'automatisation de base et de l'interaction avec l'interface utilisateur via Python.",
      status: "Terminé",
      technologies: ["Python"],
      github: "https://github.com/JLMael/DofusNoobTraveller",
    },
    3: {
      title: "Projet Snack",
      description:
        "Le Projet Snack est un site web personnel en cours de développement qui vise à répertorier tous les snacks, leur carte et leurs prix dans les environs. Utilisant TypeScript pour une programmation robuste, Tailwind pour un design responsive et du CSS personnalisé pour des touches uniques, ce projet combine fonctionnalité et esthétique. Il s'agit d'une ressource pratique pour les amateurs de snacks locaux.",
      status: "En cours",
      technologies: ["TypeScript", "Tailwind CSS", "CSS"],
      github: "https://github.com/JLMael/MenuSnack",
    },
    4: {
      title: "Fork BotClient",
      description:
        "Dans ce projet, j'ai personnalisé l'interface d'une application développée en React pour répondre à des besoins spécifiques personnels. En ajustant les composants et les styles, j'ai adapté l'application pour qu'elle corresponde à mes préférences esthétiques et fonctionnelles. Cette expérience m'a permis de perfectionner mes compétences en React, notamment en matière de gestion des états, de styling et de personnalisation d'interface utilisateur. Ce projet démontre ma capacité à modifier des applications existantes pour les aligner sur des exigences individuelles et à optimiser leur apparence et leur convivialité.",
      status: "Annulé",
      technologies: ["React"],
      github: "https://github.com/JLMael/BotClient",
    },
    5: {
      title: "Projet Potichat",
      description:
        "Ce projet marque mes premiers pas dans le développement web, avant même d'entamer une formation formelle. Il s'agit d'une galerie d'images dédiée aux photos de chats, entièrement réalisée en HTML et CSS. À travers ce projet, j'ai acquis une compréhension de base des structures HTML et des styles CSS, en apprenant à créer un design simple mais fonctionnel. Cette expérience a solidifié ma passion pour le développement web et m'a motivé à poursuivre une formation plus approfondie.",
      status: "Annulé",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/JLMael/lopotichat",
    },
    6: {
      title: "Projet TwitchScraping",
      description:
        "Dans ce projet, j'ai réalisé du scrapping de données pour collecter les informations nécessaires à l'entraînement d'un modèle de langage large (LLM). J'ai structuré et stocké ces données dans une base de données dédiée. Cette étape est essentielle pour le développement futur de l'IA. La phase suivante implique la création et l'entraînement du modèle d'IA, son hébergement, ainsi que son déploiement public via une extension Google. Ce projet m'a permis de renforcer mes compétences en extraction de données, en gestion de bases de données, et en préparation pour le déploiement de solutions d'intelligence artificielle.",
      status: "En cours",
      technologies: ["TypeScript", "Tailwind CSS", "CSS"],
      github: "https://github.com/JLMael/Twitch-Data-Scraping",
    },
  };

  // Fonction pour ouvrir la modal
  const openModal = (projectId) => {
    const project = projectData[projectId];
    if (project) {
      modalTitle.textContent = project.title;
      modalDescription.innerHTML = `
        <p><strong>Statut:</strong> ${project.status}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
        <p>${project.description}</p>
        <p><a href="${
          project.github
        }" target="_blank" rel="noopener noreferrer" class="btn">Voir sur GitHub</a></p>
      `;
      modal.style.display = "block";
    }
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    modal.style.display = "none";
  };

  // Ajouter des écouteurs d'événements aux boutons de projet
  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.getAttribute("data-project");
      openModal(projectId);
    });
  });

  // Fermer la modal quand on clique sur le bouton de fermeture
  closeBtn.addEventListener("click", closeModal);

  // Fermer la modal quand on clique en dehors
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Fermer la modal avec la touche Echap
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");

  // Optionnel: Ajuster la vitesse du défilement
  const scrollSpeed = 20; // Plus élevé = plus rapide

  function adjustAnimationSpeed() {
    const totalWidth = carouselInner.scrollWidth;
    carouselInner.style.animationDuration = `${totalWidth / scrollSpeed}s`;
  }

  // Ajuster la vitesse au chargement initial
  adjustAnimationSpeed();

  // Réajuster la vitesse lorsque la fenêtre est redimensionnée
  window.addEventListener("resize", adjustAnimationSpeed);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  function toggleMenu() {
    navUl.classList.toggle("show");
    menuToggle.classList.toggle("active");
    menuToggle.textContent = menuToggle.classList.contains("active")
      ? "✕"
      : "☰";
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Fermer le menu si on clique en dehors
  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      navUl.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInsideNav && navUl.classList.contains("show")) {
      toggleMenu();
    }
  });
});
a;
