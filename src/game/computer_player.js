/* eslint-disable operator-linebreak, no-lonely-if, no-continue */

import Gameboard, { GameboardService } from './gameboard.js'
import { GameService } from './game.js'
import { ShipService } from './ship.js'

export const ComputerPlayerService = (() => {
  const easyAlgoGetCoordinates = (gameBoard) => {
    for (let i = 0; i < gameBoard.hitAttacks.length; i++) {
      const [hitRow, hitCol] = gameBoard.hitAttacks[i]

      for (let j = -1; j <= 1; j += 2) {
        if (!GameboardService.alreadyAttacked(hitRow + j, hitCol, gameBoard)) {
          if (hitRow + j > -1 && hitRow + j < gameBoard.board.length) return [hitRow + j, hitCol]
        }

        if (!GameboardService.alreadyAttacked(hitRow, hitCol + j, gameBoard)) {
          if (hitCol + j > -1 && hitCol + j < gameBoard.board[0].length) return [hitRow, hitCol + j]
        }
      }
    }

    return [-1, -1]
  }

  const hardAlgoGetCoordinates = (gameBoard) => {
    for (let i = 0; i < gameBoard.hitAttacks.length; i++) {
      const [hitRow, hitCol] = gameBoard.hitAttacks[i]
      const hitShip = gameBoard.board[hitRow][hitCol]

      if (ShipService.isSunk(hitShip)) continue

      // if the ship has been hit only once, we have no way of telling which direction it goes
      if (hitShip.hits.filter((pos) => pos === true).length === 1) {
        // traverse all 4 neighbors
        for (let j = -1; j <= 1; j += 2) {
          if (GameboardService.validToPlay(hitRow + j, hitCol, gameBoard)) {
            if (!GameboardService.neighborsVisibleShip(hitRow + j, hitCol, gameBoard, hitShip)) {
              return [hitRow + j, hitCol]
            }
          }

          if (GameboardService.validToPlay(hitRow, hitCol + j, gameBoard)) {
            if (!GameboardService.neighborsVisibleShip(hitRow, hitCol + j, gameBoard, hitShip)) {
              return [hitRow, hitCol + j]
            }
          }
        }
      } else {
        // traverse only 2 neighbors in the correct direction (vertical or horizontal)
        const [rowOffset, colOffset] = hitShip.isVertical ? [1, 0] : [0, 1]
        for (let j = -1; j <= 1; j += 2) {
          if (GameboardService.validToPlay(hitRow + j * rowOffset, hitCol + j * colOffset, gameBoard)) {
            if (
              !GameboardService.neighborsVisibleShip(hitRow + j * rowOffset, hitCol + j * colOffset, gameBoard, hitShip)
            ) {
              return [hitRow + j * rowOffset, hitCol + j * colOffset]
            }
          }
        }
      }
    }

    return [-1, -1]
  }

  return { easyAlgoGetCoordinates, hardAlgoGetCoordinates }
})()

export default function ComputerPlayer(name, gameBoard = Gameboard()) {
  function randomPlay(game, avoidShips = false) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    const randomRow = Math.floor(Math.random() * enemyBoard.board.length)
    const randomCol = Math.floor(Math.random() * enemyBoard.board[0].length)

    if (GameboardService.alreadyAttacked(randomRow, randomCol, enemyBoard)) {
      return this.randomPlay(game, avoidShips)
    }

    if (avoidShips && GameboardService.neighborsVisibleShip(randomRow, randomCol, enemyBoard)) {
      return this.randomPlay(game, true)
    }

    enemyBoard.receiveAttack(randomRow, randomCol)
    return [randomRow, randomCol]
  }

  // The computer finds a tile that's part of a ship and then traverses all neighboring tiles and attacks them
  function easyAlgoPlay(game) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    const [row, col] = ComputerPlayerService.easyAlgoGetCoordinates(enemyBoard)

    if (row === -1 && col === -1) return this.randomPlay(game)

    enemyBoard.receiveAttack(row, col)
    return [row, col]
  }

  // The computer finds a tile that's part of a ship, then based on whether it sank the ship, it traverses it's
  // neighboring tiles in the correct direction and, once the ship is sunk, it never picks it's neighboring tiles,
  // because another ship can't be there
  function hardAlgoPlay(game) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    const [row, col] = ComputerPlayerService.hardAlgoGetCoordinates(enemyBoard)

    if (row === -1 && col === -1) return this.randomPlay(game, true)

    enemyBoard.receiveAttack(row, col)
    return [row, col]
  }

  return {
    name,
    gameBoard,
    randomPlay,
    easyAlgoPlay,
    hardAlgoPlay,
  }
}
