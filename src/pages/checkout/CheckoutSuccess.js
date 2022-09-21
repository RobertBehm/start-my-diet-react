import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckoutSuccess = () => {
  return (
    <StyledSection>
      <div className="container flex-container">
        <h2>Checkout Successful</h2>
        <p>Thank you for your purchase</p>
        <br />

        <button className="--btn">
          <Link to="/order-history">View Order Status</Link>
        </button>
      </div>
    </StyledSection>
  );
};

export default CheckoutSuccess;

const StyledSection = styled.section`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  height: 70vh;

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  p {
    margin-bottom: 15px;
  }
`;
