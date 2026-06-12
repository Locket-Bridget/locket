import LandingPageSections from "./components/LandingPageSections";
import MainLanding from "./components/MainLanding";
import Testimonials from "./components/Testimonials";
import BlobCallout from "./components/BlobCallout";
import StripeDivider from "./components/StripeDivider";
import { HomepageFaq } from "./components/HomepageFaq";
import { HomepageGuidesTeaser } from "./components/HomepageGuidesTeaser";
export default function Home() {
  return (
    <>
      <MainLanding />
      <LandingPageSections />
      <StripeDivider />
      <BlobCallout />
      <StripeDivider />
      <HomepageGuidesTeaser />
      <HomepageFaq />
      <Testimonials />
    </>
  );
}



