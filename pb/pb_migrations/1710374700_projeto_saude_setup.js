migrate((db) => {
  const dao = new Dao(db);

  const collections = [
    {
      name: "projeto_saude_config",
      type: "base",
      schema: [
        { name: "chave", type: "text", required: true, unique: true },
        { name: "valor", type: "text" },
        { name: "arquivo", type: "file", options: { maxSelect: 1, maxSize: 5242880 } },
        { name: "descricao", type: "text" }
      ],
      listRule: "",
      viewRule: "",
    },
    {
      name: "projeto_saude_recursos",
      type: "base",
      schema: [
        { name: "titulo", type: "text", required: true },
        { name: "descricao", type: "text" },
        { name: "icone", type: "text" }, // Nome do ícone lucide
        { name: "ordem", type: "number" }
      ],
      listRule: "",
      viewRule: "",
    },
    {
      name: "projeto_saude_objetivos",
      type: "base",
      schema: [
        { name: "texto", type: "text", required: true },
        { name: "ordem", type: "number" }
      ],
      listRule: "",
      viewRule: "",
    }
  ];

  collections.forEach((c) => {
    const col = new Collection(c);
    dao.saveCollection(col);
  });
}, (db) => {
  const dao = new Dao(db);
  ["projeto_saude_config", "projeto_saude_recursos", "projeto_saude_objetivos"].forEach(name => {
    const col = dao.findCollectionByNameOrId(name);
    if (col) dao.deleteCollection(col);
  });
})
