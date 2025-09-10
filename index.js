const div = document.getElementById('grid')
const screen = document.getElementById('screen')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
let currentNum = ''
let firstNum = ''
let secondNum = ''
let operator = ''
let displayExpr = ''

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
            
            if (!isNaN(button.textContent)) {
                currentNum += button.textContent
                displayExpr += button.textContent
                screen.textContent = displayExpr
            }
        
            
            else if (['+','-','×','÷'].includes(button.textContent)) {
                if (firstNum === '') {
                    firstNum = Number(currentNum)
                    currentNum = ''
                } else {
                    secondNum = Number(currentNum)
                    firstNum = operate(operator, firstNum, secondNum)
                }
        
                operator = button.textContent
                currentNum = ''
                displayExpr += ' ' + operator + ' '
                screen.textContent = displayExpr
            }
        
            
            else if (button.textContent === '=') {
                secondNum = Number(currentNum)
                let result = operate(operator, firstNum, secondNum)
                screen.textContent = result
                firstNum = result
                currentNum = ''
                secondNum = ''
                operator = ''
                displayExpr = result.toString()
            }
        
            
            else if (button.textContent === '𝑥²') {
                let num = Number(screen.textContent)
                let result = num * num
                screen.textContent = result
                firstNum = result
                currentNum = ''
                secondNum = ''
                operator = ''
                displayExpr = result.toString()
            }
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
    }else if(operator == '÷'){
        return divide(firstNum,secondNum)
    }else{
        return NaN
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
    operator = ''
    firstNum = ''
    secondNum = ''
    displayExpr = ''
    screen.textContent = displayExpr
})

deleteBtn.addEventListener('click', () =>{
    if (currentNum){
        currentNum = currentNum.slice(0,-1)
        screen.textContent = currentNum
    }
})







createBtn(rowOne)
createBtn(rowTwo)
createBtn(rowThree)
createBtn(rowFour)

