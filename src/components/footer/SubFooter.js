import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import FooterLogo from "../../assets/smd-footer-logo.png";

const SubFooter = () => {
  return (
    <Wrapper>
      <div className="footer-info">
        {/* column 1 */}
        {/*<Hidden smDown>*/}
        <div className="logo-container">
          <img
            src={FooterLogo}
            alt="footer logo"
            imgstyle={{ objectFit: "contain" }}
            style={{ maxHeight: "125px" }}
          />
        </div>
        {/*</Hidden>*/}
        {/* column 2 */}
        <div className="col">
          <h4>Store Location</h4>
          <ul>
            <li>1380 Hartford Ave</li>
            <li>Johnston, RI 02919</li>
          </ul>
        </div>
        {/* column 2.5 */}
        <div className="col">
          <h4>Store Hours</h4>
          <ul>
            <li>
              Monday-Friday: <br />
              11AM-8PM
            </li>
            <li>
              Saturday:
              <br />
              11AM-5PM
            </li>
            <li>Sunday: 11AM-3PM</li>
          </ul>
        </div>
        {/* column 3 */}
        <div className="col">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="tel:(401) 632-9326" className="contact-info">
                401-632-9326
              </a>
            </li>
            <li>
              <a href="mailto:startmydiet@gmail.com" className="contact-info">
                startmydiet@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* column 4 */}
        <div className="col">
          <h4>Support</h4>
          <ul>
            {/*<Hidden smDown>*/}
            <Link to="/" className="links">
              <li>Customer Service</li>
            </Link>
            {/*</Hidden>*/}
            <Link to="/" className="links">
              <li>Shipping & Returns</li>
            </Link>
            {/*<Hidden smUp>*/}
            <Link to="/" className="links">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/" className="links">
              <li>Terms & Conditions</li>
            </Link>
            {/*</Hidden>*/}
          </ul>
        </div>
        {/* column 5 */}
        <div className="col">
          <h4>Follow Us</h4>
          <ul className="social-wrapper">
            <li>
              <a href="https://www.facebook.com/StartMyDIetRI">
                <button className="btn-icon" component="a" disableRipple>
                  <img src={facebook} alt="facebook" className="img-styles" />
                </button>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/startmydietri/">
                <button className="btn-icon" component="a" disableRipple>
                  <img src={instagram} alt="instagram" className="img-styles" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  color: #003c55;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] 1fr [full-end];

  .footer-info {
    grid-column: center-start / center-end;
    display: grid;
    grid-column-gap: 2.5em;
    grid-template-columns: repeat(6, 200px);
    align-items: center;
    //padding: 20px;
    align-items: start;
    //width: 1400px !important;

    @media (max-width: 940px) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-container {
    display: flex;
    justify-content: center;
  }

  ul {
    text-align: center;
    margin: 0;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    //padding: 0px 30px;
    text-align: center;
    font-size: 18px;
  }

  a {
    font-size: 18px;
  }

  h4 {
    font-weight: bold;
    margin: 1.2em;

    @media (max-width: 1200px) {
      font-size: 2em;
    }
  }

  .img-styles {
    margin: 0px;
    padding: 0px;
    text-align: start;

    @media (max-width: 1060px) {
      //height: 1em;
      //width: 1em;
    }
  }

  .social-wrapper {
    display: flex;
    justify-content: space-around;
    width: 100px;
  }

  .links {
    color: #003c55;
    text-decoration: none;
  }

  .contact-info {
    color: #003c55;
    text-decoration: none;
  }

  .btn-icon {
    border: none;
    padding: 15px;
    //border-radius: 10px;
    background-color: #f1f5f8;
    cursor: pointer;
  }
`;

export default SubFooter;
