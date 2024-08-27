import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import AdvancedChart from '@/components/SymbolOverviewChart/AdvancedChart';

export function LiveChartPage() {
  return (
    <>
      <HeaderMenu />
      <AdvancedChart/>
      <FooterLinks />
    </>
  );
}
