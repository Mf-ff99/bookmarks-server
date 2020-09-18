const {v4: uuid} = require('uuid')

const bookmarks = [
    {
        id: uuid(),
        title: 'Google',
        url: 'https://google.com',
        description: 'Search for some shit',
        rating: 5,
    },
    {
        id: uuid(),
        title: 'Runescape',
        url: 'https://runescape.com',
        description: 'Play some shit',
        rating: 5,
    },
]

module.exports = { bookmarks }