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

  //move left and prevent collisions with shapes moving left
  function moveright() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if(!isAtRightEdge) currentPosition += 1
    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition -= 1
    }
    draw()
  }
  //move right and prevent collisions with shapes moving right
  function moveleft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -= 1
    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition += 1
    }
    draw()
  }
  //Rotate the Tetromino
  function rotate() {
    undraw()
    currentRotation ++
    if(currentRotation === current.length) {
      currentRotation=0
    }
    current = theTetrominoes[random][currentRotation]
    draw()
  }

  //show previous tetromino in scoreDisplay
  const displayWidth = 4
  const displaySquares = document.querySelectorAll('.previous-grid div')
  let displayIndex = 0

  const smallTetrominoes = [
    [1,displayWidth+1,displayWidth*2+1,2], /* lTetromino */
    [0,displayWidth,displayWidth+1,displayWidth*2+1],  /* zTetromino */
    [1,displayWidth,displayWidth+1,displayWidth+2],    /* tTetromino */
    [0,1,displayWidth,displayWidth+1],     /* oTetromino */
    [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1]  /* iTetromino */
  ]

  function displayShape() {
    displaySquares.forEach(square => {
      square.classList.remove('block')
      square.style.backgroundImage = 'none'
    })
    smallTetrominoes[nextRandom].forEach( index => {
      displaySquares[displayIndex + index].classList.add('block')
      displaySquares[displayIndex + index].style.backgroundImage = colors[nextRandom]
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