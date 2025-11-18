const filterInput = document.getElementById('filterInput')
const countryList = document.getElementById('countryList')
const countries = countryList.querySelectorAll('li')

filterInput.addEventListener('input', function() {
    const filterText = filterInput.value.toLowerCase()
    
    countries.forEach(function(country) {
        const countryName = country.textContent.toLowerCase()
        
        if(countryName.includes(filterText)) {
            country.style.display = ''
        } else {
            country.style.display = 'none'
        }
    })
})
