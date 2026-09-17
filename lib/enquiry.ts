export const WHATSAPP_NUMBER = '919176209914';
export const CONTACT_EMAIL = 'info@aeroinedutech.in';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body?: string): string {
  let link = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  if (body) link += `&body=${encodeURIComponent(body)}`;
  return link;
}
