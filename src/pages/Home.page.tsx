import AboutComponent from '@/components/About/AboutComponent';
import { GetInTouch } from '@/components/ContactUs/GetInTouch';
import { FeaturesCards } from '@/components/Features/FeaturesCard';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroBullets } from '@/components/Hero/HeroBullets';
import FinancialnewsComponent from '@/components/News/FinancialnewsComponent';
import SmartforexscreenComponent from '@/components/SmartForexScreen/SmartforexscreenComponent';
import AdvancedChart from '@/components/SymbolOverviewChart/AdvancedChart';
import TradingViewTickerWidget from '@/components/Ticker/TradingViewTickerWidget';
import Waves from '@/components/Wave2/Wave2';
import Wave from '@/components/Waves/Waves';
export function HomePage() {
  return (
    <>
      <HeaderMenu />
      <TradingViewTickerWidget />
      <HeroBullets />
      <Wave />
      <FeaturesCards />
      <Waves />
      <FooterLinks />
    </>
  );
}
