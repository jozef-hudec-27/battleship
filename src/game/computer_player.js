/* eslint-disable operator-linebreak */

import Gameboard, { GameboardService } from './gameboard.js'
import { GameService } from './game.js'

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

  return { easyAlgoGetCoordinates }
})()

export default function ComputerPlayer(name, gameBoard = Gameboard()) {
  function randomPlay(game) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    const randomRow = Math.floor(Math.random() * enemyBoard.board.length)
    const randomCol = Math.floor(Math.random() * enemyBoard.board[0].length)

    if (GameboardService.alreadyAttacked(randomRow, randomCol, enemyBoard)) {
      return randomPlay(game)
    }

    enemyBoard.receiveAttack(randomRow, randomCol)
    return [randomRow, randomCol]
  }

  // The computer finds a tile that's part of a ship and then traverses all neighboring tiles and attacks them
  function easyAlgoPlay(game) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    const [row, col] = ComputerPlayerService.easyAlgoGetCoordinates(enemyBoard)

    if (row === -1 && col === -1) return randomPlay(game)

    enemyBoard.receiveAttack(row, col)
    return [row, col]
  }

  return {
    name,
    gameBoard,
    randomPlay,
    easyAlgoPlay,
  }
}
