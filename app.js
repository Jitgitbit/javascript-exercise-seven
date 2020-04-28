document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 10
  const height = 20
  let score = 0
  let lines = 0
  let timerId
  let nextRandom = 0

  let currentIndex = 0
  let currentRotation = 0

  const colors = [
    'url(images/blue_block.png)',
    'url(images/pink_block.png)',
    'url(images/purple_block.png)',
    'url(images/peach_block.png)',
    'url(images/yellow_block.png)'
  ]

});