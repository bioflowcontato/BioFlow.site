# BioFlow

Site institucional da BioFlow e demonstração separada do Studio Lumina Tattoo. O Studio Lumina é um projeto fictício de portfólio; não representa uma empresa ou contato real.

## Requisitos

- Node.js 20.19+ ou 22.12+ (compatível com Vite 7)
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra o endereço local mostrado pelo Vite, normalmente `http://localhost:5173/`.

## Revisão antes de publicar

```bash
npm run typecheck
npm run lint
npm run build
git diff --check
```

O comando de produção é `npm run build`. O Vite gera o site estático na pasta `dist/`.

Para conferir localmente o resultado de produção:

```bash
npm run preview
```

## Publicação no Cloudflare Pages

Conecte o repositório GitHub ao Cloudflare Pages e use:

- **Comando de build:** `npm run build`
- **Diretório de saída:** `dist`
- **Versão do Node.js:** 20.19+ (ou 22.12+)

O projeto é uma aplicação Vite estática e não requer Workers, Supabase ou configuração de serviços pagos para a publicação do site atual. Mantenha as variáveis de ambiente de produção fora do repositório.

## Atualizações

1. Faça as alterações na branch de trabalho e revise o diff.
2. Execute TypeScript, ESLint, build e `git diff --check`.
3. Confira a pasta `dist/` com `npm run preview`.
4. Publique pelo fluxo de branch configurado no Cloudflare Pages.

Não inclua `node_modules/`, `dist/` nem arquivos `.env` no Git. Os contatos oficiais da BioFlow são mantidos em `src/config/site.ts`; os dados do Studio Lumina ficam no objeto `studioConfig` do mesmo arquivo e devem continuar identificados como demonstrativos.

## SEO e domínio de publicação

O título, as descrições e a imagem social da BioFlow ficam em `index.html`. A imagem OG personalizada está em `public/og-bioflow.png`; o favicon está em `public/favicon.svg`. A interface usa `public/bioflow-logo.png`, uma cópia reduzida do logo original mantido em `public/Logo_futurista_neon_BioFlow.png`. `public/robots.txt` permite a indexação do site.

Antes do lançamento, informe o domínio definitivo e configure com URLs absolutas:

- `<link rel="canonical">` e `og:url` em `index.html`;
- `og:image` e `twitter:image` com a URL absoluta de `https://<domínio>/og-bioflow.png`;
- `public/sitemap.xml` com a URL HTTPS definitiva da página institucional;
- uma linha `Sitemap: https://<domínio>/sitemap.xml` em `public/robots.txt`.

O domínio não foi presumido neste repositório. O Studio Lumina não tem URL própria nem dados estruturados de empresa; ele é apresentado como demonstração fictícia dentro da experiência do portfólio.
