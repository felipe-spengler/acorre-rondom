migrate((db) => {
  const collections = [
    {
      name: "noticias",
      type: "base",
      schema: [
        { name: "titulo", type: "text", required: true },
        { name: "resumo", type: "text" },
        { name: "data", type: "date" },
        { name: "autor", type: "text" },
        { name: "categoria", type: "select", options: { values: ["Eventos", "Dicas", "Conquistas"] } },
        { name: "imagem", type: "file", options: { maxSelect: 1, maxSize: 5242880, mimeTypes: ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"] } }
      ],
      listRule: "",
      viewRule: "",
    },
    {
      name: "diretoria",
      type: "base",
      schema: [
        { name: "nome", type: "text", required: true },
        { name: "cargo", type: "text" },
        { name: "foto", type: "file", options: { maxSelect: 1, maxSize: 5242880 } },
        { name: "ordem", type: "number" },
        { name: "conselho", type: "bool" }
      ],
      listRule: "",
      viewRule: "",
    },
    {
      name: "configuracoes",
      type: "base",
      schema: [
        { name: "chave", type: "text", required: true, unique: true },
        { name: "valor", type: "text" },
        { name: "descricao", type: "text" }
      ],
      listRule: "",
      viewRule: "",
    }
  ];

  const dao = new Dao(db);
  collections.forEach((c) => {
    const collection = new Collection(c);
    dao.saveCollection(collection);
  });
}, (db) => {
  const dao = new Dao(db);
  const collections = ["noticias", "diretoria", "configuracoes"];
  collections.forEach((name) => {
    const collection = dao.findCollectionByNameOrId(name);
    if (collection) {
      dao.deleteCollection(collection);
    }
  });
})



