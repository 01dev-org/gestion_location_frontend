document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/layout/navbar.html");
    loadComponent("footer", "components/layout/footer.html");
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Erreur lors du chargement de ${url}`, error));
}
