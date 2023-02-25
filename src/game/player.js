import { GameService } from './game.js'
import Gameboard from './gameboard.js'

export default function Player(gameBoard = Gameboard()) {
  function play(game, row, col) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    enemyBoard.receiveAttack(row, col)
  }

  return { gameBoard, play }
}
