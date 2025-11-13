// 11.Table des multiplications
// Faire le tableau des multiplications de 0 à 9
// Tables de multiplication

for (let i = 0; i <= 9; i++) {
  let ligne = `${i}`
  for (let j = 0; j <= 9; j++) {
    ligne += ` ${(i * j).toString().padStart(2)}`
  }
  console.log(ligne)
}
