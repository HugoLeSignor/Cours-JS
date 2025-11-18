const mainImage = document.getElementById('mainImage')
const thumbnails = document.querySelectorAll('.thumbnail')

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        mainImage.src = thumbnail.src.replace('200/150', '600/400')
        mainImage.alt = thumbnail.alt
    })
})