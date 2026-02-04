import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Garantia } from "./Garantia";
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";
import { Section5 } from "./Sections/Section5";
import { Section6 } from "./Sections/Section6";
export const LandingPage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Garantia/>
      <Faq />
      <Footer />
    </div>
  );
};
