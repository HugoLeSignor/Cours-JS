// Navigation commune - à inclure dans toutes les pages
function createNavbar(activePage = '') {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-container">
            <h1>🚀 Cours JavaScript</h1>
            <ul class="nav-links">
                <li><a href="/index.html" class="${activePage === 'home' ? 'active' : ''}">🏠 Accueil</a></li>
                <li><a href="/cocktails/index.html" class="${activePage === 'cocktails' ? 'active' : ''}">🍹 Cocktails</a></li>
                <li><a href="/simpleBtn/index.html" class="${activePage === 'simpleBtn' ? 'active' : ''}">🔘 Buttons</a></li>
                <li><a href="/stopwatch/index.html" class="${activePage === 'stopwatch' ? 'active' : ''}">⏱️ Stopwatch</a></li>
                <li><a href="/tasklist/index.html" class="${activePage === 'tasklist' ? 'active' : ''}">✅ Tasks</a></li>
            </ul>
        </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);
}

// Appeler cette fonction au chargement de la page
// Exemple : createNavbar('home');
