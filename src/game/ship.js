export const ShipService = (() => {
  const isSunk = (ship) => ship.hits.every((position) => position === true)

  const hitPosition = (row, col, board) => {
    const ship = board[row][col]
    const [rowOffset, colOffset] = ship.isVertical ? [1, 0] : [0, 1]
    const shipCoordinates = []

    for (let i = 0; i < ship.length; i++) {
      if (board[row + i * rowOffset]?.[col + i * colOffset] === ship) {
        shipCoordinates.push([row + i * rowOffset, col + i * colOffset])
      }

      if (board[row - i * rowOffset]?.[col - i * colOffset] === ship) {
        shipCoordinates.push([row - i * rowOffset, col - i * colOffset])
      }
    }

    shipCoordinates.sort(ship.isVertical ? (a, b) => a[0] - b[0] : (a, b) => a[1] - b[1])

    for (let i = 0; i < shipCoordinates.length; i++) {
      const [r, c] = shipCoordinates[i]
      if (r === row && c === col) {
        return i
      }
    }

    return false
  }

  return { isSunk, hitPosition }
})()

export default function Ship(length, isVertical = false) {
  const hits = new Array(length).fill(false)

  const hit = (position) => {
    hits[position] = true
  }

  return {
    length,
    hits,
    hit,
    isVertical,
  }
}
