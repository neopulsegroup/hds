# Leads do formulário numa Planilha Google

O formulário da landing envia cada pedido para `/api/leads`. A rota valida os dados e reencaminha-os para um Google Apps Script, que acrescenta uma linha na planilha.

Fluxo: formulário → `/api/leads` (Next.js) → Apps Script (web app) → separador `Leads` da planilha.

## 1. Criar a planilha e o script

1. Criar uma planilha nova em https://sheets.new, por exemplo "Leads HDS NR-1".
2. Na planilha: **Extensões → Apps Script**.
3. Apagar o conteúdo de `Code.gs` e colar o conteúdo de [`Code.gs`](./Code.gs) desta pasta. Guardar.

## 2. Definir o token partilhado

O URL do web app é público. O token impede que outros escrevam na planilha.

1. Gerar um token aleatório no terminal:
   ```bash
   node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
   ```
2. No Apps Script: **Definições do projecto** (ícone da engrenagem) → **Propriedades do script** → **Adicionar propriedade do script**.
   - Propriedade: `LEAD_TOKEN`
   - Valor: o token gerado.
3. Guardar. O token nunca vai para o código nem para o Git.

## 3. Publicar como aplicação web

1. **Implementar → Nova implementação**.
2. Tipo: **Aplicação Web**.
   - Executar como: **Eu**.
   - Quem tem acesso: **Qualquer pessoa**.
3. **Implementar** e autorizar o acesso à planilha com a conta Google.
4. Copiar o **URL da aplicação Web** (termina em `/exec`).

Ao alterar o `Code.gs` mais tarde: **Implementar → Gerir implementações → Editar → Versão: Nova versão**. Sem isso, o URL continua a servir o código antigo.

## 4. Configurar o site

No **Vercel → Settings → Environment Variables** (Production e Preview):

| Variável | Valor |
|---|---|
| `LEAD_WEBHOOK_URL` | URL `/exec` do passo 3 |
| `LEAD_WEBHOOK_TOKEN` | o mesmo token do passo 2 |

Fazer **Redeploy** para as variáveis entrarem em vigor.

Para testar em local, criar `site/.env.local` (já está no `.gitignore`) com as mesmas duas variáveis e reiniciar `npm run dev`.

## 5. Testar

Enviar o formulário no site. Deve aparecer "Pedido recebido." e uma linha nova no separador `Leads`. Na primeira vez, o script cria o separador e o cabeçalho.

| Sintoma | Causa provável |
|---|---|
| "Falta um passo." e nada na planilha | `LEAD_TOKEN` diferente de `LEAD_WEBHOOK_TOKEN`, ou implementação sem acesso "Qualquer pessoa" |
| "Falta um passo." logo ao enviar | variáveis em falta no Vercel ou sem redeploy |
| Código novo sem efeito | falta publicar uma nova versão da implementação |

## O que o script faz

- Recusa pedidos sem o token correcto. O Apps Script responde sempre HTTP 200, por isso devolve `{ "ok": false }` e a rota trata isso como falha.
- Usa um bloqueio (`LockService`) para dois envios simultâneos não se sobreporem.
- Colunas: Data, Nome, Empresa, Cargo, E-mail, WhatsApp, Colaboradores, Áreas ou setores, Interesse, Formulário (topo ou fecho).
- Corta cada célula a 200 caracteres e acrescenta `'` a valores começados por `= + - @`, para não serem lidos como fórmula.
- Não guarda IP, navegador nem o token.

Os dados pessoais ficam na conta Google de quem cria a planilha. Partilhe a planilha só com quem trata os contactos comerciais (LGPD).
