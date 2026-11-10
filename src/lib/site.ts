export const WHATSAPP_NUMBER = "5581995566566";
export const WHATSAPP_DISPLAY = "(81) 9 9556-6566";
export const WHATSAPP_MESSAGE = "Olá! Quero conhecer o OFG HDS.";

export function whatsappHref(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_URL = "https://oportofortegroup.com";
export const SITE_LABEL = "oportofortegroup.com";

/* Navegação e rótulos traduzidos (PT/ES/EN) vivem em "@/lib/i18n". */
