console.log('%c HI', 'color: firebrick')
let dogsList
const dogBreedList = document.getElementById('dog-breeds')
const dogImages = document.getElementById('dog-image-container')
const dropDownOptions = document.querySelectorAll('option')
const breedDropDown = document.getElementById('breed-dropdown')

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
    dogsList = data.message
    return data
  })
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


breedDropDown.onchange = () => {
  const filteredDogsList = Object.keys(dogsList).filter(dog =>  dog.startsWith(breedDropDown.value))
  dogBreedList.innerHTML = ''
  filteredDogsList.forEach(breed => {
    const createListItem = document.createElement('li')
    createListItem.id = `${breed}`
    dogBreedList.appendChild(createListItem).textContent = breed
    addBreedClickListener(breed)})
}



