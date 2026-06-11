# Deploy

Este documento descreve como preparar e publicar o site da FPV Consultoria Empresarial.

## Pre-requisitos

- Acesso ao diretorio do projeto.
- Servidor estatico ou hospedagem Apache/Hostinger.
- Permissao para enviar arquivos para a raiz publica do dominio.

## Validacao Antes do Deploy

Na raiz do projeto, rode:

```powershell
npx --yes html-validate index.html politica-privacidade.html public_html\index.html public_html\politica-privacidade.html
node --check assets/js/main.js
node --check assets/js/animations.js
node --check assets/js/main.min.js
node --check assets/js/animations.min.js
npx --yes @axe-core/cli http://127.0.0.1:4173/ http://127.0.0.1:4173/politica-privacidade.html --exit
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

O deploy final deve ser gerado a partir de `public_html/`, pois essa pasta espelha a raiz publica do servidor.

```powershell
Compress-Archive -Path 'public_html\*' -DestinationPath 'fpv_deploy_20260610_final.zip' -Force
```

O ZIP deve conter:

- `index.html`
- `politica-privacidade.html`
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
- `politica-privacidade.html` abre sem erro HTTP.
- Imagem do fundador aparece na secao `#fundador`.
- Logos de clientes aparecem com contraste correto.
- Logo da Cokinos aparece sem corte.
- Depoimentos genericos removidos nao aparecem mais.
- Prova Social mostra DGL Sistemas, Cokinos Auditores e Imunita em cards simetricos no desktop.
- CNPJ `32.541.335.0001/03` aparece no rodape e na politica.
- Assinatura `desenvolvido com tecnologia fattech.com.br` aparece no rodape com miniatura da FAT Tech.
- Menu mobile abre e fecha corretamente.
- FAQ abre apenas uma pergunta por vez.
- Botao flutuante de WhatsApp funciona.
- Auditoria automatizada axe-core passa com 0 violacoes criticas conhecidas.
- `https://www.fpvconsultoria.com.br/sitemap.xml` esta acessivel.
- `https://www.fpvconsultoria.com.br/robots.txt` esta acessivel.

## Publicacao no GitHub

Fluxo recomendado:

```powershell
git status
git add .htaccess CHANGELOG.md README.md docs index.html politica-privacidade.html sitemap.xml robots.txt assets public_html
git commit -m "Finalize FPV site audit and deploy package"
git push origin main
```
