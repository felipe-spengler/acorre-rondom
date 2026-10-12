/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);

  try {
    const recInscricoes = dao.findFirstRecordByData("configuracoes", "chave", "url_iframe_inscricoes");
    if (recInscricoes) {
      recInscricoes.set("valor", "https://esportes7.com.br/club-home/acorre/explore?sport=Corrida");
      dao.saveRecord(recInscricoes);
    }
  } catch (e) {
    // se não encontrar, segue
  }

  try {
    const recResultados = dao.findFirstRecordByData("configuracoes", "chave", "url_iframe_resultados");
    if (recResultados) {
      recResultados.set("valor", "https://esportes7.com.br/races/63/results");
      dao.saveRecord(recResultados);
    }
  } catch (e) {
    // se não encontrar, segue
  }
}, (db) => {
  const dao = new Dao(db);

  try {
    const recInscricoes = dao.findFirstRecordByData("configuracoes", "chave", "url_iframe_inscricoes");
    if (recInscricoes) {
      recInscricoes.set("valor", "https://esportivo.techinteligente.site/club-home/acorre/explore?sport=Corrida");
      dao.saveRecord(recInscricoes);
    }
  } catch (e) {}

  try {
    const recResultados = dao.findFirstRecordByData("configuracoes", "chave", "url_iframe_resultados");
    if (recResultados) {
      recResultados.set("valor", "https://esportivo.techinteligente.site/races/63/results");
      dao.saveRecord(recResultados);
    }
  } catch (e) {}
})
