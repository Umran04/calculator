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
        
        
        button.addEventListener('click', () => {
            
            if (button.textContent !== '𝑥²' && button.textContent !== '='){
                screen.textContent += button.textContent
            }
            
        })
        //TRY ADD SQR FUNCT FIRST
        //ADD DIV MUL SUB FUNCS ASWELL
        //MAKE SURE IT FOLLOWS BIDMAS RULES
        //UNDERSTAND THE LOGIC WHEN '=' IS PRESSED
        //CHAIN THE METHODS -> E.G 2 + 2 = 4, + 5 = 9
        //LOGIC FOR CLEAR AND DELETE BUTTONS


        //PUT ALL LOGIC ABOVE THIS LINE
        div.appendChild(tempDiv)
    }
}





createBtn(rowOne)
createBtn(rowTwo)
createBtn(rowThree)
createBtn(rowFour)

