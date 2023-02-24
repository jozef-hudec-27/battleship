export const GameService = (() => {
  const otherPlayerThan = (player, game) => {
    const [player1, player2] = [game.player1, game.player2]
    return player1 === player ? player2 : player1
  }

  return { otherPlayerThan }
})()

export default function Game(player1, player2) {
  let round = 1

  const nextRound = () => {
    round = 2
    return round
  }

  const getRound = () => round

  return {
    player1,
    player2,
    getRound,
    nextRound,
  }
}
