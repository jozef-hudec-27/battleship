import { GameService } from './game'
import Gameboard from './gameboard'

export default function Player(gameBoard = Gameboard()) {
  function play(game, row, col) {
    const enemyBoard = GameService.otherPlayerThan(this, game).gameBoard
    enemyBoard.receiveAttack(row, col)
  }

  return { gameBoard, play }
}
