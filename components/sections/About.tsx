import style from "./about.module.scss";

const About = () => {
  return (
    <section id="about" className={style.about}>
      <div className={style.maxWidth}>
        <h2>About</h2>
        <div className={style.contentContainer}>
          <div className={style.image} />
          <div className={style.content}>
            <p>
              I&apos;m Jacob, and I&apos;ve always loved building things with my
              hands. For me, web development isn&apos;t just about building a
              product. It&apos;s a form of creative expression that allows me to
              breathe life into new ideas, one line at a time.
            </p>
            <p>
              As a self-taught web developer, everything I know is a result of
              my own curiosity and perseverance. I learn by experimenting, and
              toying with all sorts of ideas.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently.
            </p>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
