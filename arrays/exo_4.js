//! 4. Créer une fonction : Inverser un tableau
// Créer une fonction reverseArray(arr) qui retourne le tableau inversé.

function reverseArray(arr) {
  return [...arr].reverse()
}

let arr = [1, 2, 3]
console.log(reverseArray(arr))
