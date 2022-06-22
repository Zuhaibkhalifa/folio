import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xpcshwe",
      "template_pg2c6d8",
      form.current,
      "OTlKyH4IkLKFA0tLU"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>zuhaibkhalifa@gmail.com</h5>
            <a href="mailto:zuhaibkhalifa@gmail.com" target="_blank">
              Send a massage
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Massenger</h4>
            <h5>zuhaibkhalifa</h5>
            <a href="https://m.me/m.zuhaib.mohammed" target="_blank">
              Send a massage
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+917022511144"
              target="_blank"
            >
              Send a massage
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Yout email" required />
          <textarea
            name="massage"
            rows="7"
            placeholder="your massage"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
