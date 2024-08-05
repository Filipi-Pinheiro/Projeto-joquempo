let player = document.querySelector('.player')
let comput = document.querySelector('.comput')

let playerPoint = document.querySelector('.player_ponto')
let computPoint = document.querySelector('.comput_ponto')

let playerMove = ""
let computMove = ""

const options = document.querySelectorAll('.campo_option')

const commands = [
  "pedra tesoura",
  "papel pedra",
  "tesoura papel"
]

function randomMove() {
  const moves = [
    "pedra",
    "papel",
    "tesoura"
  ]
  const random = (max, min) =>
    Math.floor(Math.random() * (max - min +1)) + min
  const imageRandom = () => 
    moves[random(moves.length -1, 0)]
  computMove = imageRandom()
  comput.src = `src/imagens/${computMove}.png`
}

document.addEventListener('click', (event) => {
  if(event.target.matches('.option')){
    selectOption(event.target.id)
    randomMove()
    commandsMove()
    winnerGame()
  }
})

function selectOption(id){
  const option = document.getElementById(id);
  playerMove = option.id
  player.src = `src/imagens/${playerMove}.png`
}

function commandsMove(){
  const result = commands.indexOf(`${playerMove} ${computMove}`)
  if(result == -1 && computMove != playerMove) {
    computPoint.textContent = +computPoint.textContent + 1
  }
  else if (result != -1 && computMove != playerMove){
    playerPoint.textContent = +playerPoint.textContent + 1
  }
}

function resetGame(){
  playerPoint.textContent = "0"
  computPoint.textContent = "0"
}

function winnerGame(winner){
  if(computPoint.textContent == 10){
    alert('o computador venceu o jogo!')
    resetGame()
  }
  else if (playerPoint.textContent == 10){
    alert('você venceu o jogo!')
    resetGame()
  }
}
