const express = require('express');
const path = require('path');
const pages = require('./pages.js');



const server = express();


server

    .use(express.urlencoded({ extended: true }))

.use(express.static('public'))

.set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')


.get('/', pages.index)
    .get('/orphanege', pages.orphanege)
    .get('/orphaneges', pages.orphaneges)
    .get('/create-orphanege', pages.createOrphanege)
    .post('/saveOrphanege', pages.saveOrphanege)

server.listen(5500);