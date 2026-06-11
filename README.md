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
- Fundador e CEO: Francisco Valente.
- BPO Financeiro.
- Servicos financeiros.
- Processos e metodologia de trabalho.
- Beneficios e resultados esperados.
- Clientes atendidos.
- Depoimentos reais: DGL Sistemas, Cokinos Auditores e Imunita.
- FAQ.
- CTA final, formulario de pre-orcamento e rodape com CNPJ.
- Politica de Privacidade LGPD.

## Estrutura

```text
.
|-- index.html
|-- politica-privacidade.html
|-- assets/
|   |-- css/
|   |   |-- styles.css
|   |   `-- styles.min.css
|   |-- images/
|   |   |-- francisco-valente.jpeg
|   |   |-- fattech-signature.png
|   |   |-- favicon.svg
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

O JavaScript principal minificado e gerado a partir de `assets/js/main.js`:

```powershell
npx --yes terser assets/js/main.js -c -m -o assets/js/main.min.js
```

Depois de qualquer ajuste, sincronize a pasta de publicacao:

```powershell
Copy-Item index.html public_html\index.html -Force
Copy-Item politica-privacidade.html public_html\politica-privacidade.html -Force
Copy-Item assets\css\styles.css public_html\assets\css\styles.css -Force
Copy-Item assets\css\styles.min.css public_html\assets\css\styles.min.css -Force
Copy-Item assets\js\main.js public_html\assets\js\main.js -Force
Copy-Item assets\js\main.min.js public_html\assets\js\main.min.js -Force
```

## Validacoes Recomendadas

```powershell
npx --yes html-validate index.html politica-privacidade.html public_html\index.html public_html\politica-privacidade.html
node --check assets/js/main.js
node --check assets/js/animations.js
node --check assets/js/main.min.js
node --check assets/js/animations.min.js
npx --yes @axe-core/cli http://127.0.0.1:4173/ http://127.0.0.1:4173/politica-privacidade.html --exit
```

Para conferencia visual mobile/desktop, use o localhost e teste principalmente:

- Menu mobile.
- Secao do fundador.
- Secao de depoimentos.
- Pagina de Politica de Privacidade.
- Cards de clientes.
- CTAs de WhatsApp.
- FAQ accordion.

## Deploy

O pacote local de deploy e gerado como `fpv_deploy_20260610_final.zip`, contendo o conteudo de `public_html/` pronto para hospedagem:

- `index.html`
- `politica-privacidade.html`
- `.htaccess`
- `robots.txt`
- `sitemap.xml`
- `assets/`

As instrucoes detalhadas estao em [docs/DEPLOY.md](docs/DEPLOY.md).

## Ultima Atualizacao

2026-06-10:

- Nome do fundador/CEO padronizado como Francisco Valente.
- Criada pagina de Politica de Privacidade LGPD.
- Adicionado CNPJ `32.541.335.0001/03` no site.
- Adicionada assinatura FAT Tech no rodape.
- Corrigido logo da Cokinos e redesenhada a Prova Social em tres cards simetricos.
- Auditoria final executada com HTML Validate, Node syntax check, axe-core, checagem de links/assets e navegador local.
