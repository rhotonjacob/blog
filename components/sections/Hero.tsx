import Image from "next/image";
import headshot from "public/headshot.jpg";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.maxWidth}>
        <h1>Jacob Rhoton</h1>
        <p>A Frontend Web Developer</p>
        {/* <Image className={style.image} src={headshot} alt="Photo of myself" /> */}
      </div>
    </section>
  );
};

export default Hero;
