import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import Currency from './components/Currency/Currency';

export function CurrencyPage() {
  return (
    <>
      <HeaderMenu />
      <Currency/>
      <FooterLinks />
    </>
  );
}
