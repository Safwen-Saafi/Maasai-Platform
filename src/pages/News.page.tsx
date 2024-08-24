import { HeaderMenu } from "@/components/Header/HeaderMenu";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import FinancialnewsComponent from "@/components/News/FinancialnewsComponent";

export function NewsPage() {
  return (
    <>
        <HeaderMenu/>
        <FinancialnewsComponent/>
        <FooterLinks/>
    </>
  );
}
