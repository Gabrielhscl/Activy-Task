import logo from "../../assets/react.svg";

//  Css
import styles from "./Footer.module.css";
// Icons
// import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import google from "../../assets/icons/google.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.aboutFooter}>
        <div className={styles.contentLogo}>
          <img src={logo} alt="Logo ReactJS" />
          <span>ReactJs</span>
        </div>
        <ul className={styles.listFooter}>
          <li>About</li>
          <li>Features</li>
          <li>News</li>
          <li>Apps</li>
        </ul>
        <div className={styles.socialFooter}>
          {/* <img src={facebook} alt="Facebook icon" /> */}
          <img src={instagram} alt="Facebook icon" />
          <img src={google} alt="Facebook icon" />
        </div>
      </div>
      <div className={styles.copy}>
        <span>&copy; Gabriel Henrique.</span>
        <div className={styles.termsFooter}>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
