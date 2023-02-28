/* eslint-disable operator-linebreak, implicit-arrow-linebreak */

import Ship, { ShipService } from './ship.js'

export const GameboardService = (() => {
  const display = (board) => board.map((boardRow) => boardRow.map((pos) => (pos === 0 ? 0 : 1)))

  const positionValidFor = (ship, row, col, board) => {
    const [rowOffset, colOffset] = ship.isVertical ? [1, 0] : [0, 1]

    for (let i = 0; i < ship.length; i++) {
      if (
        row + i * rowOffset >= 10 ||
        col + i * colOffset >= 10 ||
        board[row + i * rowOffset][col + i * colOffset] !== 0
      ) {
        return false
      }

      // checking whether it's next to an existing ship
      if (
        board[row + i * rowOffset + 1]?.[col + i * colOffset] ||
        board[row + i * rowOffset - 1]?.[col + i * colOffset] ||
        board[row + i * rowOffset]?.[col + i * colOffset + 1] ||
        board[row + i * rowOffset]?.[col + i * colOffset - 1]
      ) {
        return false
      }
    }

    return true
  }

  const allShipsSunkIn = (board) => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] && !ShipService.isSunk(board[row][col])) {
          return false
        }
      }
    }

    return true
  }

  const alreadyAttacked = (row, col, gameBoard) => {
    if (row < 0 || row >= gameBoard.board.length || col >= gameBoard.board.length || col < 0) return false

    const attacks = gameBoard.allAttacks

    for (let i = 0; i < attacks.length; i++) {
      const [r, c] = attacks[i]

      if (r === row && c === col) {
        return true
      }
    }

    return false
  }

  // Valid coordinates and not already attacked
  const validToPlay = (row, col, gameBoard) =>
    !alreadyAttacked(row, col, gameBoard) &&
    row > -1 &&
    row < gameBoard.board.length &&
    col > -1 &&
    col < gameBoard.board[0].length

  const neighborsVisibleShip = (row, col, gameBoard, except = null) => {
    for (let i = -1; i <= 1; i += 2) {
      const shipRow = row + i
      const shipCol = col + i

      const ship1 = gameBoard.board[shipRow]?.[col]
      const ship2 = gameBoard.board[row]?.[shipCol]

      if (
        (ship1 && ship1 !== except && alreadyAttacked(shipRow, col, gameBoard)) ||
        (ship2 && ship2 !== except && alreadyAttacked(row, shipCol, gameBoard))
      ) {
        return true
      }
    }

    return false
  }

  const aliveShipsOf = (gameBoard) => [...gameBoard.aliveShips]

  return {
    display,
    positionValidFor,
    allShipsSunkIn,
    alreadyAttacked,
    aliveShipsOf,
    validToPlay,
    neighborsVisibleShip,
  }
})()

export default function Gameboard() {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  const missedAttacks = []
  const allAttacks = []
  const hitAttacks = []

  const allShips = []
  const aliveShips = new Set()

  let lastSunkShip

  const getLastSunkShip = () => lastSunkShip

  const placeShip = (ship) => {
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 10)

    while (!GameboardService.positionValidFor(ship, row, col, board)) {
      row = Math.floor(Math.random() * 10)
      col = Math.floor(Math.random() * 10)
    }

    for (let i = 0; i < ship.length; i++) {
      board[row + i * ship.isVertical][col + i * !ship.isVertical] = ship
    }
  }

  const placeShipsInitial = () => {
    const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
    shipSizes.forEach((size) => {
      const ship = Ship(size, Math.random() >= 0.5)
      placeShip(ship)
      allShips.push(ship)
      aliveShips.add(ship)
    })
  }

  function receiveAttack(row, col) {
    if (GameboardService.alreadyAttacked(row, col, this)) return false

    allAttacks.push([row, col])

    if (board[row][col]) {
      hitAttacks.push([row, col])
      const ship = board[row][col]
      ship.hit(ShipService.hitPosition(row, col, board))
      if (ShipService.isSunk(ship)) {
        aliveShips.delete(ship)
        lastSunkShip = ship
      } else {
        lastSunkShip = null
      }
    } else {
      missedAttacks.push([row, col])
      lastSunkShip = null
    }

    return true
  }

  placeShipsInitial()

  return {
    board,
    receiveAttack,
    missedAttacks,
    allAttacks,
    hitAttacks,
    allShips,
    aliveShips,
    lastSunkShip,
    getLastSunkShip,
  }
}
