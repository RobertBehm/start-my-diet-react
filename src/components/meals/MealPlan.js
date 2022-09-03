import React from "react";
import styled from "styled-components";
import ResponsivePlayer from "../../videos/responsive-player.js";

const MealContent = () => {
  return (
    <>
      <Wrapper>
        <div className="content-description">
          <h4 className="col-1">
            Healthy, Chef-Made Meals Delivered Fresh To Your Door
          </h4>
          <p>
            At Start My Diet, we believe you shouldn’t have to sacrifice taste
            for nutrition.
          </p>
          <br />
          <p>
            That’s why we work collaboratively with a pro team to create our
            delicious, nutritionally balanced menu packed with all the macro and
            micronutrients you need to feel your best.
          </p>
          <br />
          <a href="https://startmydietmeals.com">
            <button className="--btn --btn-primary --btn-full-width">
              View Menu
            </button>
          </a>
        </div>

        <div className="video">
          <ResponsivePlayer url="https://rafealmekhanjian.wistia.com/medias/ptvskx8yiu" />
        </div>
      </Wrapper>
    </>
  );
};

export default MealContent;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 14rem));
  justify-content: center;
  align-items: center;
  //background-color: var(--clr-grey-10);
  grid-column-gap: 50px;
  padding-bottom: 30px;

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    padding-bottom: 0;
  }

  .content-description {
    grid-column-start: 2;
    grid-column-end: 4;
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
  }

  h4 {
    font-weight: bold;
    color: #003c55;
  }

  p {
    font-size: 21px;
    @media (max-width: 776px) {
      font-size: 16px !important;
    }
  }

  .video {
    grid-column-start: 4;
    grid-column-end: 8;
  }

  .btn {
    margin-top: 30px;
  }
`;
