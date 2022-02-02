import FeaturedWork from "../components/FeaturedWork";
import Skill from "../components/Skills/Skills";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import HeaderTwo from "../components/HeaderTwo";
import AboutMe from "../components/AboutMe";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home({ projects }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.container}>
        <Nav />
        <HeaderTwo />
        <AboutMe />
        <FeaturedWork projects={projects} />
        <Skill />
        <Timeline />
        <Contact />
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
