//! 8. Filtrer les éléments pairs
// Écris une fonction filterEven(arr) qui retourne un tableau contenant uniquement les
// nombres pairs d'un tableau donné.

function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

let arr = [1, 2, 3, 4, 5];
console.log(filterEven(arr));