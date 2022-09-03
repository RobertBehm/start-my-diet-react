import { useRef } from "react";
import styled from "styled-components";
//import Card from "../../components/card/Card";
//import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
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
      <div>
        <p>Let’s talk</p>
        <h1>Contact us</h1>
      </div>
      <div className="hero-container">
        <h1>How can we help you succeed?</h1>
        <p>
          Have a product idea or a business challenge you’d like to discuss?
          Leave us a message, we’ll get back to you shortly. We want to know who
          you are and what you are up to.
        </p>
      </div>
      <div className="form-container">
        <h2>Let's Talk</h2>
        <div>
          <form ref={form} onSubmit={sendEmail}>
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
              placeholder="Your active email"
              required
            />
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject" required />
            <label>Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </form>

          <div>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>
            <div>
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
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default ContactForm;

const StyledSection = styled.section`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 100px;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] 1fr [full-end];
  background-color: #eff0f9;

  .form-container {
    //background-color: "#eff0f9";
    max-width: "900px";
  }
`;
