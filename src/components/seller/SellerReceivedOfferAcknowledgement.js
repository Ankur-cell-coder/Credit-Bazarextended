import React from "react";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import { useNavigate } from "react-router-dom";

function SellerReceivedOfferAcknowledgement() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <Ackno1>
        <div id="container">
          <div>
            <h1>Acknowledgement Page For Offer Details</h1>
            <p>
              Review the details of the requested, placed, and accepted offers.
            </p>
          </div>
          <div class="offer-card">
            <h2>Requested for offer</h2>
            <p>
              <strong>Supplier Name:</strong> Supplier A
            </p>
            <p>
              <strong>Requested Amount:</strong> $10,000
            </p>
            <p>
              <strong>Trade Details:</strong> Trade details here
            </p>
            <p>
              <strong>Additional Information:</strong> Additional information
              here
            </p>
          </div>
          <div class="offer-card">
            <h2>Placed Offer</h2>
            <p>
              <strong>Lender Name:</strong> Lender B
            </p>
            <p>
              <strong>Offered Amount:</strong> $11,000
            </p>
            <p>
              <strong>Trade Details:</strong> Trade details here
            </p>
            <p>
              <strong>Additional Information:</strong> Additional information
              here
            </p>
          </div>
          <div class="offer-card">
            <h2>Accepted Offer</h2>
            <p>
              <strong>Lender Name:</strong> Lender C
            </p>
            <p>
              <strong>Offered Amount:</strong> $12,000
            </p>
            <p>
              <strong>Trade Details:</strong> Trade details here
            </p>
            <p>
              <strong>Additional Information:</strong> Additional information
              here
            </p>
          </div>
          <div class="accepted-offer-id">
            <p>
              <strong>Accepted Offer ID:</strong> 654321
            </p>
          </div>
          <div class="accept-btn-container">
            <button
              class="accept-btn"
              onClick={() => {
                navigate("/sellersdashboard");
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </Ackno1>
    </>
  );
}

export default SellerReceivedOfferAcknowledgement;

const Ackno1 = styled.div`
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }
  .top-bar {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
  }
  .notification-bell {
    margin-left: auto;
    margin-right: 20px;
    font-size: 20px;
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
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .offer-card {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .offer-card h2 {
    margin-bottom: 10px;
    color: orange;
  }
  .offer-card p {
    margin: 0;
  }
  .accept-btn-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .accept-btn {
    color: #fff;
    background-color: orange;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    transition: background-color 0.3s;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  .accept-btn:hover {
    background-color: #0056b3;
  }
  .accepted-offer-id {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
`;
