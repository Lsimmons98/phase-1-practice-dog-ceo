console.log('%c HI', 'color: firebrick')

const dogBreedList = document.getElementById('dog-breeds')
const dogImages = document.getElementById('dog-image-container')
const dropDownOptions = document.querySelectorAll('option')

const addBreedClickListener = (breed) => {
  document.getElementById(`${breed}`).addEventListener('click', () => {
    document.getElementById(`${breed}`).style.color = 'pink'
  })
}

const grabImages = () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(data => {
    data.message.forEach(dog => {
      const createImage = document.createElement('img')
      dogImages.appendChild(createImage).src =  `${dog}`
    })
  })
}

const grabBreeds = () => {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(data => {
    Object.keys(data.message).forEach(breed => {
      const createListItem = document.createElement('li')
      createListItem.id = `${breed}`
      dogBreedList.appendChild(createListItem).textContent = breed
      addBreedClickListener(breed)
    })
  })
  }


grabImages()
grabBreeds()

const listenerForOptions = () => {
  dropDownOptions.forEach(option => {
    option.addEventListener('click',() => {
      grabBreeds()
      
    } )
  })
}

listenerForOptions()


