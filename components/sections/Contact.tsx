import style from "./contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <div className={style.maxWidth}>
        <h1>Let&apos;s Connect</h1>
        <div className={style.content}>
          <p>
            I&apos;m looking for work! Whether you have something in mind or
            you&apos;d just like to chat, my inbox is always open.
          </p>
          <a
            href="mailto:rhoton.jacob@gmail.com"
            target="_blank"
            className={style.emailLink}
          >
            Send me an email!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
