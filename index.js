const div = document.getElementById('grid')

let rowOne = ['7','8','9','/']
let rowTwo = ['4','5','6','X']
let rowThree = ['1','2','3','-']
let rowFour = ['.','0','=','+']

function createBtn(array){
    const tempDiv = document.createElement('div')
    tempDiv.classList.add('div')

    for(let i = 0; i <array.length; i++){
        
        const button = document.createElement('button')
        button.classList.add('button')
        button.textContent = array[i]
        tempDiv.appendChild(button)
        div.appendChild(tempDiv)
    }

    

}

createBtn(rowOne)
createBtn(rowTwo)
createBtn(rowThree)
createBtn(rowFour)

