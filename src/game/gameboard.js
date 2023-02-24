/* eslint-disable operator-linebreak */

import Ship, { ShipService } from './ship'

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
        board[row + i * rowOffset + 1]?.[col + i * colOffset] !== 0 ||
        board[row + i * rowOffset - 1]?.[col + i * colOffset] !== 0 ||
        board[row + i * rowOffset]?.[col + i * colOffset + 1] !== 0 ||
        board[row + i * rowOffset]?.[col + i * colOffset - 1] !== 0
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

  return { display, positionValidFor, allShipsSunkIn }
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
    })
  }

  const receiveAttack = (row, col) => {
    if (board[row][col]) {
      const ship = board[row][col]
      ship.hit(ShipService.hitPosition(row, col, board))
    } else {
      missedAttacks.push([row, col])
    }
  }

  placeShipsInitial()

  return { board, receiveAttack, missedAttacks }
}
