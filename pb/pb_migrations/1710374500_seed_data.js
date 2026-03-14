migrate((db) => {
  const dao = new Dao(db);

  // 1. Seed de Configurações
  const configs = [
    { chave: 'home_season_tag', valor: 'Temporada 2026', descricao: 'Tag no topo do Hero' },
    { chave: 'home_hero_title', valor: 'DESAFIE O SEU\nPRÓPRIO RITMO', descricao: 'Título principal da Home' },
    { chave: 'home_hero_subtitle', valor: 'Mais do que uma corrida, uma experiência urbana. Una-se a experiência única de superação, resistência e muita adrenalina.', descricao: 'Subtítulo do Hero' },
    { chave: 'home_cta_text', valor: 'As vagas para o Circuito Outono já estão disponíveis. Não perca seu lugar no grid.', descricao: 'Texto da seção final' },
    { chave: 'contato_whatsapp', valor: '(45) 9911-6751', descricao: 'WhatsApp de contato' },
    { chave: 'contato_email', valor: 'acorrerondon@outlook.com', descricao: 'E-mail oficial' },
    { chave: 'social_instagram', valor: 'https://www.instagram.com/acorrerondon/', descricao: 'Link do Instagram' },
    { chave: 'social_instagram_handle', valor: '@acorrerondon', descricao: 'Nome de usuário do Instagram' },
    { chave: 'social_facebook', valor: 'https://www.facebook.com/acorre.rondon.1/', descricao: 'Link do Facebook' },
    { chave: 'url_iframe_inscricoes', valor: 'https://esportivo.techinteligente.site/club-home/acorre/explore?sport=Corrida', descricao: 'Link do portal de inscrições' },
    { chave: 'url_iframe_resultados', valor: 'https://esportivo.techinteligente.site/races/63/results', descricao: 'Link do portal de resultados' },
    { chave: 'home_hero_image', valor: '', descricao: 'Imagem de fundo do topo (Hero)' },
    { chave: 'home_about_image', valor: '', descricao: 'Imagem lateral da seção Quem Somos' },
    { chave: 'contato_subtitulo', valor: 'Estamos prontos para te ajudar com qualquer dúvida sobre nossas provas, treinos ou parcerias.', descricao: 'Subtítulo da página de contato' },
    { chave: 'contato_endereco', valor: 'Marechal Cândido Rondon - PR', descricao: 'Endereço/Cidade de localização' },
    { chave: 'contato_treinos_info', valor: 'Consulte horários no WhatsApp', descricao: 'Informação sobre treinos coletivos' }
  ];



  const configCol = dao.findCollectionByNameOrId("configuracoes");
  configs.forEach(c => {
    const record = new Record(configCol, c);
    dao.saveRecord(record);
  });

  // 2. Seed de Notícias
  const news = [
    {
      titulo: "Prepare-se para o nosso próximo grande desafio em Marechal",
      resumo: "As inscrições estão abertas para a corrida de aniversário da cidade. Venha bater seu recorde pessoal conosco.",
      data: "2025-10-15 10:00:00",
      autor: "Comunicação AcorreRondon",
      categoria: "Eventos"
    },
    {
      titulo: "Os benefícios do treino em grupo para corredores amadores",
      resumo: "Descubra como a motivação coletiva pode transformar sua performance e consistência nos treinos.",
      data: "2025-10-10 10:00:00",
      autor: "Departamento Técnico",
      categoria: "Dicas"
    },
    {
      titulo: "AcorreRondon conquista pódios em maratona regional",
      resumo: "Nossos atletas deram um show de superação e trouxeram diversos troféus para casa.",
      data: "2025-10-05 10:00:00",
      autor: "Secretaria",
      categoria: "Conquistas"
    }
  ];

  const newsCol = dao.findCollectionByNameOrId("noticias");
  news.forEach(n => {
    const record = new Record(newsCol, n);
    dao.saveRecord(record);
  });

  // 3. Seed de Diretoria
  const membros = [
    { nome: "Adelir Vanderlei Kempfer", cargo: "Presidente", ordem: 1, conselho: false },
    { nome: "Alisson Henrique Ferreira", cargo: "Vice Presidente", ordem: 2, conselho: false },
    { nome: "Meridiana Vanessa Kempfer", cargo: "1ª Secretária", ordem: 3, conselho: false },
    { nome: "Raidiane Nolasco Fernandes", cargo: "2ª Secretária", ordem: 4, conselho: false },
    { nome: "Veruska Roberta Marinho da Silva Lopes", cargo: "1ª Tesoureira", ordem: 5, conselho: false },
    { nome: "Alexandre Venso", cargo: "2º Tesoureiro", ordem: 6, conselho: false },
    { nome: "Vianei Ritter", cargo: "Diretor Técnico", ordem: 7, conselho: false },
    { nome: "Alexandre Luiz Stein", cargo: "Diretor Técnico de Provas", ordem: 8, conselho: false },
    { nome: "Priscila Josiane do Nascimento Ritter", cargo: "Diretora de Relações Públicas", ordem: 9, conselho: false },
    { nome: "Arlete Beatris Helfenstein Kempfer", cargo: "Conselho Fiscal", ordem: 10, conselho: true },
    { nome: "Bruna Michele de Souza Dorneles", cargo: "Conselho Fiscal", ordem: 11, conselho: true },
    { nome: "Gilmar Correa da Cunha", cargo: "Conselho Fiscal", ordem: 12, conselho: true }
  ];


  const dirCol = dao.findCollectionByNameOrId("diretoria");
  membros.forEach(m => {
    const record = new Record(dirCol, m);
    dao.saveRecord(record);
  });

}, (db) => {
  // Nada a fazer no down (opcional deletar records)
})
