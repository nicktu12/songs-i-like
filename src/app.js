// dom pieces

title;
description;
ideas;
submit;
error;

// event pieces

submit.addEventListener('click', e => {
    e.preventDefault()
    if (title.value.length > 0 && description.value.length > 0) {
        addIdea(newIdea(title.value, description.value), ideas)
        clearElements([title, description], [error])
    } else {
        addError(error)
    }
})

// functional pieces

const newIdea = (title, description) => {
    return {title, description, id: Date.now(), star: false}
}

const addIdea = (idea, element) => {
    let div = document.createElement("div")
    div.innerHTML=`<h2>${idea.title}</h2>
    <p>${idea.description}</p>
    <span>${idea.star ? '⭐️' : '☆'}</span>`
    element.appendChild(div)
}

const addError = (element) => {
    element.innerHTML="please fix error"
}

const clearElements = (inputs, elements) => {
    inputs.forEach(input => input.value = '')
    elements.forEach(el => el.innerHTML = '')
}