export const DomController = (() => {
  const newElement = (type, cls = '', id = '', text = '') => {
    const element = document.createElement(type)
    element.setAttribute('class', cls)
    element.id = id
    element.textContent = text

    return element
  }

  const addChildrenTo = (element, children) => {
    children.forEach((child) => element.appendChild(child))
  }

  const byId = (id) => document.getElementById(id)

  return { newElement, addChildrenTo, byId }
})()

export const DomGame = (() => {
  const markupForBoard = (board, name) => {
    const boardEl = DomController.newElement('section', `${name}-board`)

    for (let row = 0; row < board.length; row++) {
      const rowEl = DomController.newElement('div', 'row')

      for (let col = 0; col < board[0].length; col++) {
        const tileBtn = DomController.newElement('button')
        tileBtn.dataset.position = `${row}_${col}`
        rowEl.appendChild(tileBtn)
      }

      boardEl.appendChild(rowEl)
    }

    return boardEl
  }

  return { markupForBoard }
})()
