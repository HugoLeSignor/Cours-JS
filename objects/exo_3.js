//! 3. Prochaine date dans une semaine
// Écris une fonction qui prend une date en entrée et retourne la date qui est exactement une
// semaine plus tard.

function addOneWeek(date) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 7);
  return newDate;
}

const today = new Date('2025-11-17');
console.log(today.toLocaleDateString('fr-FR'));
console.log(addOneWeek(today).toLocaleDateString('fr-FR'));


