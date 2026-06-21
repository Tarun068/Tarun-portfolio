import React from "react";
import ScrollProgress from "./components/scrollprogress/ScrollProgress";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const Layout = () => {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span className="bg-blob bg-blob--1" />
        <span className="bg-blob bg-blob--2" />
      </div>
      <ScrollProgress />
      <Navbar />
      <main className="main-section">
        <div id="home" className="anchor">
          <Home />
        </div>
        <div id="about" className="anchor">
          <About />
        </div>
        <div id="experience" className="anchor">
          <Experience />
        </div>
        <div id="project" className="anchor">
          <Project />
        </div>
        <div id="skill" className="anchor">
          <Skill />
        </div>
        <div id="contact" className="anchor">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
