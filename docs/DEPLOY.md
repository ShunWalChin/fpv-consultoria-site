# Deploy

Este documento descreve como preparar e publicar o site da FPV Consultoria Empresarial.

## Pre-requisitos

- Acesso ao diretorio do projeto.
- Servidor estatico ou hospedagem Apache/Hostinger.
- Permissao para enviar arquivos para a raiz publica do dominio.

## Validacao Antes do Deploy

Na raiz do projeto, rode:

```powershell
npx --yes html-validate index.html
node --check assets/js/main.js
node --check assets/js/animations.js
node --check assets/js/main.min.js
node --check assets/js/animations.min.js
```

Confira localmente:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

URL local:

```text
http://127.0.0.1:4173/
```

## Gerar ZIP de Deploy

```powershell
Compress-Archive -LiteralPath @('index.html','.htaccess','robots.txt','sitemap.xml','assets') -DestinationPath 'fpv_deploy.zip' -Force
```

O ZIP deve conter:

- `index.html`
- `.htaccess`
- `robots.txt`
- `sitemap.xml`
- `assets/css/`
- `assets/js/`
- `assets/images/`

O ZIP nao deve conter:

- `.git/`
- `.claude/`
- `node_modules/`
- `.env`
- `index.legacy.html`
- arquivos temporarios de teste

## Publicacao

1. Acesse o gerenciador de arquivos ou FTP da hospedagem.
2. Envie o conteudo de `fpv_deploy.zip` para a raiz publica do site.
3. Confirme que `index.html` ficou na raiz publica.
4. Confirme que `.htaccess`, `robots.txt`, `sitemap.xml` e `assets/` foram enviados.
5. Abra o dominio em janela anonima e confira o carregamento.

## Checklist Pos-deploy

- Site abre sem erro HTTP.
- Imagem do fundador aparece na secao `#fundador`.
- Logos de clientes aparecem com contraste correto.
- Depoimentos genericos removidos nao aparecem mais.
- Menu mobile abre e fecha corretamente.
- FAQ abre apenas uma pergunta por vez.
- Botao flutuante de WhatsApp funciona.
- `https://www.fpvconsultoria.com.br/sitemap.xml` esta acessivel.
- `https://www.fpvconsultoria.com.br/robots.txt` esta acessivel.

## Publicacao no GitHub

Fluxo recomendado:

```powershell
git status
git add index.html assets README.md CHANGELOG.md docs sitemap.xml
git commit -m "Update founder section and documentation"
git push origin main
```
