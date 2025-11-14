//! 5. Compter les occurrences d'un élément dans un tableau
// Crée une fonction countOccurrences(arr, value) qui retourne le nombre de fois que
// value apparaît dans le tableau.

function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length
}

let arr = [1, 2, 1, 3, 1]
console.log(countOccurrences(arr, 1))
