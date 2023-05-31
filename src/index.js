const ramenAPI = `http://localhost:3000/ramens`
const ramenMenuElement = document.getElementById("ramen-menu")
let ramenList = []

fetch(ramenAPI)
    .then(res => res.json())
    .then(renderRamens)

function renderRamens(ramens) {
    ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
    const imgElement = document.createElement('img')
    imgElement.classList.add('ramen-img')
    imgElement.src = `${ramen.image}`
    imgElement.alt = `${ramen.name} from ${ramen.restaurant}`

    ramenMenuElement.append(imgElement)
}

//create button from image and display on #ramen-details