import { useRef } from "react";
import styled from "styled-components";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_invhfhv",
        form.current,
        "p_h4fFJqXUZII470i"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledSection>
      <div className={`container ${styles.contact}`}>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h1>Our Contact Information</h1>
              <p>Fill the form or contact us directly</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>401-632-9326</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>startmydiet@gmail.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>1380 Hartford Ave, Johnston, RI</p>
                </span>
                <span>
                  <FaFacebook />
                  <p>@startmydiet</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default Contact;

const StyledSection = styled.section`
  .contact-header {
    background-color: #f1f5f8;
    margin: 0px 15px;
  }
`;
