import { whatsappLink } from './whatsapp';

describe('whatsappLink', () => {
  it('returns the bare link when no message is given', () => {
    expect(whatsappLink(undefined, '5500000000000')).toBe('https://wa.me/5500000000000');
  });

  it('encodes the message as the text param', () => {
    expect(whatsappLink('Olá, tudo bem?', '55')).toBe('https://wa.me/55?text=Ol%C3%A1%2C%20tudo%20bem%3F');
  });
});
