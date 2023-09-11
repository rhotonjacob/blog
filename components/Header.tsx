import Image from "next/image";
import logo from "public/logo.svg";
import style from "./Header.module.scss";

const Header = () => (
  <header className={style.header}>
    <div className={style.maxWidth}>
      <a href="/" aria-label="home">
        <Image width={60} height={60} src={logo} alt="logo" />
      </a>
    </div>
  </header>
);

export default Header;
