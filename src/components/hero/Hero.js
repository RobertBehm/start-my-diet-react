import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import heroBcg from "../../assets/smd-hero.jpg";
import heroBcg2 from "../../assets/smd-owner.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="hero-copy">
        <p>
          Start My Diet is Rhode Island's leading supplement store bringing you
          premium supplements from the all the top brands at competitive prices.
        </p>
        <br />
        <p>
          We will work with you on creating your own customized diet program to
          help achieve your fitness goals. No more spinning your wheels, and
          wondering why all your hardwork is not paying off. We take the
          guesswork out and get you real results
        </p>
        <br />
        <p>
          We sell meals on site, with over 80+ different meals to choose from,
          so depending on your fitness goals we have something for everyone...
        </p>
        <br />
        <p>
          We also have a private gym on site that is available 24 hrs with
          tanning, massage chairs and a VIP room
        </p>
        <br />
        <Link to="/contact">
          <button className="--btn --btn-primary --btn-full-width">
            Book Appointment
          </button>
        </Link>
      </article>
      {/*<Hidden smDown>*/}
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
      {/*</Hidden>*/}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding-top: 4rem;
  padding-bottom: 30px;

  .hero-copy {
    padding: 0px 45px 45px;
    @media (max-width: 776px) {
      padding: 0px;
    }
  }

  .img-container {
    display: none;
  }

  h4 {
    font-weight: bold;
    color: #003c55;
  }

  p {
    font-size: 21px !important;
    @media (max-width: 776px) {
      font-size: 16px !important;
    }
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-8);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
  @media (max-width: 600px) {
    .img-container {
      visibility: hidden;
    }
  }
`;
export default Hero;
