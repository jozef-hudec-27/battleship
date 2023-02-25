/* eslint-disable operator-linebreak */

import Gameboard, { GameboardService } from './gameboard.js'
import { GameService } from './game.js'

export default function ComputerPlayer(name, gameBoard = Gameboard()) {
  function randomPlay(game) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    const randomRow = Math.floor(Math.random() * enemyBoard.board.length)
    const randomCol = Math.floor(Math.random() * enemyBoard.board[0].length)

    if (GameboardService.alreadyAttacked(randomRow, randomCol, enemyBoard)) {
      randomPlay(game)
    } else {
      enemyBoard.receiveAttack(randomRow, randomCol)
    }
  }

  return { name, gameBoard, randomPlay }
}
