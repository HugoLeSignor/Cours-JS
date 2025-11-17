//! 1. Calcul de l'âge
// Écris une fonction qui prend en entrée une date de naissance (au format YYYY-MM-DD) et
// retourne l'âge de la personne en années.

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  return age;
}

const birthdayDate = '1990-05-15';
console.log(`age: ${calculateAge(birthdayDate)}`);