# Changelog

Todas as mudancas relevantes deste projeto ficam registradas aqui.

## 2026-06-10

- Padronizado o nome do fundador e CEO em todo o site como Francisco Valente.
- Criada a pagina `politica-privacidade.html` com Politica de Privacidade aderente a LGPD.
- Adicionado o CNPJ `32.541.335.0001/03` na home, na pagina de privacidade e nos dados estruturados.
- Adicionada assinatura de rodape `desenvolvido com tecnologia fattech.com.br` com miniatura da logo FAT Tech.
- Criado asset otimizado `assets/images/fattech-signature.png`.
- Corrigido o enquadramento da foto do fundador na dobra `#fundador`.
- Corrigido o SVG `assets/images/logos/cokinos.svg` para evitar corte no nome da empresa.
- Atualizada a Prova Social:
  - DGL Sistemas - Lorrane Gil.
  - Cokinos Auditores - Demetrio Ckinos.
- Redesenhada a grade de depoimentos em tres cards simetricos no desktop, com alturas e larguras equivalentes.
- Envolvido o botao flutuante de WhatsApp em landmark semantico `nav` para zerar violacao automatizada de acessibilidade.
- Ajustado `assets/js/main.js` para tratar links externos a secoes locais sem quebrar a navegacao ativa.
- Atualizados cache-busters de CSS/JS para `20260610-final-audit`.
- Atualizado `sitemap.xml` com `politica-privacidade.html` e `lastmod` de 2026-06-10.
- Atualizado `.htaccess` com hashes CSP corretos para os JSON-LD atuais.
- Sincronizada a pasta `public_html/` com a raiz do projeto.
- Auditoria final executada:
  - `html-validate` em home e politica, raiz e `public_html`.
  - `node --check` em JS fonte e minificado.
  - `git diff --check`.
  - `axe-core` em home e politica com 0 violacoes.
  - Checagem local de links, anchors, assets e paridade com `public_html`.
  - Checagem HTTP 200 dos arquivos principais no localhost.
  - Validacao visual no navegador em mobile e desktop.

## 2026-06-01

- Adicionada nova dobra institucional sobre Francisco Valente, fundador e CEO da FPV.
- Incluida foto local `assets/images/francisco-valente.jpeg`.
- Atualizado o menu desktop, menu mobile e rodape com o link `Fundador`.
- Adicionado schema `founder` no JSON-LD da pagina.
- Ajustada a responsividade da nova dobra, priorizando leitura mobile-first.
- Ajustado o layout em desktop/intermediario para evitar sobreposicao com o botao flutuante do WhatsApp.
- Removidos dois depoimentos genericos:
  - "Depois da FPV..."
  - "A DRE gerencial..."
- Mantidos os depoimentos reais, posteriormente padronizados como DGL Sistemas, Cokinos Auditores e Imunita.
- Atualizado `sitemap.xml` com `#fundador` e `lastmod` de 2026-06-01.
- Regenerado `assets/css/styles.min.css`.
- Recriado o pacote local `fpv_deploy.zip`.
- Executado ciclo de auditoria de seguranca:
  - CSP recalculado para o JSON-LD atual.
  - Adicionados bloqueios para objetos, frames, workers e atributos de script.
  - Reforcadas diretivas de isolamento entre origens no `.htaccess`.
  - Adicionado `noreferrer` aos links externos com `target="_blank"`.
  - Ampliada protecao contra acesso a markdowns, backups, logs e dumps sensiveis.
- Adicionado favicon local para eliminar 404 no console.
- Ajustados nomes acessiveis dos links de marca no header e rodape.
- Otimizadas URLs de imagens remotas com `auto=format`.
- Adicionados `srcset` e `sizes` nas imagens remotas principais.
- Reconstruida a dobra de contato com painel de atendimento e formulario de captacao de leads.
- Formulario de lead configurado para enviar nome, email, WhatsApp, empresa, CNPJ opcional, area de interesse e mensagem diretamente ao WhatsApp base da FPV.
- Botao flutuante do WhatsApp passa a ficar oculto na dobra de contato para nao sobrepor campos do formulario no mobile.
- Reorganizada a grade de servicos para 12 cards simetricos no desktop.
- Adicionado o card final de BPO Financeiro na secao de servicos.
- Atualizados os CTAs de servicos com mensagens de WhatsApp contextualizadas por card.
- Removida a dobra de dor com o texto "Sua empresa sabe exatamente para onde o dinheiro esta indo?".
- Ajustada a arquitetura mobile-first para eliminar overflow em 320px.
- Ampliadas areas clicaveis de botoes, CTAs em texto, logo, navegacao e links do rodape.
- Adicionada sincronizacao de ancora inicial para melhorar navegacao em WebKit/Safari.
- Reforcada a sanitizacao do formulario de lead antes do envio ao WhatsApp.
- Endurecida a protecao contra clickjacking com `X-Frame-Options: DENY`.

## 2026-05-25

- Melhorado o contraste dos cards de logos de clientes.
- Corrigido o logo da Imunita para evitar corte visual.
- Adicionados depoimentos reais enviados pelo cliente.
- Removida a expressao "Cliente FPV Consultoria" do depoimento da DGL.
- Recriado e validado o pacote de deploy.

## Historico Inicial

- Criacao do site institucional da FPV Consultoria Empresarial.
- Implementacao de layout mobile-first em HTML, CSS e JavaScript vanilla.
- Inclusao de secoes de BPO Financeiro, servicos, processos, beneficios, clientes, FAQ, CTA e rodape.
- Configuracao de `.htaccess`, `robots.txt` e `sitemap.xml`.
