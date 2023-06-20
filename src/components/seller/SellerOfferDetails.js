import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";

function SellerOfferDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <Details1>
        <div id="container">
          <div className="header">
            <h1>Projected Offers</h1>
            <p>
              Here are the current state of your request for finance and
              multiple projected offers:
            </p>
          </div>
          <div className="content">
            <h2>Current State</h2>
            <div className="state-item">
              <div className="state-label">Current Cashflow:</div>
              <div className="state-value">$50,000</div>
            </div>
            <div className="state-item">
              <div className="state-label">Requested Amount:</div>
              <div className="state-value">$30,000</div>
            </div>
          </div>
          <div className="content">
            <h2>Projected Offers</h2>
            <div className="projection-item">
              <div className="projection-label">Offer 1</div>
              <div className="projection-value">
                <div>Term: 12 months</div>
                <div>Amount: $100,000</div>
                <div>Interest Rate: 8%</div>
              </div>
            </div>
            <div className="projection-item">
              <div className="projection-label">Offer 2</div>
              <div className="projection-value">
                <div>Term: 24 months</div>
                <div>Amount: $150,000</div>
                <div>Interest Rate: 9%</div>
              </div>
            </div>
            <div className="projection-item">
              <div className="projection-label">Offer 3</div>
              <div className="projection-value">
                <div>Term: 18 months</div>
                <div>Amount: $120,000</div>
                <div>Interest Rate: 7.5%</div>
              </div>
            </div>
          </div>
          <div className="content">
            <button
              className="btn"
              onClick={() => {
                navigate("/sellersacknowledgement");
              }}
            >
              Accept Offer
            </button>
          </div>
        </div>
      </Details1>
      <Footer/>
    </>
  );
}

export default SellerOfferDetails;

const Details1 = styled.div`
  // margin-left: 300px;
  // margin-top: 20px;

  body {
    font-family: Arial, sans-serif;
  }
  #container {
    width: 80%;
    margin: auto;
  }
  .header {
    text-align: center;
    padding: 20px;
    color: #333;
  }
  .content {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
  }
  .btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .state-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .state-item:last-child {
    border-bottom: none;
  }
  .state-label {
    font-weight: bold;
  }
  .state-value {
    font-style: italic;
  }
  .projection-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .projection-item:last-child {
    border-bottom: none;
  }
  .projection-label {
    font-weight: bold;
  }
  .projection-value {
    font-style: italic;
  }
`;
