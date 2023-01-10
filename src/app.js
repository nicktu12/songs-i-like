// dom pieces
dom_title
dom_description
dom_ideas
dom_submit
dom_error

// data model
let data_ideas = JSON.parse(localStorage.getItem('ideas')) || []

// event pieces
dom_submit.addEventListener('click', e => {
    e.preventDefault()
    if (dom_title.value.length > 0 && dom_description.value.length > 0) {
        addIdea(data_ideas, newIdea(dom_title.value, dom_description.value))
        clearElements([dom_title, dom_description], [dom_error])
    } else {
        addError(dom_error)
    }
})

dom_ideas.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id.includes('-delete')) {
        let id = e.target.id.split('-')[0] 
        deleteIdea(data_ideas, id)
    }
})

// functional pieces
const newIdea = (title, description) => {
    return {title, description, id: Date.now(), star: false}
}

const addIdea = (ideas, idea) => {
    ideas.push(idea)
    sync()
}

// NOTE: currying
const hydrateDiv = (idea) => {
    return (div) => {
        div.id = idea.id + '-container'
        div.innerHTML=`<h2>${idea.title}</h2>
        <p>${idea.description}</p>
        <span class="${idea.star ? `${idea.id}-star` : ``}"></span>
        <button id="${idea.id}-delete">delete</button>`
        return div
    }
    
}

// NOTE: currying
const drawIdeas = (element) => {
    element.innerHTML = ''
    return (ideas) => ideas.forEach(idea => {
        let div = document.createElement("div")
        element.appendChild(hydrateDiv(idea)(div))
    })
   
}

const deleteIdea = (ideas, deleted) => {
    data_ideas = ideas.filter(idea => idea.id !== parseInt(deleted))
    sync()
}

const addError = (element) => {
    element.innerHTML="please fix error"
}

// NOTE: higher order function 
const clearElements = (inputs, elements) => {
    inputs.forEach(input => input.value = '')
    elements.forEach(el => el.innerHTML = '')
}

// sync functions
const sync = () => {
    updateDom()
    syncToLocalStorage(data_ideas)
}

// NOTE: currying
const updateDom = () => {
    drawIdeas(dom_ideas)(data_ideas)
}

const syncToLocalStorage = () => {
    localStorage.setItem('ideas', JSON.stringify(data_ideas))
}

sync()