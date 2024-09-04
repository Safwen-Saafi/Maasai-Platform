import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import EconomiccalendarComponent from '@/components/EconomicCalendar/EconomiccalendarComponent';

export function EconomicPage() {
  return (
    <>
      <HeaderMenu />
      <EconomiccalendarComponent/>
      <FooterLinks />
    </>
  );
}
