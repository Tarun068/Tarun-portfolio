import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="skill">
          <Skill />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
