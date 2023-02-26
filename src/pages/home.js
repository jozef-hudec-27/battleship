import { DomGame, DomController } from '../dom.js'
import { GameService } from '../game/game.js'

export default function painHomePage(game) {
  const [player1, player2] = [game.player1, game.player2]
  let gameOver = false

  const handleTileClick = (row, col) => {
    if (gameOver) return

    if (player1.play(game, row, col)) {
      if (GameService.isGameOverIn(game)) {
        // the player won
        gameOver = true
        DomGame.newRoundUpdate(player1, null, null, player2, row, col)
        DomGame.displayGameOver(true)
      } else {
        const [randomRow, randomCol] = player2.randomPlay(game)

        if (GameService.isGameOverIn(game)) {
          // the computer won
          gameOver = true
          DomGame.displayGameOver(false)
        }

        DomGame.newRoundUpdate(player1, randomRow, randomCol, player2, row, col)
      }
    }
  }

  const player1BoardEl = DomGame.markupForBoard(player1.gameBoard.board, player1.name)
  const player2BoardEl = DomGame.markupForBoard(player2.gameBoard.board, player2.name)

  player1BoardEl.prepend(DomGame.markupForAliveShips(player1))
  player2BoardEl.prepend(DomGame.markupForAliveShips(player2))

  DomController.byId('main').appendChild(player1BoardEl)
  DomController.byId('main').appendChild(player2BoardEl)

  for (let r = 0; r < player1.gameBoard.board.length; r++) {
    for (let c = 0; c < player1.gameBoard.board[0].length; c++) {
      const player1TileBtn = DomController.byId(`${player1.name}_${r}_${c}`)
      player1TileBtn.setAttribute('tabindex', '-1')

      if (player1.gameBoard.board[r][c]) player1TileBtn.classList.add('has-ship')

      const player2TileBtn = DomController.byId(`${player2.name}_${r}_${c}`)
      player2TileBtn.addEventListener('click', () => handleTileClick(r, c))
    }
  }
}
