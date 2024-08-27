import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeaderMenu } from "@/components/Header/HeaderMenu";
import { AuthenticationForm } from "@/components/SignUp/AuthenticationForm";
import SmartforexscreenComponent from "@/components/SmartForexScreen/SmartforexscreenComponent";

export function SmartPage() {
  return (
    <>
      <HeaderMenu/>
      <SmartforexscreenComponent />
      <FooterLinks/>
    </>
  );
}
