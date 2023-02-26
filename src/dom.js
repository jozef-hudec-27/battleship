export const DomController = (() => {
  const newElement = (type, cls = '', id = '', text = '') => {
    const element = document.createElement(type)
    element.setAttribute('class', cls)
    element.id = id
    element.textContent = text

    return element
  }

  const addChildrenTo = (element, children) => {
    children.forEach((child) => element.appendChild(child))
  }

  const byId = (id) => document.getElementById(id)

  return { newElement, addChildrenTo, byId }
})()

export const DomGame = (() => {
  const markupForBoard = (board, name) => {
    const boardEl = DomController.newElement('section', `${name}-board`)

    for (let row = 0; row < board.length; row++) {
      const rowEl = DomController.newElement('div', 'row')

      for (let col = 0; col < board[0].length; col++) {
        const tileBtn = DomController.newElement('button')
        tileBtn.id = `${name}_${row}_${col}`
        rowEl.appendChild(tileBtn)
      }

      boardEl.appendChild(rowEl)
    }

    return boardEl
  }

  const newRoundUpdate = (player1, p1Row, p1Col, player2, p2Row, p2Col) => {
    if (p1Row && p1Col) { // if they are falsey, the player won therefore the computer can't make a move
      // updating the player's board
      const player1TileBtn = DomController.byId(`${player1.name}_${p1Row}_${p1Col}`)
      player1TileBtn.classList.add('attacked')
    }

    // updating the computer's board
    const player2TileBtn = DomController.byId(`${player2.name}_${p2Row}_${p2Col}`)
    player2TileBtn.classList.add('attacked')
    player2TileBtn.setAttribute('tabindex', '-1')
    if (player2.gameBoard.board[p2Row][p2Col]) player2TileBtn.classList.add('has-ship')
  }

  return { markupForBoard, newRoundUpdate }
})()
