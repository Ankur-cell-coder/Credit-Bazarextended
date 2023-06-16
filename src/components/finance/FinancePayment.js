import React from "react";
import { styled } from "styled-components";
import qimg from "../images/qrcodeimage.png";
import { useNavigate } from "react-router-dom";
import Navbarfinancer from "../pages/Navbarfinancer";

function FinancePayment() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarfinancer/>
      <Seller1>
        <div className="header">
          <h1>Payment Gateway</h1>
          <p>
            Process your payment securely and conveniently. Use our QR code for
            a quick transaction.
          </p>
        </div>
        <div className="qr-code">
          <img src={qimg} alt="qimg" />
        </div>
        <div className="content">
          <h2>Payment Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="amount">Payment Amount</label>
              <input
                type="number"
                id="amount"
                placeholder="Enter the Payment Amount"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter the Card Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date</label>
              <input type="text" id="expiry" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="password" id="cvv" placeholder="Enter the CVV" />
            </div>
            <button
              className="btn"
              onClick={() => {
                navigate("/financedisrubmentacknowledgement");
              }}
            >
              Process Payment
            </button>
          </form>
        </div>
      </Seller1>
    </>
  );
}

export default FinancePayment;

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
    justify-content: space-between;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
  .bell-icon {
    font-size: 18px;
    margin-right: 20px;
    color: gold;
  }

  width: 80%;
  margin: auto;

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
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
  .qr-code {
    margin-bottom: 5px;
    text-align: right;
  }
`;
