/* eslint-disable no-undef */

import Gameboard from '../game/gameboard'

describe('Gameboard factory function', () => {
  test('creates a gameboard object with ships randomly positioned', () => {
    const gameBoard = Gameboard()

    expect(gameBoard.board.length).toBe(10)
    expect(gameBoard.board[0].length).toBe(10)
    expect(gameBoard.board.flat().filter((pos) => !!pos === true).length).toBe(20)
  })
})
