migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("projeto_saude_config");

  const configs = [
    { chave: 'coordenador2_nome', valor: 'Vianei Ritter', descricao: 'Nome do segundo coordenador' },
    { chave: 'coordenador2_whatsapp', valor: '(45) 9954-8057', descricao: 'WhatsApp do segundo coordenador' }
  ];

  configs.forEach(c => {
    const record = new Record(collection, c);
    dao.saveRecord(record);
  });
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("projeto_saude_config");
  
  const keys = ['coordenador2_nome', 'coordenador2_whatsapp'];
  
  keys.forEach(key => {
    try {
      const record = dao.findFirstRecordByData("projeto_saude_config", "chave", key);
      if (record) {
        dao.deleteRecord(record);
      }
    } catch (e) {
      // ignore
    }
  });
})
