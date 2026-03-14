# Planejamento de Dinamização - AcorreRondon

Este documento descreve quais elementos do site serão controlados via **PocketBase** para permitir alterações sem mexer no código.

## 🗄️ Estrutura de Coleções (PocketBase)

### 1. `noticias`
Coleção para alimentar a página de Notícias e o resumo na Home.
- **Campos**:
    - `titulo` (Text)
    - `subtitulo/resumo` (Text)
    - `data` (Date)
    - `autor` (Text)
    - `categoria` (Select/Text: "Eventos", "Dicas", "Conquistas", etc)
    - `imagem` (File)
    - `conteudo` (Editor Rich Text - opcional para o futuro)

### 2. `diretoria`
Coleção para a página de Diretoria.
- **Campos**:
    - `nome` (Text)
    - `cargo` (Text)
    - `foto` (File)
    - `ordem` (Number: para ordenação manual)
    - `conselho` (Bool: se for True, vai para a seção de Conselho Fiscal)

### 3. `configuracoes` (Chave-Valor)
Coleção genérica para textos e links espalhados pelo site.
- **Campos**:
    - `chave` (Text, Unique): ex: "hero_title"
    - `valor` (Text/Plaintext): ex: "DESAFIE O SEU PRÓPRIO RITMO"
    - `descricao` (Text): para saber o que cada chave faz no Admin.

---

## 📄 Mapeamento por Página

### 🏠 Home
| Elemento | Tipo | Coleção/Chave |
| :--- | :--- | :--- |
| Tag de Temporada | Config | `home_season_tag` ("Temporada 2026") |
| Título Hero | Config | `home_hero_title` |
| Subtítulo Hero | Config | `home_hero_subtitle` |
| Texto CTA (Seção Final) | Config | `home_cta_text` |
| Links de Redes Sociais | Config | `social_instagram`, `social_facebook` |

### 📰 Notícias
| Elemento | Tipo | Coleção |
| :--- | :--- | :--- |
| Lista de Notícias | Listagem | `noticias` (ordenado por data desc) |

### 👥 Diretoria
| Elemento | Tipo | Coleção |
| :--- | :--- | :--- |
| Membros Executivos | Listagem | `diretoria` (onde `conselho == false`) |
| Conselho Fiscal | Listagem | `diretoria` (onde `conselho == true`) |

### 📝 Inscrições & 🏆 Resultados
| Elemento | Tipo | Coleção/Chave |
| :--- | :--- | :--- |
| URL do Iframe (Inscrições) | Config | `url_iframe_inscricoes` |
| URL do Iframe (Resultados) | Config | `url_iframe_resultados` |

### 📞 Contato & Footer
| Elemento | Tipo | Coleção/Chave |
| :--- | :--- | :--- |
| WhatsApp | Config | `contato_whatsapp` |
| E-mail | Config | `contato_email` |
| Endereço | Config | `contato_endereco` |

---

## 🛠️ Próximos Passos (Execução)

1.  **Setup do PocketBase**: Criar as coleções e campos conforme acima.
2.  **Instalação do SDK**: Adicionar `pocketbase` ao projeto React.
3.  **Criação de um Hook `usePocket`**: Centralizar a conexão.
4.  **Substituição do Hardcoded**: Trocar os arrays estáticos por chamadas ao PocketBase.
5.  **Refatoração de Componentes**: Ajustar o `footer.jsx` e `navbar.jsx` para usarem os dados globais.
