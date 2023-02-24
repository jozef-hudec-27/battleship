/*  eslint-disable no-undef, no-restricted-syntax, no-labels */

import Player from '../game/player'
import ComputerPlayer from '../game/computer_player'
import Game from '../game/game'

describe('ComputerPlayer factory function', () => {
  test('randomPlay() function adds to missedAttacks when no ship is present', () => {
    const human = Player()
    const computer = ComputerPlayer()
    const game = Game(human, computer)
    human.gameBoard.board = [[0]]
    computer.randomPlay(game)
    expect(human.gameBoard.missedAttacks.length).toBe(1)
  })
})
