import style from "./hero.module.css";

const pageContent = {
  heading: "Welcome!",
  text: [
    "My name is Jacob.",
    "I'm a professional web developer and aspiring _____.",
  ],
};

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.content}>
        <h1>{pageContent.heading}</h1>
        <p>{pageContent.text[0]}</p>
        <p>{pageContent.text[1]}</p>
        <button className={style.cta}>Button</button>
      </div>
      <div className={style.image} />
    </section>
  );
};

export default Hero;
