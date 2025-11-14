//! 11. Vérifier si un tableau est trié
// Écris une fonction isSorted(arr) qui vérifie si les éléments d'un tableau sont triés dans
// l'ordre croissant.

function isSorted(arr) {
  return arr.every((item, index) => index === 0 || item >= arr[index - 1])
}

let sortedArr = [1, 2, 3]
let unsortedArr = [1, 3, 2]
console.log(isSorted(sortedArr))
console.log(isSorted(unsortedArr))
