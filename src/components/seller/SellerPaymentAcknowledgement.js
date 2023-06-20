import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";

function SellerPaymentAcknowledgement() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <Sellerack1>
        <div className="header">
          <h1>Settlement Acknowledgment</h1>
        </div>
        <div className="content">
          <h2>Payment Successful</h2>
          <p>
            The settlement has been made by the lender. The lender will be
            notified once the amount is credited to their account.
          </p>
        </div>
        <div className="status">
          <span className="status-dot" />
          <span className="status-text">Status: Successful</span>
        </div>
        <div className="message">
          <p>Thank you for using our services!</p>

          <button
            onClick={() => {
              navigate("/sellersdashboard");
            }}
            className="btn"
          >
            Back to Dashboard
          </button>
        </div>
      </Sellerack1>
      <Footer/>
    </>
  );
}

export default SellerPaymentAcknowledgement;

const Sellerack1 = styled.div`
  body {
    font-family: Arial, sans-serif;
  }

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header {
    text-align: center;
    padding: 20px;
    color: #333;
  }
  .content {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .status-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #00dc25;
    margin-right: 5px;
  }
  .status-text {
    display: inline-block;
    font-weight: bold;
  }
  .message {
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
  }
  .btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    transition: background-color 0.3s ease;
  }
  .btn:hover {
    background-color: #0056b3;
  }
`;
