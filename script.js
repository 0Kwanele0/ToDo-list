
const submitButton = document.querySelector(".btn")
const input = document.querySelector(".input")
const ol = document.querySelector(".ol")
const theList = document.getElementsByTagName('li')

submitButton.addEventListener('click', (e)=>{
    e.defaultPrevented

    const list = document.createElement('li')

    
    if (input.value !== ""){
        list.innerText = input.value
        ol.appendChild(list)
        input.value = ""
    }
    
    list.addEventListener('contextmenu', (e)=>{
        e.preventDefault()
        list.remove()
    })
    list.addEventListener('click', ()=>{
        if (list.className !== 'done'){
            list.className = 'done'
        }
        else{
            list.className = ''
        }
    })
})
