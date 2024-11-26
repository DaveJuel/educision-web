import React from "react";
// core components
import AppNavbar from "components/Navbars/AppNavbar.js";
import AppHero from "./IndexSections/AppHero.js";
import AppFooter from "components/Footers/AppFooter.js";

class Reference extends React.Component {
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
  render() {
    return (
      <>
        <AppNavbar />
        <main ref="main">
          <AppHero />
        </main>
        <AppFooter />
      </>
    );
  }
}

export default Reference;
