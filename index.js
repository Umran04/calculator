const div = document.getElementById('grid')
const screen = document.getElementById('screen')

let rowOne = ['7','8','9','÷']
let rowTwo = ['4','5','6','×']
let rowThree = ['1','2','3','-']
let rowFour = ['𝑥²','0','=','+']

function createBtn(array){
    const tempDiv = document.createElement('div')
    tempDiv.classList.add('div')

    for(let i = 0; i <array.length; i++){
        
        const button = document.createElement('button')
        button.classList.add('button')
        button.textContent = array[i]
        tempDiv.appendChild(button)
        div.appendChild(tempDiv)

        button.addEventListener('click', () => {
            screen.textContent = button.textContent
        })
    }

    

}

createBtn(rowOne)
createBtn(rowTwo)
createBtn(rowThree)
createBtn(rowFour)

