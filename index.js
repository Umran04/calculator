const div = document.getElementById('grid')
const screen = document.getElementById('screen')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
let tokens = []
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
                screen.textContent += button.textContent
            }

            if (button.textContent == '𝑥²'){
                let num = parseInt(screen.textContent)
                let result = square(num)
                screen.textContent = result
            }

            
            
            
            //ADD DIV MUL SUB FUNCS ASWELL
            //MAKE SURE IT FOLLOWS BIDMAS RULES
            //UNDERSTAND THE LOGIC WHEN '=' IS PRESSED
            //CHAIN THE METHODS -> E.G 2 + 2 = 4, + 5 = 9
            //PUT ALL LOGIC HERE I THINK
        })
        

        


        
        div.appendChild(tempDiv)
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
    if(a || b == 0){
        screen.textContent = 'ERROR'
    }else{
        return a / b
    }
}

clearBtn.addEventListener('click', () => {
    screen.textContent = ''
})

deleteBtn.addEventListener('click', () =>{
    let current = screen.textContent
    if (current){
        let newString = current.slice(0,-1)
        screen.textContent = newString
    }
})

function square(n){
    return n * n
}





createBtn(rowOne)
createBtn(rowTwo)
createBtn(rowThree)
createBtn(rowFour)

