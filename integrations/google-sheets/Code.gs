/**
 * Recebe os pedidos do formulário da landing HDS NR-1 e acrescenta uma linha na planilha.
 *
 * Instalação: ver README.md nesta pasta.
 * Segurança: o token partilhado fica em Propriedades do script (LEAD_TOKEN), nunca neste ficheiro.
 */

const SHEET_NAME = "Leads";
const MAX_CELL_LENGTH = 200;
const LOCK_TIMEOUT_MS = 10000;

const COLUMNS = [
  { field: "criadoEm", header: "Data" },
  { field: "nome", header: "Nome" },
  { field: "empresa", header: "Empresa" },
  { field: "cargo", header: "Cargo" },
  { field: "email", header: "E-mail" },
  { field: "telefone", header: "WhatsApp" },
  { field: "colaboradores", header: "Colaboradores" },
  { field: "areas", header: "Áreas ou setores" },
  { field: "interesse", header: "Interesse" },
  { field: "origem", header: "Formulário" },
];

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const expected = PropertiesService.getScriptProperties().getProperty("LEAD_TOKEN");
    if (!expected || body.token !== expected) return reply_({ ok: false, error: "unauthorized" });

    const lock = LockService.getScriptLock();
    lock.waitLock(LOCK_TIMEOUT_MS);
    try {
      getSheet_().appendRow(COLUMNS.map((col) => toCell_(col.field, body[col.field])));
    } finally {
      lock.releaseLock();
    }
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: "server_error" });
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map((col) => col.header));
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
  }
  return sheet;
}

function toCell_(field, value) {
  if (field === "criadoEm") {
    const date = new Date(value);
    return isNaN(date.getTime()) ? new Date() : date;
  }
  const text = value == null ? "" : String(value).slice(0, MAX_CELL_LENGTH);
  // Impede que um valor começado por = + - @ seja interpretado como fórmula.
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

function reply_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
