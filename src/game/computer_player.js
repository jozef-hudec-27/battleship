/* eslint-disable operator-linebreak */

import Gameboard, { GameboardService } from './gameboard'
import { GameService } from './game'

export default function ComputerPlayer(gameBoard = Gameboard()) {
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

  return { gameBoard, randomPlay }
}
