# Renato Tattoo — site

Página única feita com **Angular 22** (standalone, signals, zoneless) e pré-renderização para SEO.
Direção de design: claro e quente como o estúdio, fotos coloridas e contato fácil pelo WhatsApp.

## Comandos

```bash
npm install
npm start        # dev em http://localhost:4200
npm run build    # build de produção (pré-renderiza a home)
npm test         # testes unitários (Vitest)
```

## Arquitetura

```
public/images/            Fotos
src/styles/               Tokens (cores, fontes), base, tipografia, botões
src/app/
├── core/                 config da marca, header, footer, cantinho do WhatsApp, SEO
├── shared/               lightbox, diretivas (reveal, esconder imagem ausente), ícones, modelos
├── content/works.ts      Lista de obras
└── features/
    ├── home/             home.page + sections/ (hero, works, about, process, faq, location, cta)
    └── not-found/        404
```

## Tarefas comuns

| Quero…                      | Onde                                                        |
| --------------------------- | ----------------------------------------------------------- |
| Trocar telefone / Instagram | `src/app/core/config/site.config.ts`                        |
| Adicionar uma obra          | Imagem em `public/images/` + item em `src/app/content/works.ts` |
| Mudar cores / fontes        | `src/styles/_tokens.scss`                                   |
| Nova seção ou página        | `src/app/features/home/sections/` ou nova pasta em `features/` + rota |

## Fotos pendentes

Salve com estes nomes em `public/images/` — o site já está preparado para elas:

| Arquivo                 | Foto                                  |
| ----------------------- | ------------------------------------- |
| `renato.jpg`            | Renato no estúdio (camisa vermelha)   |
| `manga-jesus-leao.jpg`  | Braço fechado com Jesus e leão        |
| `retrato-bebe.jpg`      | Retrato da criança sorrindo           |

Enquanto os arquivos não existirem, o espaço da foto é escondido automaticamente.

## Regras de conteúdo

- Texto em primeira pessoa, na voz do Renato, claro e acolhedor.
- Fotos sempre coloridas (sem filtro preto e branco).
- Antes de publicar, atualize `SITE.url` com o domínio real.
