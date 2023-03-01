import { DomController } from '../dom.js'
import paintGamePage from './game.js'
import Game from '../game/game.js'
import Player from '../game/player.js'
import ComputerPlayer from '../game/computer_player.js'

export default function paintChooseDifficultyPage() {
  const contentEl = DomController.byId('content')
  const chooseDifficultyEl = DomController.newElement('div', '', 'choose-difficulty')
  const heading = DomController.newElement('h2', '', '', 'Choose a difficulty:')
  const difficultiesEl = DomController.newElement('ul', '', 'difficulties')

  const difficulties = ['easy', 'medium', 'hard']
  difficulties.forEach((difficulty) => {
    const difficultyEl = DomController.newElement('li', `difficulty ${difficulty}`, '')
    const difficultyBtn = DomController.newElement('button', '', '', difficulty)
    difficultyBtn.addEventListener('click', () => {
      contentEl.innerHTML = ''
      paintGamePage(Game(Player('human'), ComputerPlayer('computer')), difficulty)
    })

    difficultyEl.appendChild(difficultyBtn)
    difficultiesEl.appendChild(difficultyEl)
  })

  DomController.addChildrenTo(chooseDifficultyEl, [heading, difficultiesEl])

  contentEl.appendChild(chooseDifficultyEl)
}
