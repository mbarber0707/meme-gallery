var $gallery = document.querySelector('main')

var imageUrls = [
  'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png',
  'https://miro.medium.com/max/1400/0*r6iQzljiuJavVxRM',
  'https://miro.medium.com/max/1400/0*zGUf4rK4c4zsLq0U',
  'https://64.media.tumblr.com/2937ba40b6b6cf2ecbe8d00245cd43a5/tumblr_opsji9u3vN1uy57v5o1_1280.jpg',
  'https://pics.me.me/thumb_writing-a-feature-20-coding-80-staring-at-variables-in-72522746.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrr7mwsvIa5TZT50_ifkcFJPkXQP3GBNUNnw&usqp=CAU',
  'https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvrHG3IL8WSoaUpAK5dI8eDjYn93iQPPZ6A&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyc1jRLNgAmZU4BxfpmC-7vYfhs9N1MSxQg&usqp=CAU'];

var $imageUrlInput = document.querySelector('input')

var $addImageButton = document.querySelector('button')


$addImageButton.addEventListener('click', function () {
  console.log($imageUrlInput.value)

  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value)
    $imageUrlInput.value = ''
    updateGallery()
  }


})

function updateGallery() {
  $gallery.innerHTML = ''
  for (let v = 0; v < imageUrls.length; v++) {
    var $imageElement = document.createElement('img')
    $imageElement.className = 'gallery-image'
    $imageElement.src = imageUrls[v];
    $gallery.appendChild($imageElement)
  }
}

updateGallery();
