import Image from "next/image";
import shippo72 from "public/shippo72.svg";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.maxWidth}>
        <Image
          className={style.pattern}
          src={shippo72}
          alt="colorful geometric pattern"
        />
        <h1>Jacob Rhoton</h1>
        <p>Developer &amp; Designer</p>
      </div>
    </section>
  );
};

export default Hero;
