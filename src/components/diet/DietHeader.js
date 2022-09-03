import React from "react";
import styled from "styled-components";

const DietHeader = () => {
  return (
    <StyledBlue>
      <div className="title">
        <h2 className="headline">customized diet plans</h2>
        <div className="underline"></div>
      </div>
    </StyledBlue>
  );
};

export default DietHeader;

const StyledBlue = styled.div`
  display: flex;
  justify-content: center;
  //box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.25);
  //background-color: var(--clr-grey-10);
  padding: 1rem;

  .headline {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  .title .underline {
    width: 6rem;
    height: 0.25rem;
    background: #49a6e9;
    background: var(--light-blue);
    margin-left: auto;
    margin-right: auto;
  }

  .blue-text {
    color: #003c55;
    font-weight: bold;
    @media (max-width: 600px) {
      font-size: 1.75em;
    }
  }
`;
