/* eslint-disable no-undef, no-labels, no-restricted-syntax */

import Gameboard from '../game/gameboard'
import { ShipService } from '../game/ship'

describe('Gameboard factory function', () => {
  test('creates a gameboard object with ships randomly positioned', () => {
    const gameBoard = Gameboard()

    expect(gameBoard.board.length).toBe(10)
    expect(gameBoard.board[0].length).toBe(10)
    expect(gameBoard.board.flat().filter((pos) => !!pos === true).length).toBe(20) // places taken up by ships
  })

  test("receiveAttack() function adds to ship's hits", () => {
    const gameBoard = Gameboard()
    let [shipRow, shipCol] = [undefined, undefined]

    outerLoop: for (let row = 0; row < gameBoard.board.length; row++) {
      for (let col = 0; col < gameBoard.board[0].length; col++) {
        if (gameBoard.board[row][col]) {
          shipRow = row
          shipCol = col
          break outerLoop
        }
      }
    }

    const ship = gameBoard.board[shipRow][shipCol]
    gameBoard.receiveAttack(shipRow, shipCol)
    expect(ship.hits[ShipService.hitPosition(shipRow, shipCol, gameBoard.board)]).toBe(true)
  })
})
