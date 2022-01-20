import LocationPin from "../public/icons/location-pin.svg";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__subContainer}>
        <div className={styles.contact__details}>
          <span>Contact</span>
          <h3>GET IN TOUCH</h3>
          <p className={styles.contact__instruction}>
            Please fill out the form to get in touch with me or you can just put
            a call through anytime between 9:00 a.m. and 8:00 p.m. WAT, Monday
            through Friday
          </p>
          {/* <div className={styles.contact__infoBox}> */}
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
          {/* </div> */}
        </div>
        <div className={styles.contact__form__container}>
          <form className={styles.contact__form}>
            <input className={styles.input__field} placeholder="Name" />
            <input className={styles.input__field} placeholder="Email" />
            <input className={styles.input__field} placeholder="Message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
