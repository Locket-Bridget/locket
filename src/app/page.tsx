import LandingPageSections from "./components/LandingPageSections";
import MainLanding from "./components/MainLanding";
import Testimonials from "./components/Testimonials";
import BlobCallout from "./components/BlobCallout";

export default function Home() {
  return (
    <>
      <MainLanding />
      <LandingPageSections />
      <BlobCallout />
      <Testimonials />
    </>
  );
}



