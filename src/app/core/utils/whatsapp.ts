import { SITE } from '@core/config/site.config';

export function whatsappLink(message?: string, phone: string = SITE.whatsapp.phone): string {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
