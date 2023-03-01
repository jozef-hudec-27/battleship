import './assets/styles/style.scss'
import { DomController } from './dom.js'
import paintChooseDifficultyPage from './pages/choose_difficulty.js'
import Favicon from './assets/images/favicon-16x16.png'

paintChooseDifficultyPage()

const favicon = DomController.newElement('link')
favicon.setAttribute('rel', 'icon')
favicon.setAttribute('type', 'image/x-icon')
favicon.setAttribute('href', Favicon)
document.head.appendChild(favicon)
