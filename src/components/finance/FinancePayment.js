import React from "react";
import { styled } from "styled-components";
import qimg from "../images/qrcodeimage.png";
import { useNavigate } from "react-router-dom";
import Navbarfinancer from "../pages/Navbarfinancer";
import Footer from "../pages/Footer";
import NavbarsideFinance from "../pages/NavbarsideFinance";

function FinancePayment() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarfinancer/>
      <NavbarsideFinance/>
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
      <Footer/>
    </>
  );
}

export default FinancePayment;

const Seller1 = styled.div`
display: flex;
flex-direction: column;
width:80%;

margin-left: 28vh;

  .top-bar {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


 
  .header {
    text-align: center;
    padding: 20px;
    color: #333;
    margin-top: 20vh;
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
