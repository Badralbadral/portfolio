import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { ContactME } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

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
      <section id="section7">
        {" "}
        <ContactME />
      </section>
      <section id="section8">
        {" "}
        <Footer />
      </section>
    </>
  );
};
