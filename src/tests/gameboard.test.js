/* eslint-disable no-undef, no-labels, no-restricted-syntax */

import Gameboard, { GameboardService } from '../game/gameboard'
import Ship, { ShipService } from '../game/ship'

describe('Gameboard factory function', () => {
  test('creates a gameboard object with ships randomly positioned', () => {
    const gameBoard = Gameboard()

    expect(gameBoard.board.length).toBe(10)
    expect(gameBoard.board[0].length).toBe(10)
    expect(gameBoard.board.flat().filter((pos) => !!pos === true).length).toBe(20) // places taken up by ships
    expect(gameBoard.allShips.length).toBe(10)
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

  test("receiveAttack() function adds to gameBoard's missed attacks", () => {
    const gameBoard = Gameboard()
    let [emptyRow, emptyCol] = [undefined, undefined]

    outerLoop: for (let row = 0; row < gameBoard.board.length; row++) {
      for (let col = 0; col < gameBoard.board[0].length; col++) {
        if (!gameBoard.board[row][col]) {
          emptyRow = row
          emptyCol = col
          break outerLoop
        }
      }
    }

    gameBoard.receiveAttack(emptyRow, emptyCol)
    expect(gameBoard.missedAttacks).toEqual([[emptyRow, emptyCol]])
  })
})

describe('GameboardService module', () => {
  test('allShipsSunkIn() returns false if no ships have been sunk', () => {
    const gameBoard = Gameboard()
    expect(GameboardService.allShipsSunkIn(gameBoard.board)).toBe(false)
  })

  test('allShipsSunkIn() returns true if all ships are sunk', () => {
    const gameBoard = Gameboard()
    const ship1 = Ship(3)
    ship1.hit(0)
    ship1.hit(1)
    ship1.hit(2)
    const ship2 = Ship(2)
    ship2.hit(0)
    ship2.hit(1)
    const ship3 = Ship(1)
    ship3.hit(0)
    gameBoard.board = [
      [0, ship1, ship1, ship1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, ship2, ship2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ship3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(GameboardService.allShipsSunkIn(gameBoard.board)).toBe(true)
  })

  test('alreadyAttacked() function returns false if position has not been hit', () => {
    const gameBoard = Gameboard()
    expect(GameboardService.alreadyAttacked(0, 0, gameBoard)).toBe(false)
  })

  test('alreadyAttacked() function returns true if position has already been hit', () => {
    const gameBoard = Gameboard()
    gameBoard.receiveAttack(0, 0)
    expect(GameboardService.alreadyAttacked(0, 0, gameBoard)).toBe(true)
  })

  test('aliveShipsOf() function returns all ships if no ship has been sunk', () => {
    const gameBoard = Gameboard()
    expect(GameboardService.aliveShipsOf(gameBoard)).toEqual(gameBoard.allShips)
  })

  test('aliveShipsOf() function returns only ships that have not been sunk', () => {
    const gameBoard = Gameboard()

    for (let row = 0; row < gameBoard.board.length; row++) {
      for (let col = 0; col < gameBoard.board[0].length; col++) {
        const ship = gameBoard.board[row][col]

        if (ship && ship.length === 1) {
          gameBoard.receiveAttack(row, col)
        }
      }
    }

    expect(GameboardService.aliveShipsOf(gameBoard)).toEqual(gameBoard.allShips.filter((ship) => ship.length > 1))
  })
})
