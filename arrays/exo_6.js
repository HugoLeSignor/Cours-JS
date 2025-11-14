//! 6.Trouver l'élément le plus fréquent dans un tableau
// Écris une fonction mostFrequent(arr) qui retourne l'élément le plus fréquent dans un
// tableau.

function mostFrequent(arr) {
  const freqMap = {};
  arr.forEach(item => freqMap[item] = (freqMap[item] || 0) + 1);
  return Object.keys(freqMap).reduce((a, b) => freqMap[a] > freqMap[b] ? a : b);
}

let arr = [1, 2, 1, 3, 1];
console.log(mostFrequent(arr)); 