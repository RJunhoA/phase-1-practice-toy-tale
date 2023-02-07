//Hi everyone!!!

let addToy = false;


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", (e) => {
    // hide & seek with the form
    //e.preventDefault()
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//Use fetch() to make a "GET" request, then render the returned toys to the DOM
function fetchImage() {
  fetch ("http://localhost:3000/toys")
    .then(r => r.json())
    .then(data => {
      console.log(data)
      renderImage(data)
    })
}
fetchImage()

//creating function renderImage
function renderImage(images) {
  const toyCollection = document.querySelector('#toy-collection')
  images.forEach(image => {
    const li = document.createElement('li')
    li.className = 'card'

    const h3 = document.createElement('h3')
    h3.textContent = image.name
    li.append(h3)

    const img = document.createElement('img')
    img.src = image.image
    img.alt = `${image.name} cover`
    img.className = 'toy-avatar'
    li.append(img)

    const pLike = document.createElement('p')
    if (image.likes > 1) {
      pLike.textContent.append('s')
    }
    pLike.textContent = `${image.likes} like`
    li.append(pLike)

    toyCollection.append(li)

  })
}