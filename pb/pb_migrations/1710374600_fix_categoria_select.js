migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("noticias");

  // Encontrar o campo categoria e ajustar a opção maxSelect
  for (let field of collection.schema) {
    if (field.name === "categoria") {
      field.options.maxSelect = 1;
    }
  }

  dao.saveCollection(collection);
}, (db) => {
  // Opcional: reverter para 0 se necessário
})
