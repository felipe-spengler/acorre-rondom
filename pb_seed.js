import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function seed() {
    try {
        console.log("Semeando dados iniciais...");

        // Configurações
        const configs = [
            { chave: 'home_hero_title', valor: 'DESAFIE O SEU\nPRÓPRIO RITMO' },
            { chave: 'home_hero_subtitle', valor: 'Mais do que uma corrida, uma experiência urbana. Una-se a experiência única de superação, resistência e muita adrenalina.' },
            { chave: 'contato_whatsapp', valor: '(45) 9911-6751' },
            { chave: 'contato_email', valor: 'acorrerondon@outlook.com' },
            { chave: 'social_instagram', valor: 'https://www.instagram.com/acorrerondon/' }
        ];

        for (const config of configs) {
            try {
                await pb.collection('configuracoes').create(config);
            } catch (e) {
                console.log(`Chave ${config.chave} já existe ou erro.`);
            }
        }

        // Notícias (Exemplo)
        const news = [
            {
                titulo: "Prepare-se para o nosso próximo grande desafio em Marechal",
                resumo: "As inscrições estão abertas para a corrida de aniversário da cidade.",
                data: "2025-10-15 10:00:00",
                autor: "Comunicação AcorreRondon",
                categoria: "Eventos"
            }
        ];

        for (const item of news) {
            await pb.collection('noticias').create(item);
        }

        console.log("Seeds concluídos!");
    } catch (err) {
        console.error("Erro no seed:", err);
    }
}

seed();
