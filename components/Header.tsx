import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h2>Jacob Rhoton</h2>
      <nav className={style.nav}>
        <ul className={style.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* <button className={style.navMenu} /> */}
      </nav>
    </header>
  );
};

export default Header;
