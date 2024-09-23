// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    var menu = document.getElementById("menu");

    // Toggle la classe 'open' pour afficher ou masquer le menu
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
}

// Animation de transition entre les pages du menu déroulant
function navigateTo(pageId) {
    var content = document.getElementById("content");
    
    content.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = pageId + '.html'; // Change la page après l'animation
    }, 500); // Durée de l'animation
}