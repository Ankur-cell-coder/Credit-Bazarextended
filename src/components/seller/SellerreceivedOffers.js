import React from "react";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import { useNavigate } from "react-router-dom";

function SellerreceivedOffers() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <Seller1>
        <div id="container">
          <div className="header">
            <h1>Received Offers</h1>
            <p>Review the offers received from lenders.</p>
          </div>
          <div className="lender-details">
            <h2>Offer 1</h2>
            <p>
              <strong>Lender Name:</strong> Lender A
            </p>
            <p>
              <strong>Offered Amount:</strong> $10,000
            </p>
            <p>
              <strong>Interest Rate:</strong> 5%
            </p>
            <p>
              <strong>Terms:</strong> 12 months
            </p>
            <p>
              <strong>Additional Details:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, City, State
            </p>
            <p>
              <strong>Contact:</strong> lender@example.com, +1 123-456-7890
            </p>
            <div className="select-btn-container">
              <button
                className="select-btn"
                onClick={() => {
                  navigate("/sellersreceivedoffersacknowledgement");
                }}
              >
                Accept
              </button>
            </div>
          </div>
          <div className="lender-details">
            <h2>Offer 2</h2>
            <p>
              <strong>Lender Name:</strong> Lender B
            </p>
            <p>
              <strong>Offered Amount:</strong> $10,000
            </p>
            <p>
              <strong>Interest Rate:</strong> 5%
            </p>
            <p>
              <strong>Terms:</strong> 12 months
            </p>
            <p>
              <strong>Additional Details:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, City, State
            </p>
            <p>
              <strong>Contact:</strong> lender@example.com, +1 123-456-7890
            </p>
            <div className="select-btn-container">
              <button
                className="select-btn"
                onClick={() => {
                  navigate("/sellersreceivedoffersacknowledgement");
                }}
              >
                Accept
              </button>
            </div>
          </div>
          <div className="lender-details">
            <h2>Offer 3</h2>
            <p>
              <strong>Lender Name:</strong> Lender C
            </p>
            <p>
              <strong>Offered Amount:</strong> $10,000
            </p>
            <p>
              <strong>Interest Rate:</strong> 5%
            </p>
            <p>
              <strong>Terms:</strong> 12 months
            </p>
            <p>
              <strong>Additional Details:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, City, State
            </p>
            <p>
              <strong>Contact:</strong> lender@example.com, +1 123-456-7890
            </p>
            <div className="select-btn-container">
              <button
                className="select-btn"
                onClick={() => {
                  navigate("/sellersreceivedoffersacknowledgement");
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </Seller1>
    </>
  );
}

export default SellerreceivedOffers;

const Seller1 = styled.div`
  body {
    font-family: Arial, sans-serif;
  }
  .top-bar {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
  .notification-bell {
    margin-left: auto;
    margin-right: 20px;
    font-size: 18px;
  }
  #container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .header {
    text-align: center;
    padding: 20px;
    color: #333;
  }
  .offer-card {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    width: 80%;
  }
  .offer-card h2 {
    margin-bottom: 10px;
  }
  .offer-card p {
    margin: 0;
  }
  .lender-details {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
  }
  .lender-details h3 {
    margin-bottom: 10px;
  }
  .lender-details p {
    margin: 0;
  }
  .select-btn-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .select-btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
  }
  .select-btn:hover {
    background-color: #0056b3;
  }
`;
