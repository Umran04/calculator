const div = document.getElementById('grid')
const screen = document.getElementById('screen')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
let currentNum = ''

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
                currentNum += button.textContent
                screen.textContent = currentNum
                
            }

            if (button.textContent == '𝑥²'){
                let num = Number(screen.textContent)
                let result = square(num)
                screen.textContent = result
            }

            
            
            
            
            //UNDERSTAND THE LOGIC WHEN '=' IS PRESSED
            //CHAIN THE METHODS
            //PUT ALL LOGIC HERE I THINK
        })
        

        


        
        div.appendChild(tempDiv)
    }
}

function operate (operator, firstNum, secondNum){

    if(operator == '+'){
        return add(firstNum,secondNum)
    }else if(operator == '-'){
        return sub(firstNum,secondNum)
    }else if (operator == '×'){
        return mul(firstNum,secondNum)
    }else {
        return divide(firstNum,secondNum)
    }

}

function add(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mul(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

clearBtn.addEventListener('click', () => {
    currentNum = ''
    screen.textContent = ''
})

deleteBtn.addEventListener('click', () =>{
    if (currentNum){
        currentNum = currentNum.slice(0,-1)
        screen.textContent = currentNum
    }
})

function square(n){
    return n * n
}





createBtn(rowOne)
createBtn(rowTwo)
createBtn(rowThree)
createBtn(rowFour)

