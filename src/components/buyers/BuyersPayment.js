import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import BuyerSide from "../pages/BuyerSide";

function BuyersPayment() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <BuyerSide />

      <Buyers1>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              navigate("/buyersrequestinformation");
            }}
          >
            Request Information
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/buyers_payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div className="main-content">
          <div id="container">
            <div className="Payment-details">
              <h2>Payment Details</h2>
              <div className="details">
                <p>Payment Amount: INR 19,000</p>
                <p>Margin (8%): INR 1500</p>
                <p>Interest (8%): INR 1500</p>
                <p>Term: 45 days</p>
              </div>
              <div>
                <h2>Payment gateway</h2>
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
                    <input
                      type="password"
                      id="cvv"
                      placeholder="Enter the CVV"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="actions">
            <a className="btn" href="#">
              Make the payment
            </a>
            <a className="btn" href="#">
              Back to Dashboard
            </a>
          </div>
        </div>
      </Buyers1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default BuyersPayment;

const Buyers1 = styled.div`
  margin-left: 28vh;

  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    width: 250px;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20vh;
    width: 250px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .main-content {
    padding: 20px;
   margin-left:43vh;
}

  .Payment-details {
      background-color: #F8F9FA;
      padding: 20px;
      margin-top: 50px;
      margin-bottom: auto;
      text-align: center;
      width: 500px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .Payment-details h2 {
      margin-top: 0;
      color: #007BFF;
  }
  .Payment-details .details {
      color: #666;
      margin-top: 20px;
  }
  .form-group {
      margin-bottom: 15px;
  }
  .form-group label {
      display: flex;
      font-weight: bold;
      margin-bottom: 5px;
  }
  .form-group input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  .actions{
      margin-left:80px;
      margin-top: 20px;
  }

`;
