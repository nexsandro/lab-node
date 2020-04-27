const db = require('../database')

const Player = db.sequelize.define('player', {
    name : {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    race: {
        type: db.Sequelize.STRING
    },
    facebook: {
        type: db.Sequelize.STRING
    },
    whatsapp: {
        type: db.Sequelize.STRING
    },
    battletag: {
        type: db.Sequelize.STRING
    },
    minibio: {
        type: db.Sequelize.TEXT
    },
}, {
    tableName: 'player'
})

Player.sync();

module.exports = Player;