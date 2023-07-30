import style from "./contact.module.css";

const pageContent = {
  heading: "Let's connect!",
  text: [
    "I'm currently looking for new opportunities!",
    "Whether you already have a project in mind, or you'd just like to say hello, my inbox is always open.",
  ],
};

const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <h1>{pageContent.heading}</h1>
      <p>{pageContent.text[0]}</p>
      <p>{pageContent.text[1]}</p>
      {/* <a href="/">Contact Me</a> */}
    </section>
  );
};

export default Contact;
