import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import AboutComponent from '@/components/About/AboutComponent';

export function AboutPage() {
  return (
    <>
      <HeaderMenu />
      <AboutComponent/>
      <FooterLinks />
    </>
  );
}
