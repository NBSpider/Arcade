
let table = document.getElementById('board')
let button = document.getElementsByTagName('button')[0]
let cells = document.getElementsByClassName('cell')

let gameState = {}
const XPlayer = 'X'
const OPlayer = 'O'
const winArray = [[0,3,6], [0,1,2], [0,4,8], [1,4,7], [2,4,6], [2,5,8,], [3,4,5], [6,7,8]]

function newBoard() {
    return [
      "", "", "",
      "", "", "",
      "", "", ""
    ]
  }

// function that will setup initial game state
function resetInitialState() {
 gameState.board = newBoard()
 gameState.currentPlayer = 'X'
 
}

function placeMark(event){ 
    if(event.target.tagName === 'DIV'){
        if(event.target.innerText){
            return
        }
        let index = event.target.attributes['data-coordinates'].nodeValue
        gameState.board[index] = gameState.currentPlayer // updates JS Board
        event.target.innerText = gameState.currentPlayer // updates HTML board
        checkWin()
        switchPlayer()
        
    }
    

}

function switchPlayer(){

    if(gameState.currentPlayer === XPlayer){
       gameState.currentPlayer = OPlayer
    }
    else{
       gameState.currentPlayer = XPlayer
    }
}

function checkWin() {
    for (let i = 0; i < winArray.length; i++) {
        // const winArray = [[0,3,6], [0,1,2], [0,4,8], [1,4,7], [2,4,6], [2,5,8,], [3,4,5], [6,7,8]]
        let cell1 = gameState.board[winArray[i][0]] // i.e. gameState.board[0]
        let cell2 = gameState.board[winArray[i][1]] // i.e. gameSTate.board[3]
        let cell3 = gameState.board[winArray[i][2]] // i.e gameState.board[6]

        // if statement seeing if cell1 cell2 and cell3 are equal to each other 
        // if they are then you have a winner

        if (cell1 === cell2 && cell2 === cell3) {
            if (cell1 !== '') {

                endGame()
            }
        }
    }
}

function endGame(event){
    document.getElementById('winMessage').innerText = gameState.currentPlayer + ' Wins!' 
    table.removeEventListener('click', placeMark) 
}

table.addEventListener('click', placeMark)
button.addEventListener('click', function(){
    for(let i = 0; i < cells.length; i++){
        console.log(cells[i])
        cells[i].innerText = ''
    }
    document.getElementById('winMessage').innerText = ''
table.addEventListener('click', placeMark)    
resetInitialState()
})
    


resetInitialState()
