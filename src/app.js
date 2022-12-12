// dom pieces

title;
description;
ideas;
submit;

// event pieces

submit.addEventListener('click', e => {
    e.preventDefault()
    addIdea(newIdea(title.value, description.value), ideas)
})

// functional pieces

const newIdea = (title, description) => {
    return {title, description}
}

const addIdea = (idea, entry) => {
    let div = document.createElement("div")
    div.innerHTML=`<h2>${idea.title}</h2>
    <p>${idea.description}</h2>`
    entry.appendChild(div)
}