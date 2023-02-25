import { GameService } from './game.js'
import Gameboard from './gameboard.js'

export default function Player(name, gameBoard = Gameboard()) {
  function play(game, row, col) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    return enemyBoard.receiveAttack(row, col)
  }

  return { name, gameBoard, play }
}
