import PhoneIcon from "../public/icons/phone-icon.svg";
import LocationIcon from "../public/icons/location-icon.svg";
import EnvelopeIcon from "../public/icons/envelope-icon.svg";
import GithubIcon from "../public/icons/github-icon2.svg";
import PaperPlaneIcon from "../public/icons/paperplane-icon.svg";
import Footer from "./Footer";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact__container} id="contact">
      <div className={styles.contact__subContainer}>
        <div className={styles.contact__details}>
          <span>Contact</span>
          <VisibilitySensor>
            {({ isVisible }) => {
              return (
                <h3
                  className={isVisible ? styles.animated__class : null}
                  data-text="GET IN TOUCH"
                >
                  GET IN TOUCH
                </h3>
              );
            }}
          </VisibilitySensor>

          <p className={styles.contact__instruction}>
            Please fill out the form to get in touch with me or you can put a
            call through anytime between 9:00 a.m. and 8:00 p.m. WAT, Monday
            through Friday.
          </p>
          <span className={styles.contact__info}>
            <LocationIcon className={styles.svg__styling} />
            <p className={styles.contact__infoText}>Area 1, Abuja, Nigeria</p>
          </span>
          <span className={styles.contact__info}>
            <PhoneIcon className={styles.svg__styling} />
            <p className={styles.contact__infoText}>+234 07062377323</p>
          </span>
          <span className={styles.contact__info}>
            <EnvelopeIcon className={styles.svg__styling} />
            <p className={styles.contact__infoText}>
              toyosiogundairo@gmail.com
            </p>
          </span>
          <span className={styles.contact__info}>
            <GithubIcon className={styles.svg__styling} />
            <p className={styles.contact__infoText}>tyossi</p>
          </span>
          {/* </div> */}
        </div>
        <div className={styles.contact__form__container}>
          <form
            className={styles.contact__form}
            action="https://formsubmit.co/toyosiogundairo@gmail.com"
            method="POST"
          >
            <input
              className={styles.input__field}
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              className={styles.input__field}
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <input
              className={styles.input__field}
              placeholder="Message"
              type="text"
              name="message"
              required
            />
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              type="submit"
            >
              Submit
              <PaperPlaneIcon className={styles.svg__styling} />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
