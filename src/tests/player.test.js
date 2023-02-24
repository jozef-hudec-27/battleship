/* eslint-disable no-undef */

import Game from '../game/game'
import Player from '../game/player'
import Ship from '../game/ship'

describe('Player factory function', () => {
  test('play() function adds to missedAttacks when no ship is hit', () => {
    const player1 = Player()
    const player2 = Player()
    const game = Game(player1, player2)
    player2.gameBoard.board[3][4] = 0
    player1.play(game, 3, 4)
    expect(player2.gameBoard.missedAttacks).toEqual([[3, 4]])
  })

  test("play() function adds to ship's hits", () => {
    const player1 = Player()
    const player2 = Player()
    const game = Game(player1, player2)
    const ship = Ship(1)
    player2.gameBoard.board[3][4] = ship
    player1.play(game, 3, 4)
    expect(ship.hits[0]).toBe(true)
  })
})
