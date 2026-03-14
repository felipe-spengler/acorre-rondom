migrate((db) => {
  const dao = new Dao(db);

  // 1. Configurações Base
  const configCol = dao.findCollectionByNameOrId("projeto_saude_config");
  const configs = [
    { chave: 'hero_titulo', valor: 'PROJETO \nMOVIMENTO E SAÚDE', descricao: 'Título principal' },
    { chave: 'hero_subtitulo', valor: 'Promovendo a saúde e o bem-estar da comunidade através do atletismo e da integração social.', descricao: 'Subtítulo' },
    { chave: 'objetivos_titulo', valor: 'OBJETIVOS DO PROJETO', descricao: 'Título da seção de objetivos' },
    { chave: 'objetivos_introducao', valor: 'O Projeto Movimento e Saúde é uma realização da AcorreRondon que visa democratizar o acesso à prática esportiva orientada em nossa cidade.', descricao: 'Texto curto de introdução aos objetivos' },
    { chave: 'coordenadora_nome', valor: 'Priscila Ritter', descricao: 'Nome da coordenadora' },
    { chave: 'coordenadora_whatsapp', valor: '(45) 9972-5543', descricao: 'WhatsApp de contato do projeto' }
  ];

  configs.forEach(c => {
    const record = new Record(configCol, c);
    dao.saveRecord(record);
  });

  // 2. Pontos/Destaques (Features)
  const recursosCol = dao.findCollectionByNameOrId("projeto_saude_recursos");
  const recursos = [
    { titulo: "Qualidade de Vida", descricao: "Foco no bem-estar físico e mental através da prática regular de exercícios físicos e corrida de rua.", icone: "Heart", ordem: 1 },
    { titulo: "Treinos Orientados", descricao: "Acompanhamento profissional para garantir que você evolua com segurança e eficiência.", icone: "Activity", ordem: 2 },
    { titulo: "Inclusão Social", descricao: "Um espaço aberto para todas as idades e níveis de condicionamento físico participarem.", icone: "Users", ordem: 3 }
  ];

  recursos.forEach(r => {
    const record = new Record(recursosCol, r);
    dao.saveRecord(record);
  });

  // 3. Itens de Objetivos (Lista)
  const objCol = dao.findCollectionByNameOrId("projeto_saude_objetivos");
  const objetivos = [
    { texto: "Estimular hábitos saudáveis e combater o sedentarismo.", ordem: 1 },
    { texto: "Oferecer suporte técnico para iniciantes no atletismo.", ordem: 2 },
    { texto: "Fortalecer o espírito de comunidade entre os participantes.", ordem: 3 },
    { texto: "Preparar atletas para competições locais e regionais.", ordem: 4 }
  ];

  objetivos.forEach(o => {
    const record = new Record(objCol, o);
    dao.saveRecord(record);
  });

}, (db) => {
  // Opcional
})
