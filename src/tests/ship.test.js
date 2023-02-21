/* eslint-disable no-undef */

import Gameboard from '../game/gameboard'
import Ship, { ShipService } from '../game/ship'

describe('Ship factory function', () => {
  test('creates a ship object with the given length and no hits', () => {
    const ship = Ship(4)
    expect(ship.length).toBe(4)
    expect(ship.hits).toEqual([false, false, false, false])
    expect(ship.isVertical).toBe(false)
  })

  test('hit() function increases the number of hits in the ship', () => {
    const ship = Ship(3)
    ship.hit(0)
    expect(ship.hits).toEqual([true, false, false])
  })
})

describe('ShipService module', () => {
  test('isSunk() function returns false after creating new ship', () => {
    const ship = Ship(4)
    expect(ShipService.isSunk(ship)).toBe(false)
  })

  test('isSunk() function returns true if the number of hits equals the ship length', () => {
    const ship = Ship(2)
    ship.hit(0)
    ship.hit(1)
    expect(ShipService.isSunk(ship)).toBe(true)
  })

  test('isSunk() function returns false if the number of hits is less than the ship length', () => {
    const ship = Ship(3)
    ship.hit(0)
    ship.hit(1)
    expect(ShipService.isSunk(ship)).toBe(false)
  })

  test('hitPosition() returns the correct ship position that was hit', () => {
    const gameBoard = Gameboard()
    const ship = Ship(3)
    gameBoard.board = [
      [0, 0, 0, ship, ship, ship, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    expect(ShipService.hitPosition(0, 4, gameBoard.board)).toBe(1)
  })
})
