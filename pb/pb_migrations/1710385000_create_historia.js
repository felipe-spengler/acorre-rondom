migrate((db) => {
  const dao = new Dao(db);

  const collection = new Collection({
    "id": "historia_empresa",
    "createdAt": "",
    "updatedAt": "",
    "name": "historia",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hist_titulo",
        "name": "titulo",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hist_texto",
        "name": "texto",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hist_imagens",
        "name": "imagens",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  dao.saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("historia");
  if (collection) {
    dao.deleteCollection(collection);
  }
})
