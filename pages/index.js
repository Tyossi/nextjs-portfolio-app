import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar/Navbar";
import FeaturedWork from "../components/FeaturedWork";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Header />
      <FeaturedWork />
    </div>
  );
}
