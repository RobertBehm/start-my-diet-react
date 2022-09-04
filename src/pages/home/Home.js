import { Link } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import DietHeader from "../../components/diet/DietHeader";
import DietPlan from "../../components/diet/DietPlan";
import MealHeader from "../../components/meals/MealHeader";
import MealPlan from "../../components/meals/MealPlan";
import SubFooter from "../../components/footer/SubFooter";
//import heroBcg from "../../assets/smd-hero.jpg";
import heroBcg2 from "../../assets/smd-owner.jpg";
import DietVideo from "../../components/diet/DietVideo";
import MealVideo from "../../components/meals/MealVideo";

import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledContainer>
        {/* Hero Description */}
        <div className="hero-desc">
          <h1>The Right Products To Reach Your Goals At The Right Price!</h1>
          <p className="hero-text">
            Start My Diet is Rhode Island's leading supplement store bringing
            you premium supplements from the all the top brands at competitive
            prices.
          </p>
          <br />
          <p className="hero-text">
            We will work with you on creating your own customized diet program
            to help achieve your fitness goals.
          </p>
          <br />
          <p className="hero-text">
            No more spinning your wheels, and wondering why all your hardwork is
            not paying off. We take the guesswork out and get you real results
          </p>
          <br />
          <p className="hero-text">
            We sell meals on site, with over 80+ different meals to choose from,
            so depending on your fitness goals we have something for everyone...
          </p>
          <br />
          <p className="hero-text">
            We also have a private gym on site that is available 24 hrs with
            tanning, massage chairs and a VIP room..
          </p>
          <div className="btn-position-1">
            <Link to="/shop">
              <button className="--btn --btn-primary --btn-full-width">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="hero-splash">
          <img src={heroBcg2} alt="store owner" className="store-owner-hero" />
        </div>

        {/* Diet Video */}
        <div className="diet-video">
          <DietVideo />
        </div>

        {/* Diet Description */}
        <div className="diet-desc">
          <h1>Customized Diet Plans, Tailored Just For You !</h1>
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
          <div className="btn-position-2">
            <Link to="/contact" className="--btn-container">
              <button className="--btn --btn-primary --btn-full-width --btn-spacer">
                Set Up A Free Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Meal Video */}
        <div className="meal-video">
          <MealVideo />
        </div>

        {/* Meal Description */}
        <div className="meal-desc">
          <h1>Healthy, Chef-Made Meals Delivered Fresh To Your Door</h1>
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
          <div className="btn-position-3">
            <a href="https://startmydietmeals.com">
              <button className="--btn --btn-primary --btn-full-width --btn-wide">
                View Menu
              </button>
            </a>
          </div>
        </div>
      </StyledContainer>
      <SubFooter />
    </>
  );
};
export default Home;

const StyledContainer = styled.section`
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

  @media screen and (max-width: 1200px) {
    grid-template-rows: repeat(6, min-content);
    grid-row-gap: 50px;
  }

  .hero-splash {
    grid-column: col-start 5 / center-end;
    position: relative;
    margin-bottom: -90px;
    .store-hero {
      width: 300px;
    }
    .store-owner-hero {
      width: 100%;
      height: 80%;
    }
    @media screen and (max-width: 1200px) {
      margin-bottom: 0px;
      grid-column: center-start / center-end;
      grid-row: 1 / 2;

      .store-owner-hero {
        height: 100%;
      }
    }
  }

  .hero-desc {
    //background-color: #f1f5f8;
    margin-bottom: 15px;
    padding-right: 10px;
    grid-column: center-start / col-end 4;

    @media screen and (max-width: 1200px) {
      grid-column: center-start / center-end;
      grid-row: 2 / 3;
    }
  }
  .diet-video {
    //background-color: #f1f5f8;
    grid-column: center-start / col-end 4;
    @media screen and (max-width: 1200px) {
      grid-column: center-start / center-end;
      grid-row: 3 / 4;
    }
  }
  .diet-desc {
    //background-color: #f1f5f8;
    padding-left: 10px;
    grid-column: col-start 5 / center-end;

    .--btn-spacer {
      margin-top: 15px;
    }

    @media screen and (max-width: 1200px) {
      grid-column: center-start / center-end;
      grid-row: 4 / 5;
    }
  }
  .meal-video {
    //background-color: #f1f5f8;
    grid-column: col-start 5 / center-end;
    grid-row: 3 / 4;
    @media screen and (max-width: 1200px) {
      grid-column: center-start / center-end;
      grid-row: 5 / 6;
    }
  }
  .meal-desc {
    //background-color: #f1f5f8;
    grid-column: center-start / col-end 4;
    @media screen and (max-width: 1200px) {
      grid-column: center-start / center-end;
      grid-row: 6 / 7;
    }
  }

  @media screen and (min-width: 1200px) {
    .btn-position-1 {
      margin-top: 50px;
    }
    .btn-position-2 {
      display: flex;
      justify-content: end;

      .--btn-container {
        width: 330px !important;
      }
    }
    .btn-position-3 {
      margin-top: 64px;
    }
  }
`;
