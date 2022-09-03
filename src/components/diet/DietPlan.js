import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ResponsivePlayer from "../../videos/responsive-player";

const DietPlan = () => {
  return (
    <>
      <Wrapper>
        <div className="video">
          <ResponsivePlayer url="https://rafealmekhanjian.wistia.com/medias/xk1mys78wq" />
        </div>
        <div className="content-description">
          <p>
            Come in today and get a customized diet plan that suits your
            indivual needs.
          </p>
          <br />
          <p>
            We will start by doing a Metacheck from korr.com that checks your
            RMR and then we do a 3D bodyfat scan from Fit3D.com to find out your
            lean muscle to fat ratio.
          </p>
          <br />
          <p>
            Once we are able to find out the rate at which your body burns
            calories, we can put together a customized diet and training regimen
            to reach your goals in a timely fashion. No guesswork real science
            to get you real results
          </p>
          <br />
          <div className="cta">
            <p>
              If you're not getting the results you want, lets find out why.
            </p>
          </div>
          <br />
          <Link to="/contact">
            <button className="--btn --btn-primary --btn-full-width">
              Book Appointment
            </button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default DietPlan;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 17rem));
  justify-content: center;
  align-items: center;
  background-color: white;

  grid-column-gap: 15px;
  margin-top: 1px;
  padding-bottom: 30px;
  //box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.25);

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    padding-bottom: 0;
  }

  .content-description {
    grid-column-start: 6;
    grid-column-end: 9;
    margin: 5em 0px;

    @media (max-width: 990px) {
      padding: 1em;
    }
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-top: 0px;
    @media (min-width: 776px) {
      font-size: 24px;
    }
  }

  .header {
    font-weight: bold;
    color: #003c55 !important;
  }

  p {
    font-size: 21px;
    @media (max-width: 776px) {
      font-size: 16px !important;
    }
  }

  .video {
    grid-column-start: 2;
    grid-column-end: 6;
  }

  .btn {
    margin-top: 30px;
  }
`;
