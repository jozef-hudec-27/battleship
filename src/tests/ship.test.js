/* eslint-disable no-undef */

import Ship from '../game/ship'

describe('Ship factory function', () => {
  test('creates a ship object with the given length and no hits', () => {
    const ship = Ship(4)
    expect(ship.length).toBe(4)
    expect(ship.hits).toEqual([false, false, false, false])
    expect(ship.isSunk()).toBe(false)
    expect(ship.isVertical).toBe(false)
  })

  test('hit() function increases the number of hits in the ship', () => {
    const ship = Ship(3)
    ship.hit(0)
    expect(ship.hits).toEqual([true, false, false])
  })

  test('isSunk() function returns true if the number of hits equals the ship length', () => {
    const ship = Ship(2)
    ship.hit(0)
    ship.hit(1)
    expect(ship.isSunk()).toBe(true)
  })

  test('isSunk() function returns false if the number of hits is less than the ship length', () => {
    const ship = Ship(3)
    ship.hit(0)
    ship.hit(1)
    expect(ship.isSunk()).toBe(false)
  })
})
