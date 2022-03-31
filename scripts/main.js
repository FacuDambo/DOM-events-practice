// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall

// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje 
// 2.1- Evitar que el input quede vacío.

// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado 

// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti

// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti 

// BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales


let submit = document.querySelector("form");
let inputText = document.querySelector("#input-text");
let color = document.querySelector("#color");
let checkBox = document.querySelector("#is-poster")

function renderDiv (id) {
    const wallDiv = document.querySelector(id)
    const inputValue = inputText.value;

    let createDiv = document.createElement("div")
    createDiv.classList.add("mensaje")
    createDiv.classList.add(checkBox.checked ? "poster" : "graffiti")
    createDiv.innerHTML = `
    <span class="close">&times;</span>
    <p>${inputValue}</p>`

    createDiv.style.color = color.value

    wallDiv.appendChild(createDiv)
}

submit.addEventListener("submit", (e) => {
    e.preventDefault()
    renderDiv("#wall")
    inputText.value = ""
    color.value = ""
})




let delButton = document.querySelector("#wall");

delButton.addEventListener("click", function(event) {
    if (event.target.nodeName === "SPAN") {
        let objetoEliminar = event.target.parentNode
        delButton.removeChild(objetoEliminar)
    }
})

