//! 3. Prochaine date dans une semaine
// Écris une fonction qui prend une date en entrée et retourne la date qui est exactement une
// semaine plus tard.

function addOneWeek(date) {
  date.setDate(date.getDate() + 7);
  return date;
}

const today = new Date('2025-11-17');
console.log(today.toLocaleDateString('fr-FR'));
console.log(addOneWeek(today).toLocaleDateString('fr-FR'));


