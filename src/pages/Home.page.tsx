import Blur from '@/components/Blurred/Blur';
import Doc from '@/components/Docu/Doc';
import { FeaturesCards } from '@/components/Features/FeaturesCard';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroBullets } from '@/components/Hero/HeroBullets';
import Install from '@/components/Install/Install';
import Prop from '@/components/Prop/Prop';
import Slider from '@/components/Slider/Slider';
import TradingViewTickerWidget from '@/components/Ticker/TradingViewTickerWidget';
import Waves from '@/components/Wave2/Wave2';
import Wave5 from '@/components/Wave5/Waves';
import Wave4 from '@/components/wave4/Waves';
import Wave from '@/components/Waves/Waves';
import Work from '@/components/Work/Work';
export function HomePage() {
  return (
    <>
      <HeaderMenu />
      <TradingViewTickerWidget />
      <HeroBullets />
      <Wave />
      <FeaturesCards />
      <Waves />
      <Work />
      <Doc />
      <Wave4 />
      <Prop />
      <Wave5 />
      <Install />
      <Slider />
      <Blur />
      <FooterLinks />
    </>
  );
}
