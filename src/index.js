//Hi everyone!!!

let addToy = false;
const toyCollection = document.querySelector('#toy-collection')

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

fetch ("http://localhost:3000/toys")
  .then(r => r.json)
  .then(data => {
    console.log(data)
    renderImage(data)
  })



// {
//   "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 5
// },
//creating function renderImage
function renderImage(image) {
  //image.forEach(image => {
    const li = document.createElement('li')
    li.className = 'list-li'

    const h3 = document.createElement('h3')
    h3.textContent = image.name
    li.append(h3)

    const img = document.createElement('img')
    img.src = image.image
    img.alt = `${image.name} cover`
    li.append(img)

    const like = document.createElement('p')
    


  //})
}