/* eslint-disable no-undef */

import Game, { GameService } from '../game/game'
import { GameboardService } from '../game/gameboard'
import Player from '../game/player'

describe('Game factory function', () => {
  test('getRound() function returns the correct round', () => {
    const game = Game('player1', 'player2')
    expect(game.getRound()).toBe(1)
  })

  test('nextRound() function increases the round count by 1', () => {
    const game = Game('player1', 'player2')
    const prevRound = game.getRound()
    game.nextRound()
    expect(game.getRound()).toBe(prevRound + 1)
  })
})

describe('GameService module', () => {
  test('isGameOverIn() function returns false if game is not over', () => {
    const p1 = Player('p1')
    const p2 = Player('p2')
    const game = Game(p1, p2)
    expect(GameService.isGameOverIn(game)).toBe(false)
  })

  test('isGameOverIn() function returns true if game is over', () => {
    const p1 = Player('p1')
    const p2 = Player('p2')
    const game = Game(p1, p2)

    // sinking all p1's ships
    for (let row = 0; row < p1.gameBoard.board.length; row++) {
      for (let col = 0; col < p1.gameBoard.board[0].length; col++) {
        if (p1.gameBoard.board[row][col]) {
          p1.gameBoard.receiveAttack(row, col)
        }
      }
    }

    expect(GameService.isGameOverIn(game)).toBe(true)
  })
})
