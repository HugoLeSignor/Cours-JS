//! 12.Title Case
// Renvoie la chaîne fournie avec la première lettre de chaque mot en majuscule.
// Assurez-vous que le reste du mot est en minuscules.

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(titleCase("Envie d'une raclette"))
