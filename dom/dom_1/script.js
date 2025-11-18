const userInput = document.getElementById('userInput')
const message = document.getElementById('message')
const button = document.getElementById('button')

button.addEventListener('click', function() {
    if(userInput.value.includes('Bonjour')) {
        message.textContent = "Bonne journée !"
        message.style.color = 'green'
    } else if(userInput.value.includes('Au revoir')) {
        message.textContent = "A la prochaine !"
        message.style.color = 'black'
    } else {
        message.textContent = "Je ne comprend pas"
        message.style.color = 'red'
    }
})