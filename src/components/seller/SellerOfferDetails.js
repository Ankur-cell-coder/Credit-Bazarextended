import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbarseller from "../pages/Navbarseller";


function SellerOfferDetails() {
  const navigate=useNavigate();
  return (
    <>
      <Navbarseller />
      <Details1>
        <div className="section1">Offer Details</div>

        <div className="section2">
          Review the details of the seller and buyer below.
        </div>

        <div className="content">
          <div style={{ marginLeft: "20px" }}>
            <h3>Seller Details</h3>
            <p>
              Seller Name: Seller A
              <br />
              Seller GST: GST123
            </p>
          </div>
        </div>

        <div className="content">
          <div style={{ marginLeft: "20px" }}>
            <h3>Buyer Details</h3>
            <p>
              Buyer Name: 1
              <br />
              Buyer GST: GST456
            </p>
          </div>
        </div>

        <div className="content">
          <div style={{ marginLeft: "20px" }}>
            <h3>Trade Details</h3>
            <p>
              Trade Amount: $10,000
              <br />
              Interest: 5%
              <br />
              Invoice Number: INV001
            </p>
          </div>
        </div>

        <div className="content">
          <div style={{ marginLeft: "20px" }}>
            <h3>Offer Details</h3>
            <p>Projected Offer: $12,000</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            navigate("/sellersacknowledgement");
          }}
        >
          Accept
        </button>
      </Details1>
    </>
  );
}

export default SellerOfferDetails;

const Details1 = styled.div`
  margin-left: 300px;
  margin-top: 50px;

  .section1 {
    font-size: 35px;
    margin-bottom: 13px;
    justify-content: center;
    margin-left: 30%;
  }

  .section2 {
    margin-bottom: 14px;
    justify-content: center;
    margin-left: 26%;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-top: 30px;
    margin-left: 30%;
  }

  button:hover {
    background-color: darkgreen;
  }

  button:focus {
    outline: none;
  }

  .content {
    width: 1200px;
    height: 130px;
    border: 1px solid black;
    margin-top: 20px;
  }
`;
