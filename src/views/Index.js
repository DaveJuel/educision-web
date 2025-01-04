import React from "react";
// core components
import AppNavbar from "components/Navbars/AppNavbar.js";
import AppHero from "./IndexSections/AppHero.js";
import AppFooter from "components/Footers/AppFooter.js";
import AppWhatWeOffer from "./IndexSections/AppWhatWeOffer.js";
import AppOurTools from "./IndexSections/AppOurTools.js";
import AppHowItWorks from "./IndexSections/AppHowItWorks.js";
import AppAboutUs from "./IndexSections/AppAboutUs.js";
import AppNewsletter from "./IndexSections/AppNewsletter.js";
import AppContactUs from "./IndexSections/AppContactUs.js";

class Reference extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <AppNavbar />
        <main ref="main">
          <AppHero />
          <AppWhatWeOffer/>
          <AppOurTools />
          <AppHowItWorks />
          <AppAboutUs />
          <AppNewsletter />
          <AppContactUs />
        </main>
        <AppFooter />
      </>
    );
  }
}

export default Reference;
