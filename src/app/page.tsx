import LandingPageSections from "./components/LandingPageSections";
import MainLanding from "./components/MainLanding";
import Testimonials from "./components/Testimonials";
import BlobCallout from "./components/BlobCallout";
import StripeDivider from "./components/StripeDivider";
import { HomepageFaq } from "./components/HomepageFaq";
export default function Home() {
  return (
    <>
      <MainLanding />
      <LandingPageSections />
      <StripeDivider />
      <BlobCallout />
      <StripeDivider />
      <HomepageFaq />
      <Testimonials />
    </>
  );
}



