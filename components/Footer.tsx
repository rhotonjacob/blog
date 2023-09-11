import IconGitHub from "components/icons/Github";
import IconLinkedIn from "components/icons/Linkedin";

import style from "./Footer.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.maxWidth}>
      <div className={style.socials}>
        <a href="https://github.com/rhotonjacob" target="_blank">
          {/* <IconGitHub /> */}
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jacobrhoton" target="_blank">
          {/* <IconLinkedIn /> */}
          LinkedIn
        </a>
        <a href="mailto:rhoton.jacob@gmail.com" target="_blank">
          Email
        </a>
      </div>
      <p>&copy; Jacob Rhoton 2023</p>
    </div>
  </footer>
);

export default Footer;
