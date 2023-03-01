/* eslint-disable import/no-cycle */

import { GameboardService } from './game/gameboard.js'
import paintChooseDifficultyPage from './pages/choose_difficulty.js'

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

  const markupForAliveShips = (player) => {
    const playerAliveShipsEl = DomController.newElement('div', 'alive-ships')
    GameboardService.aliveShipsOf(player.gameBoard).forEach((ship) => {
      const aliveShipEl = DomController.newElement('div', 'alive-ship')
      aliveShipEl.setAttribute('aria-label', `${player.name} alive ship of length ${ship.length}`)

      for (let i = 0; i < ship.length; i++) {
        const shipBlock = DomController.newElement('span', 'ship-block')
        aliveShipEl.appendChild(shipBlock)
      }

      playerAliveShipsEl.appendChild(aliveShipEl)
    })

    return playerAliveShipsEl
  }

  const updateAliveShipsFor = (player, aliveShipsEl) => {
    const lastSunkShip = player.gameBoard.getLastSunkShip()
    if (lastSunkShip) {
      Array.from(aliveShipsEl.children).some((aliveShipEl) => {
        if (aliveShipEl.children.length === lastSunkShip.length) {
          aliveShipEl.remove()
          return true
        }

        return false
      })
    }
  }

  const newRoundUpdate = (player1, p1Row, p1Col, player2, p2Row, p2Col) => {
    const aliveShipsEls = Array.from(document.getElementsByClassName('alive-ships'))
    updateAliveShipsFor(player1, aliveShipsEls[0])
    updateAliveShipsFor(player2, aliveShipsEls[1])

    // if p1Row and p1Col are falsey, the player won therefore the computer can't make a move
    if (p1Row !== null && p1Col !== null) {
      // updating the player's board
      const player1TileBtn = DomController.byId(`${player1.name}_${p1Row}_${p1Col}`)
      player1TileBtn.classList.add('attacked')
      player1TileBtn.setAttribute('aria-label', `${player1TileBtn.getAttribute('aria-label')} attacked`)
    }

    // updating the computer's board
    const player2TileBtn = DomController.byId(`${player2.name}_${p2Row}_${p2Col}`)
    if (player2.gameBoard.board[p2Row][p2Col]) {
      player2TileBtn.classList.add('has-ship')
      player2TileBtn.setAttribute('aria-label', `${player2TileBtn.getAttribute('aria-label')} with ship`)
    }

    player2TileBtn.classList.add('attacked')
    player2TileBtn.setAttribute('aria-label', `${player2TileBtn.getAttribute('aria-label')} attacked`)
    player2TileBtn.setAttribute('tabindex', '-1')
  }

  const displayGameOver = (isHuman) => {
    const message = isHuman ? '🎉🎉 You won this battle! 🎉🎉' : '🤖🤖 The computer wins this time! 🤖🤖'
    const messageEl = DomController.newElement('h2', '', '', message)
    const playAgainBtn = DomController.newElement('button', '', '', 'Play again')
    playAgainBtn.addEventListener('click', () => {
      DomController.byId('content').innerHTML = ''
      paintChooseDifficultyPage()
    })

    DomController.addChildrenTo(DomController.byId('game-over'), [messageEl, playAgainBtn])
  }

  const displayUndestroyedShipsOf = (player) => {
    const shipsCoordinates = []
    const { gameBoard } = player

    for (let row = 0; row < gameBoard.board.length; row++) {
      for (let col = 0; col < gameBoard.board[0].length; col++) {
        if (gameBoard.board[row][col] && !GameboardService.alreadyAttacked(row, col, gameBoard)) {
          shipsCoordinates.push([row, col])
        }
      }
    }

    for (let i = 0; i < shipsCoordinates.length; i++) {
      const [row, col] = shipsCoordinates[i]
      const tileEl = DomController.byId(`${player.name}_${row}_${col}`)
      tileEl?.classList.add('has-ship')
      tileEl?.setAttribute('tabindex', '-1')
      tileEl?.setAttribute('aria-label', `${tileEl.getAttribute('aria-label')} with ship`)
    }
  }

  return {
    markupForBoard,
    markupForAliveShips,
    newRoundUpdate,
    displayGameOver,
    displayUndestroyedShipsOf,
  }
})()
