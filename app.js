document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 10
  const height = 20
  let score = 0
  let lines = 0
  let timerId
  let nextRandom = 0

  let currentIndex = 0

  const colors = [
    'url(images/blue_block.png)',
    'url(images/pink_block.png)',
    'url(images/purple_block.png)',
    'url(images/peach_block.png)',
    'url(images/yellow_block.png)'
  ]

  let squares = Array.from(grid.querySelectorAll('div'))

  //The Tetrominoes
  const lTetromino = [
    [1,width+1,width*2+1,2],
    [width,width+1,width+2,width*2+2],
    [1,width+1,width*2+1,width*2],
    [width,width*2,width*2+1,width*2+2]
  ]
  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]
  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]
  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]
  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]
  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  //Randomly Select Tetromino
  let random = Math.floor(Math.random()*theTetrominoes.length)
  let currentRotation = 0
  let current = theTetrominoes[random][currentRotation]

  //move the Tetromino moveDown
  let currentPosition = 4

  //assign functions to keycodes
  function control(e) {
    if(e.keyCode === 39) {
      moveright()
    } else if (e.keyCode ===38) {
      rotate()
    } else if (e.keyCode ===37) {
      moveleft()
    } else if (e.keyCode === 40) {
      moveDown()
    }
  }
  document.addEventListener('keyup', control)

  //draw the shape
  function draw() {
    current.forEach( index => {
      squares[currentPosition + index].classList.add('block')
      squares[currentPosition + index].style.backgroundImage = colors[random]
    })
  }
  //undraw the shape
  function undraw() {
    current.forEach( index => {
      squares[currentPosition + index].classList.remove('block')
      squares[currentPosition + index].style.backgroundImage = 'none'

    })
  }

  //Styling eventListeners
  const hamburgerBtn = document.querySelector('.toggler')
  const span = document.getElementsByClassName('close')[0]

  hamburgerBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
  })
  span.addEventListener('click', () => {
    menu.style.display = 'none'
  })
});