import style from "./contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <div className={style.maxWidth}>
        <h2>Let&apos;s Connect</h2>
        <div className={style.content}>
          <p>I&apos;m currently looking for opportunities!</p>
          <p>
            Whether you already have a project in mind, or you&apos;d just like
            to say hello, my inbox is always open.
          </p>
          <a
            href="mailto:rhoton.jacob@gmail.com"
            target="_blank"
            className={style.emailLink}
          >
            Say Hello!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
