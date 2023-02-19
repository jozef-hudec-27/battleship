export default function Ship(length) {
  const hits = new Array(length).fill(false)

  const isSunk = () => hits.every((position) => position === true)

  const hit = (position) => {
    hits[position] = true
  }

  return {
    length,
    hits,
    isSunk,
    hit,
  }
}
