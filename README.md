# FPV Consultoria Empresarial

Site institucional da FPV Consultoria Empresarial, focado em BPO Financeiro, consultoria empresarial, controladoria e organizacao financeira para empresas.

## Visao Geral

O projeto e um site estatico, sem dependencias externas de JavaScript ou CSS. Em tempo de carregamento, usa Google Fonts e imagens remotas do Unsplash nas secoes visuais principais. A estrutura foi pensada para hospedagem simples em ambiente Apache/Hostinger ou qualquer servidor estatico.

URL de producao prevista:

```text
https://www.fpvconsultoria.com.br/
```

Repositorio:

```text
https://github.com/ShunWalChin/fpv-consultoria-site
```

## Conteudo Atual

Principais secoes do site:

- Hero com chamada para BPO Financeiro e WhatsApp.
- Dor do cliente e posicionamento da FPV.
- Sobre a FPV Consultoria.
- Fundador e CEO: Francisco Paulo Gomes Valente.
- BPO Financeiro.
- Servicos financeiros.
- Processos e metodologia de trabalho.
- Beneficios e resultados esperados.
- Clientes atendidos.
- Depoimentos reais: DGL Engenharia, Grupo Cokinos e Imunita.
- FAQ.
- CTA final e rodape.

## Estrutura

```text
.
|-- index.html
|-- assets/
|   |-- css/
|   |   |-- styles.css
|   |   `-- styles.min.css
|   |-- images/
|   |   |-- francisco-valente.jpeg
|   |   `-- logos/
|   `-- js/
|       |-- main.js
|       |-- main.min.js
|       |-- animations.js
|       `-- animations.min.js
|-- docs/
|   `-- DEPLOY.md
|-- CHANGELOG.md
|-- robots.txt
|-- sitemap.xml
`-- .htaccess
```

## Como Rodar Localmente

Na pasta do projeto:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Acesse:

```text
http://127.0.0.1:4173/
```

## Build e Minificacao

O CSS minificado e gerado a partir de `assets/css/styles.css`:

```powershell
npx --yes clean-css-cli -o assets/css/styles.min.css assets/css/styles.css
```

Os arquivos JavaScript minificados ja estao versionados em `assets/js/`.

## Validacoes Recomendadas

```powershell
npx --yes html-validate index.html
node --check assets/js/main.js
node --check assets/js/animations.js
node --check assets/js/main.min.js
node --check assets/js/animations.min.js
```

Para conferencia visual mobile/desktop, use o localhost e teste principalmente:

- Menu mobile.
- Secao do fundador.
- Secao de depoimentos.
- Cards de clientes.
- CTAs de WhatsApp.
- FAQ accordion.

## Deploy

O pacote local de deploy e gerado como `fpv_deploy.zip`, contendo apenas os arquivos necessarios para publicacao:

- `index.html`
- `.htaccess`
- `robots.txt`
- `sitemap.xml`
- `assets/`

As instrucoes detalhadas estao em [docs/DEPLOY.md](docs/DEPLOY.md).

## Ultima Atualizacao

2026-06-01:

- Adicionada dobra do fundador e CEO Francisco Paulo Gomes Valente.
- Incluida foto local do fundador.
- Removidos depoimentos genericos.
- Mantidos apenas depoimentos reais enviados pelo cliente.
- Atualizado `sitemap.xml` com a secao `#fundador`.
