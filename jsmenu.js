const anchorTag = {
  createAnchor(parent, href, title) {
    const newElement = document.createElement('a')
    newElement.href = href
    newElement.textContent = title
    parent.appendChild(newElement)
  },
}

const menuContents = {
  createUL(menuHeader, items, href, index) {
    const menuContainer = document.createElement('div')
    menuContainer.id = `menu-${index}`
    menuHeader.appendChild(menuContainer)
    items.forEach((menuName, index) => {
      anchorTag.createAnchor(menuContainer, href[index], menuName)
    })
  },
}

const menuHeader = {
  createLI(menuBar, title, href) {
    const newElement = document.createElement('li')
    menuBar.appendChild(newElement)
    anchorTag.createAnchor(newElement, href, title)
    return newElement
  },
}

const menuBar = {
  createUL(parent) {
    const parentElement = document.getElementById(parent)
    const newElement = document.createElement('ul')
    newElement.classList.add('menu')
    parentElement.appendChild(newElement)
    const clearDiv = document.createElement('div')
    clearDiv.style.clear = 'both'
    parentElement.appendChild(clearDiv)
    return newElement
  },
}

function menuContainer(parent, titles, submenu) {
  const newMenuBar = menuBar.createUL(parent)

  function createMenuHeaders() {
    titles[0].forEach((headerName, index) => {
      const newMenuHeader = menuHeader.createLI(newMenuBar, headerName,
        titles[1][index])
      menuContents.createUL(newMenuHeader, submenu[index][0], submenu[index][1],
        index + 1)
    })
  }

  createMenuHeaders()
  menuController(parent)
}

// Menu titles and URL's
const titles = [
  ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'],
  ['#', '#', '#', '#', '#']]

// Submenu content
const submenu = [
  [
    ['Lorem', 'Labore', 'Consectur', 'Velit', 'Dolor'],
    ['#', '#', '#', '#', '#'],
  ], [
    ['Ipsum', 'Adipiscing', 'Elit', 'Eiusmod', 'Amet'],
    ['#', '#', '#', '#', '#'],
  ], [
    ['Dolor', 'Magnis', 'Natoque', 'Felis', 'Justo'],
    ['#', '#', '#', '#', '#'],
  ], [
    ['Aenean', 'Rhoncus', 'Etiam', 'Curabitur', 'Quam'],
    ['#', '#', '#', '#', '#'],
  ], [
    ['Commodo', 'Augue', 'Magna', 'Luctus', 'Faucibus'],
    ['#', '#', '#', '#', '#'],
  ],
]

menuContainer('menu', titles, submenu)

function closeAllMenus() {
  const menuHeaders = document.querySelectorAll('li > a')
  menuHeaders.forEach(header => {
    header.nextElementSibling.style.visibility = 'hidden'
  })
}

function menuController(menuID) {
  let mouseOnMenu = false
  const menuHeaders = document.querySelectorAll('li > a')
  menuHeaders.forEach(
    header => header.addEventListener('mouseover', function () {
      if (header.nextElementSibling.style.visibility === 'visible') {
        closeAllMenus()
      } else {
        closeAllMenus()
        header.nextElementSibling.style.visibility = 'visible'
      }
    }))
  menuHeaders.forEach(
    header => header.nextElementSibling.addEventListener('click', function () {
      header.nextElementSibling.style.visibility = 'hidden'
    }))
  menuHeaders.forEach(
    header => header
      .addEventListener('mouseover', function () {mouseOnMenu = true}))
  menuHeaders.forEach(
    header => header.nextElementSibling
      .addEventListener('mouseover', function () {mouseOnMenu = true}))
  menuHeaders.forEach(
    header => header
      .addEventListener('mouseout', function () {mouseOnMenu = false}))
  menuHeaders.forEach(
    header => header.nextElementSibling
      .addEventListener('mouseout', function () {mouseOnMenu = false}))
  document.addEventListener('click', function (e) {
    if (!mouseOnMenu) closeAllMenus()
  })
}