migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("noticias");

  // Add conteudo field (editor)
  const conteudoField = new SchemaField({
    "system": false,
    "id": "conteudo_field",
    "name": "conteudo",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  });
  collection.schema.addField(conteudoField);

  // Remove categoria field
  collection.schema.removeField("categoria");

  // Update imagem field to allow multiple uploads (COMMENTED OUT AS PER USER REQUEST)
  /*
  const imagemField = collection.schema.getFieldByName("imagem");
  if (imagemField) {
    imagemField.options.maxSelect = 99;
  }
  */

  dao.saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("noticias");

  // Remove conteudo field
  collection.schema.removeField("conteudo");

  // Re-add categoria field
  const categoriaField = new SchemaField({
    "system": false,
    "id": "categoria_field",
    "name": "categoria",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Eventos",
        "Dicas",
        "Conquistas"
      ]
    }
  });
  collection.schema.addField(categoriaField);

  // Revert imagem field (COMMENTED OUT)
  /*
  const imagemField = collection.schema.getFieldByName("imagem");
  if (imagemField) {
    imagemField.options.maxSelect = 1;
  }
  */

  dao.saveCollection(collection);
})
