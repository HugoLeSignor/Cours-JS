const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const calculate = document.getElementById('calculate')
let result = document.getElementById('result')

calculate.addEventListener('click', function() {
    const sum = Number(number1.value) + Number(number2.value)
    result.textContent = "Résultat : " + sum
})

