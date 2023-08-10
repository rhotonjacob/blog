import style from "./about.module.scss";

const pageContent = {
  heading: "About me",
  text: [
    "I'm Jacob, and I've always loved building things with my hands. For me, web development isn't just about building a product. It's a form of creative expression that allows me to transform my ideas into tangible realities.",
    "As a self-taught web developer, everything I know is a result of my own curiosity and persistence. I learn by experimenting, and toying with all sorts of ideas. It's not been easy, but I love a challenge.",
  ],
};

const About = () => {
  return (
    <section id="about" className={style.about}>
      <div className={style.content}>
        <h1>{pageContent.heading}</h1>
        <p>{pageContent.text[0]}</p>
        <p>{pageContent.text[1]}</p>
        {/* list of skills or something */}
      </div>
      <div className={style.image} />
    </section>
  );
};

export default About;
