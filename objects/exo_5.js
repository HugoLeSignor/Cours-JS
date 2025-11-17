//! 5. Formatage personnalisé d'une date
// Écris une fonction qui prend une date en entrée et la formate sous la forme "Jour de la
// semaine mois jour année". Utilise toLocaleDateString() pour obtenir le format
// correct.

function formatCustomDate(date) {
    const formatDate = new Date(date);
    return formatDate.toLocaleDateString('fr-FR', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });
}

console.log(formatCustomDate('2025-12-25'));