const Database = require('./db');
const saveOrphanege = require('./saveOrphanege');



Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanege(db, {
        lat: "-25.496052",
        lng: "-49.2070315",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que estão em situação de vulnerabilidade",
        whatsapp: "123456789",
        images: [
            "https://images.unsplash.com/photo-1548463870-e32900ea6bb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",


        ].toString(),
        instructions: "Venha com vontade e traga muito amor e carinho para nossas crianças",
        opening_hours: "horário de visita das 08h às 18h",
        open_on_weekends: "1"
    })

    await saveOrphanege(db, orphanege);

    //consultar dados
    const selectedOrphaneges = await db.all("SELECT * FROM orphaneges")
    console.log(selectedOrphaneges)

    const orphanege = await db.all('SELECT * FROM orphaneges WHERE id = "3"')
    console.log(orphanege)

    //deletar dados da tabela
    console.log(await db.run("DELETE FROM orphaneges WHERE id = '2'"))


})