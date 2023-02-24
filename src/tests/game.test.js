/* eslint-disable no-undef */

import Game from '../game/game'

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
