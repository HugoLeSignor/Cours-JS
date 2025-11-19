const mainImage = document.getElementById('mainImage')
const thumbnails = document.querySelectorAll('.thumbnail')

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        mainImage.src = thumbnail.src
    })
})