import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";
import { useCount } from "../../context/count";

function Offers() {
  const navigate = useNavigate();

  const { incrementCount2 } = useCount();

  const { count2 } = useCount();

  const handleClick = () => {
    incrementCount2();
    // navigate("/sellersreceivedoffersacknowledgement");
  };

  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              navigate("/request_information");
            }}
          >
            Request Information
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/settlement");
            }}
          >
            Settlement
          </button>
        </div>
        <div className="content">
          <div className="main-content">
            <div className="record-summary">
              <h2>Request Offers</h2>
            </div>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Request ID</th>
                    <td>123456</td>
                  </tr>
                  <tr>
                    <th> Status</th>
                    <td> Done</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {!count2 ? (
          <div id="container">
            <div className="header">
              <h1>Received Offers</h1>
              <p>Review the offers received from Finance Partner.</p>
            </div>
            <div className="lender-details">
              <h2>Offer 1</h2>
              <p>
                <strong>Lender Name:</strong> Suresh
              </p>
              <p>
                <strong>Offered Amount:</strong> INR 7,50,000
              </p>
              <p>
                <strong>Interest Rate(12%):</strong>INR 22,191.78
              </p>
              <p>
                <strong>Terms:</strong>90 days
              </p>
              <p>
                <strong>Address:</strong> 123 Main Street, City,India
              </p>
              <p>
                <strong>Contact:</strong> lender@example.com, +1 123-456-7890
              </p>
              <div className="select-btn-container">
                <button className="select-btn" onClick={handleClick}>
                  Accept
                </button>
              </div>
            </div>
            <div className="lender-details">
              <h2>Offer 2</h2>
              <p>
                <strong>Lender Name:</strong> Ram
              </p>
              <p>
                <strong>Offered Amount:</strong> INR 7,50,000
              </p>
              <p>
                <strong>Interest Rate(12%):</strong>INR 22,191.78
              </p>
              <p>
                <strong>Terms:</strong>120 days
              </p>
              <p>
                <strong>Address:</strong> 123 Main Street, City,India
              </p>
              <p>
                <strong>Contact:</strong> lender@example.com, +1 123-456-7890
              </p>
              <div className="select-btn-container">
                <button className="select-btn" onClick={handleClick}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div id="container">
            <div>
              <h1>Accepted Offers</h1>
              {/* <p>
              Review the details of the requested, placed, and accepted offers.
            </p> */}
            </div>
            <div class="offer-card">
              <h2>Requested for offer</h2>
              <p>
                <strong>Supplier Name:</strong> Supplier A
              </p>
              <p>
                <strong>Requested Amount:</strong>INR 10,00,000
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
                <strong>Offered Amount:</strong> INR 7,27,000
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
                <strong>Offered Amount:</strong> INR 10,00,000
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
        )}
      </Request1>
      <div style={{ marginTop: "25vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Offers;

const Request1 = styled.div`
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
    margin-top:25vh;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .content {
    margin-left: 20px;
    margin-top: 20px;
  }
  .main-content {
    padding: 20px;
  }
  .table-container {
    margin-top: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
  }
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }
  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }

  #container {
    width: 100%;
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
    width: 95%;
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
