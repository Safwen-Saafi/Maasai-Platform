import AboutComponent from '@/components/About/AboutComponent';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import Blur from '@/components/Blurred/Blur';
import { GetInTouch } from '@/components/ContactUs/GetInTouch';
import Doc from '@/components/Docu/Doc';
import { FeaturesCards } from '@/components/Features/FeaturesCard';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroBullets } from '@/components/Hero/HeroBullets';
import SmartforexscreenComponent from '@/components/SmartForexScreen/SmartforexscreenComponent';
import Waves from '@/components/Wave2/Wave2';
import Wave from '@/components/Waves/Waves';
import Install from '@/components/Install/Install';
import Slider from '@/components/Slider/Slider';
import AdvancedChart from '@/components/SymbolOverviewChart/AdvancedChart';
import TradingViewTickerWidget from '@/components/Ticker/TradingViewTickerWidget';
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
      <Slider/>
      <Install/>
      <Work/>
      <Doc/>
      <Blur/>
      <FooterLinks />
    </>
  );
}
