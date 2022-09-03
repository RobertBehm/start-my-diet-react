import { Link } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import DietHeader from "../../components/diet/DietHeader";
import DietPlan from "../../components/diet/DietPlan";
import MealHeader from "../../components/meals/MealHeader";
import MealPlan from "../../components/meals/MealPlan";
import SubFooter from "../../components/footer/SubFooter";
import heroBcg from "../../assets/smd-hero.jpg";
import heroBcg2 from "../../assets/smd-owner.jpg";
import DietVideo from "../../components/diet/DietVideo";
import MealVideo from "../../components/meals/MealVideo";
import ContactForm from "../contact/ContactForm";

import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledContainer>
        {/* Hero Description */}
        <div className="hero-desc">
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
            We sell meals on site, with over 80+ different meals to choose from,
            so depending on your fitness goals we have something for everyone...
          </p>
          <br />
          <p className="hero-text">
            We also have a private gym on site that is available 24 hrs with
            tanning, massage chairs and a VIP room..
          </p>
        </div>

        {/* Hero image */}
        <div className="hero-splash">
          <img src={heroBcg} alt="store" className="store-hero" />
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
          <a href="https://startmydietmeals.com">
            <button className="--btn --btn-primary --btn-full-width">
              View Menu
            </button>
          </a>
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

  .hero-splash {
    background-color: #f1f5f8;
    grid-column: col-start 5 / center-end;
    position: relative;
    margin-bottom: 15px;
    .store-hero {
      width: 300px;
    }
    .store-owner-hero {
      width: 300px;
    }
  }

  .hero-desc {
    //background-color: #f1f5f8;
    margin-bottom: 15px;
    padding-right: 10px;
    grid-column: center-start / col-end 4;
  }
  .diet-video {
    //background-color: #f1f5f8;
    grid-column: center-start / col-end 4;
  }
  .diet-desc {
    //background-color: #f1f5f8;
    padding-left: 10px;
    grid-column: col-start 5 / center-end;
  }
  .meal-video {
    //background-color: #f1f5f8;
    grid-column: col-start 5 / center-end;
    grid-row: 3 / 4;
  }
  .meal-desc {
    //background-color: #f1f5f8;
    grid-column: center-start / col-end 4;
  }

  .contact-form {
    grid-row: 4 / 6;
  }
`;
