const orphaneges = require('./database/fakedata')

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    orphanege(req, res) {
        return res.render('orphanege')

    },

    orphaneges(req, res) {
        return res.render('orphaneges', { orphaneges })

    },
    createOrphanege(req, res) {
        return res.render('createOrphanege')

    },
}