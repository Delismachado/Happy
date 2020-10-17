function saveOrphanege(db, orphanege) {
    return db.run(`
      INSERT INTO orphaneges (
        lat,
        lng,
        name,
        about,
        whatsapp,     
        images,
        instructions,
        open_hours,
        open_on_weekends
      ) VALUES (
        "${orphanege.lat}",
        "${orphanege.lng}",
        "${orphanege.name}",
        "${orphanege.about}",
        "${orphanege.whatsapp}",      
        "${orphanege.images}",
        "${orphanege.instructions}",
        "${orphanege.open_hours}",
        "${orphanege.open_on_weekends}"
      );
    `)
}
module.exports = saveOrphanege;