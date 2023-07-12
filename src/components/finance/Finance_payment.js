import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function Finance_payment() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarfinancer />
      <NavbarsideFinance />
      <Finance1>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_request_information");
            }}
          >
            Request Information
          </button>
          {/* <button
            className="btn"
            onClick={() => {
              navigate("/finance_view_request");
            }}
          >
            View Request
          </button> */}
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/finance_payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div id="Payment" className="tabcontent">
          <div className="main-content">
            <div id="container">
              <div className="Payment-details">
                <h2>Payment details Details</h2>
                <p>
                  Payment has been made by the buyer to Profintech Technologies,
                  Below are the payment detils.
                </p>
                <div className="details">
                  <p>Payment Amount: INR 7,50,000</p>
                  <p>Margin (25%): INR 2,50,000</p>
                  <p>Interest (12%): INR 22,191.78</p>
                  <p>Term: 90 days</p>
                  <p>Payment loyality (2%): INR 4,932</p>
                  <p>Technology charge (2%): INR 4,932 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Finance1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Finance_payment;

const Finance1 = styled.div`
  margin-left: 28vh;

  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
    font-size: 20px;
    margin-top: 20vh;
  }
  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .accept-btn-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.accept-btn {
    color: #fff;
    background-color: #007BFF;
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
.tabcontent{
    margin-left:45vh;
}

`;
