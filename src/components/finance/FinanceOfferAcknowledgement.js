import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";

function FinanceOfferAcknowledgement() {
    const navigate=useNavigate();
  return (
    <Finance1>
      <Navbarfinancer/>
      <h1>Place an offer Acknowledgement</h1>
      <div>
        Your Request for Finance has been successfully placed an offer! See the
        details below.
      </div>

      <div className="content">
        <div> Lender Name: Suresh</div>
        <div>Offered Amount: INR 7,50,000</div>
        <div>Margin (25%): INR 2,50,000</div>
        <div>Interest (12%): INR 22,191.78</div>
        <div>Term: 90 days</div>
      </div>

      <div className="notify">
          <div>We will notify you soon, Thank you for using our platform!</div>
          <button className="button" onClick={()=>{navigate('/financesdashboard')}}>
            OK
          </button>
      </div>
    </Finance1>
  );
}

export default FinanceOfferAcknowledgement;

const Finance1 = styled.div``;
