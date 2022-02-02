import GithubIcon from "../public/icons/github-icon.svg";
import LinkedinIcon from "../public/icons/linkedin-icon.svg";
import FacebookIcon from "../public/icons/facebook-icon.svg";
import TwitterIcon from "../public/icons/twitter-icon.svg";
import WhatsappIcon from "../public/icons/whatsapp-icon.svg";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <span className={styles.footer__container}>
      <span className={styles.footer}>
        <p>Copyright 2022. All rights reserved.</p>
        <span>
          <a href="https://github.com/Tyossi" target="#">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/omotoyosi-ogundairo-4271b6166/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <a href="https://web.facebook.com/toyorssy" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/DairoToyosi" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://wa.me/23407059549612" target="_blank">
            <WhatsappIcon />
          </a>
        </span>
      </span>
    </span>
  );
};

export default Footer;
