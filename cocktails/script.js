const navItems = document.querySelectorAll('.nav-item')
const list = document.getElementById('list')
const modal = document.getElementById('modal')
const drinkImage = document.getElementById('drink-image')
const drinkName = document.getElementById('drink-name')
const drinkIngredients = document.getElementById('drink-ingredients')
const drinkInstructions = document.getElementById('drink-instructions')

navItems[0].classList.add('active')

async function fetchData(category) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    )
    const cocktailData = await response.json()
    addItems(cocktailData.drinks)
  } catch (error) {
    console.log(error)
  }
}

fetchData('Cocktail')

navItems.forEach(item => {
  item.addEventListener('click', function (event) {
    navItems.forEach(item => item.classList.remove('active'))
    event.currentTarget.classList.add('active')
    fetchData(event.currentTarget.id)
  })
})

async function fetchDrinkDetails(drinkId) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    )
    const data = await response.json()
    displayModal(data.drinks[0])
  } catch (error) {
    console.log(error)
  }
}

function displayModal(drink) {
  drinkName.textContent = drink.strDrink
  drinkImage.src = drink.strDrinkThumb
  drinkImage.alt = drink.strDrink

  drinkIngredients.innerHTML = ''
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`]
    const measure = drink[`strMeasure${i}`]

    if (ingredient) {
      const li = document.createElement('li')
      li.textContent = measure ? `${measure} ${ingredient}` : ingredient
      drinkIngredients.appendChild(li)
    }
  }

  drinkInstructions.textContent = drink.strInstructions

  modal.style.display = 'flex'
}

modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})

function addItems(drinks) {
  list.innerHTML = ''
  drinks.forEach(drink => {
    const container = document.createElement('div')
    container.classList.add('list-item', 'col-12', 'col-sm-3')
    const title = document.createElement('h3')
    title.textContent = drink.strDrink
    const thumbnail = document.createElement('img')
    thumbnail.setAttribute('src', drink.strDrinkThumb)
    thumbnail.classList.add('thumbnail')

    container.appendChild(thumbnail)
    container.appendChild(title)
    list.appendChild(container)

    container.addEventListener('click', () => {
      fetchDrinkDetails(drink.idDrink)
    })
  })
}
