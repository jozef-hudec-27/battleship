import { DomGame } from '../dom.js'
import { GameboardService } from '../game/gameboard.js'

export default function painHomePage(game) {
  const [player1, player2] = [game.player1, game.player2]

  document.getElementById('main').appendChild(DomGame.markupForBoard(player1.gameBoard.board, player1.name))
  document.getElementById('main').appendChild(DomGame.markupForBoard(player2.gameBoard.board, player2.name))

  for (let r = 0; r < player1.gameBoard.board.length; r++) {
    for (let c = 0; c < player1.gameBoard.board[0].length; c++) {
      const player1TileBtn = document.getElementById(`${player1.name}_${r}_${c}`)
      player1TileBtn.setAttribute('tabindex', '-1')

      if (player1.gameBoard.board[r][c]) {
        player1TileBtn.classList.add('has-ship')
      }

      const player2TileBtn = document.getElementById(`${player2.name}_${r}_${c}`)
      player2TileBtn.addEventListener('click', () => {
        if (player1.play(game, r, c)) {
          player2.randomPlay(game)
          document.getElementById('main').innerHTML = ''
          painHomePage(game)
        }
      })

      if (GameboardService.alreadyAttacked(r, c, player1.gameBoard)) player1TileBtn.classList.add('attacked')
      if (GameboardService.alreadyAttacked(r, c, player2.gameBoard)) {
        player2TileBtn.classList.add('attacked')

        if (player2.gameBoard.board[r][c]) {
          player2TileBtn.classList.add('has-ship')
        }
      }
    }
  }
}
