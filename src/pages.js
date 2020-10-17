const Database = require('./database/db');
const saveOrphanege = require('./database/saveOrphanege');

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    async orphanege(req, res) {
        const id = req.query.id
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphaneges WHERE id = "${id}"`)

            const orphanege = results[0]


            orphanege.images = orphanege.images.split(",")
            orphanege.firstImage = orphanege.images[0];
            orphanege.images.splice(0, 1);


            if (orphanege.open_on_weekends == "0") {
                orphanege.open_on_weekends = false
            } else {
                orphanege.open_on_weekends = true
            }

            return res.render('orphanege', { orphanege })
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }


    },

    async orphaneges(req, res) {
        try {
            const db = await Database;
            const orphaneges = await db.all("SELECT * FROM orphaneges")
            return res.render('orphaneges', { orphaneges })
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }

    },
    createOrphanege(req, res) {
        return res.render('createOrphanege')

    },

    async saveOrphanege(req, res) {
        const fields = req.body
            // validar campos preenchidos
        if (Object.values(fields).includes('')) {
            return res.send("Todos os campos devem ser preenchidos")
        }
        try {
            const db = await Database
            await saveOrphanege(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                open_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,


            })

            //redirecionar
            return res.redirect('/orphaneges')

        } catch (error) {
            console.log('Erro no banco de dados!')

        }
    },
}