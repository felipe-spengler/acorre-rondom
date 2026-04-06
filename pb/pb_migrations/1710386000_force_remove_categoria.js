migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("noticias");

  // O PocketBase precisa do ID do campo para remover no removeField() nas versões recentes.
  // Como o id era gerado aleatoriamente, precisamos buscar o name primeiro.
  const categoriaField = collection.schema.getFieldByName("categoria");
  if (categoriaField) {
    collection.schema.removeField(categoriaField.id);
    dao.saveCollection(collection);
  }
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("noticias");

  const categoriaField = new SchemaField({
    "system": false,
    "id": "categoria_fix",
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
  dao.saveCollection(collection);
})
