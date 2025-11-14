//! 10. Créer une fonction : Supprimer les doublons
// Écris une fonction removeDuplicates(arr) qui retourne un tableau sans les doublons.

function removeDuplicates(arr) {
  return [...new Set(arr)]
}

let arr = [1, 2, 2, 3, 1]
console.log(removeDuplicates(arr))
