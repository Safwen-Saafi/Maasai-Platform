import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import UserProfile from '@/components/UserProfile/UserProfile';

export function UserPage() {
  return (
    <>
      <HeaderMenu />
      <UserProfile/>
      <FooterLinks />
    </>
  );
}
