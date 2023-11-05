import HeaderNavigation from "./HeaderNavigation";
import HomeSection from "./HomeSection";
import ServiceSection from "./ServiceSection";
import ShowreelsSection from "./ShowreelsSection";
import ContactSection from "./ContactSection";
import ClientSection from "./ClientSection";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <main>
      <HeaderNavigation />
      <HomeSection />
      <ServiceSection />
      <ShowreelsSection />
      <ContactSection />
      <ClientSection />
      <FooterSection />
    </main>
  );
}
