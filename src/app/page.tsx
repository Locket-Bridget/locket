import LandingPageSections from "./components/LandingPageSections";
import MainLanding from "./components/MainLanding";
import Testimonials from "./components/Testimonials";
import BlobCallout from "./components/BlobCallout";
import StripeDivider from "./components/StripeDivider";

export default function Home() {
  return (
    <>
      <MainLanding />
      <LandingPageSections />
      <StripeDivider />
      <BlobCallout />
      <StripeDivider />
      <Testimonials />
    </>
  );
}



