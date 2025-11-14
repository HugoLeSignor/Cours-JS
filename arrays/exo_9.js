//! 9. Créer une fonction : Fusionner deux tableaux
// Crée une fonction mergeArrays(arr1, arr2) qui fusionne deux tableaux en un seul,
// sans utiliser concat().

function mergeArrays(arr1, arr2) {
  const result = []
  for (const item of arr1) result.push(item)
  for (const item of arr2) result.push(item)
  return result
}

let arr1 = [1, 2]
let arr2 = [3, 4]
console.log(mergeArrays(arr1, arr2))
