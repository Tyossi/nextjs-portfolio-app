import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar/Navbar";
import FeaturedWork from "../components/FeaturedWork";
import Skill from "../components/Skills/Skills";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import AboutMe from "../components/AboutMe";
import { motion } from "framer-motion";
import Nav from "../components/Nav";

export default function Home({ projects }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.container}>
        {/* <NavBar /> */}
        {/* <Header /> */}
        <Nav />
        <HeaderTwo />
        <AboutMe />
        <FeaturedWork projects={projects} />
        <Skill />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const projects = await res.json();

  return {
    props: { projects },
  };
};
