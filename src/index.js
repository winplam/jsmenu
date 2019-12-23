import jsmenu from './jsmenu'

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

// Call method to generate menu. The first parameter is the ID of the parent element
jsmenu().menuContainer('menu', titles, submenu)
