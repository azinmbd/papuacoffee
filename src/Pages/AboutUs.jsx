import * as React from "react";
import Footer from "../components/Footer";
import AboutUsPageFirstSection from "../components/AboutUsPageFirstSection";
import AboutUsProgressBar from "../components/AboutUsProgressBar";
import AboutUsQualitySection from "../components/AboutUsQualitySection";

const AboutUs = () => {
  return (
    <React.Fragment>
      <AboutUsPageFirstSection />
      <AboutUsQualitySection />
      <AboutUsProgressBar />
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
