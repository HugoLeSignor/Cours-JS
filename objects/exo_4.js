//! 4. Nombre de jours restants jusqu'à une date spécifique
// Créer une fonction qui calcule le nombre de jours restants jusqu'à une date spécifique dans
// le futur (comme Noël, le Nouvel An, etc.).

function daysUntil(targetDate) {
  const today = new Date();
  const target = new Date(targetDate);
  const diff = target - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

console.log(daysUntil('2025-12-25'));