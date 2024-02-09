import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Work } from "./Work";
// import { ContactMe } from "./ContactMe";
import { Footer } from "./Footer";

export const Portfolio = () => {
  return (
    <>
      <section id="section1">
        {" "}
        <Header />
      </section>
      <section id="section2">
        {" "}
        <Hero />
      </section>
      <section id="section3">
        {" "}
        <About />
      </section>
      <section id="section4">
        {" "}
        <Skills />
      </section>
      <section id="section5">
        {" "}
        <Experience />
      </section>
      <section id="section6">
        {" "}
        <Work />
      </section>
      {/* <section id="section7">
        {" "}
        <ContactMe />
      </section> */}
      <section id="section8">
        {" "}
        <Footer />
      </section>
    </>
  );
};
