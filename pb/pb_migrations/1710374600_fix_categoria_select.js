migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("noticias");

  // Na VM do PocketBase, as vezes o schema não aceita for...of direto
  const schema = collection.schema;
  for (let i = 0; i < schema.length; i++) {
    if (schema[i].name === "categoria") {
      schema[i].options.maxSelect = 1;
    }
  }

  dao.saveCollection(collection);
}, (db) => {
  // Opcional
})

