import LocationPin from "../public/icons/location-pin.svg";
import styles from "../styles/Contact.module.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__subContainer}>
        <div className={styles.contact__details}>
          <span>Contact</span>
          <h3>GET IN TOUCH</h3>
          <p>
            Please fill out the form to get in touch with me or you can just put
            a call through anytime between 9:00 a.m. and 8:00 p.m. WAT, Monday
            through Friday
          </p>
          <span className={styles.contact__info}>
            <LocationPin className={styles.svg__styling} />
            <p className={styles.contact__infoText}>44 Place, Tokyo, Japan</p>
          </span>
          <span className={styles.contact__info}>
            <LocationPin className={styles.svg__styling} />
            <p className={styles.contact__infoText}>44 Place, Tokyo, Japan</p>
          </span>
          <span className={styles.contact__info}>
            <LocationPin className={styles.svg__styling} />
            <p className={styles.contact__infoText}>44 Place, Tokyo, Japan</p>
          </span>
          <span className={styles.contact__info}>
            <LocationPin className={styles.svg__styling} />
            <p className={styles.contact__infoText}>44 Place, Tokyo, Nigeria</p>
          </span>
        </div>
        <div className={styles.contact__form__container}>
          <form className={styles.contact__form}></form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
