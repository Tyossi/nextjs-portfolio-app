import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar/Navbar";
import FeaturedWork from "../components/FeaturedWork";
import Skill from "../components/Skills/Skills";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <NavBar /> */}
      {/* <Header /> */}
      <HeaderTwo />
      <FeaturedWork />
      <Skill />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
