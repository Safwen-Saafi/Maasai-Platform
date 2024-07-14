import { ContactUs } from '@/components/ContactUs/ContactUs';
import { FeaturesCards } from '@/components/Features/FeaturesCard';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroBullets } from '@/components/Hero/HeroBullets';
import Waves from '@/components/Wave2/Wave2';
import Wave from '@/components/Waves/Waves';
export function HomePage() {
  return (
    <>
      <HeaderMenu/>
      <HeroBullets/>
      <Wave/>
      <FeaturesCards/>
      <Waves/>
      <FooterLinks/>
     
    </>
  );
}
