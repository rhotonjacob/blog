import Image from "next/image";
import headshot from "public/headshot.jpg";
import style from "./about.module.scss";

const About = () => {
  return (
    <section id="about" className={style.about}>
      <div className={style.maxWidth}>
        <Image
          className={style.headshot}
          src={headshot}
          alt="photo of myself"
        />
        <h1>About Me</h1>
        <div className={style.content}>
          <p>
            I&apos;m Jacob, and I&apos;ve always loved building things with my
            hands. For me, web development isn&apos;t just about building a
            product. It&apos;s a form of creative self-expression that allows me
            to breathe life into new ideas, one line of code at a time.
          </p>
          <p>
            Being self-taught, everything I know is a result of my own curiosity
            and perseverance. I learn by experimenting, and toying with all
            sorts of ideas.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently.
          </p>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
