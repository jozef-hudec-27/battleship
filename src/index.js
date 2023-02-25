import './assets/styles/style.scss'
import Game from './game/game.js'
import Player from './game/player.js'
import ComputerPlayer from './game/computer_player.js'
import painHomePage from './pages/home.js'

const game = Game(Player('human'), ComputerPlayer('computer'))

painHomePage(game)
