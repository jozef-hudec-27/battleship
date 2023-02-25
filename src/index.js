import './assets/styles/style.scss'
import Game from './game/game.js'
import Player from './game/player.js'
import ComputerPlayer from './game/computer_player.js'
import { DomGame } from './dom.js'

const human = Player()
const computer = ComputerPlayer()

const game = Game(human, computer)

document.getElementById('main').appendChild(DomGame.markupForBoard(human.gameBoard.board, 'human'))
document.getElementById('main').appendChild(DomGame.markupForBoard(computer.gameBoard.board, 'computer'))
