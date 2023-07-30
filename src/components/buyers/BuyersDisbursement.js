import React from 'react'
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import BuyerSide from "../pages/BuyerSide";

function BuyersDisbursement() {
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
            className="btn1"
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
            className="btn"
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

        <div id="Offer" className="tabcontent">
          <div className="main-content">
            <div id="container">
              <div>
                <h2 align="center">Offer details</h2>
              </div>
              <div className="panel">
                <div className="panel-header">Subgroup 1</div>
                <div className="panel-body">
                  <div className="panel-header">Liqui loans</div>
                  <div className="offer details">
                    <h1>Offer Information</h1>
                    <h2> Finance request Information</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Seller Name:</th>
                          <td>Prime Textiles</td>
                        </tr>
                        <tr>
                          <th>Contact Details:</th>
                          <td>info@primetextiles.in</td>
                        </tr>
                        <tr>
                          <th>GST:</th>
                          <td>36AAIFP3688H1ZS</td>
                        </tr>
                        <tr>
                          <th>Amounted Requested:</th>
                          <td>INR 4,00,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Offer Information</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Lender Name:</th>
                          <td>LiquiLoans</td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <th>Value of subgroup:</th>
                          <td>INR 20,000</td>
                        </tr>
                        <tr>
                          <th>Payment Amount:</th>
                          <td>INR 19,000 </td>
                        </tr>
                        <tr>
                          <th>Margine:</th>
                          <td>INR 1500 (8%) </td>
                        </tr>
                        <tr>
                          <th>Interest Rate:</th>
                          <td> INR 1500 (8%)</td>
                        </tr>
                        <tr>
                          <th>Repayment Term:</th>
                          <td> 45 days</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Patron of the Payment</h2>
                    <p>LiquiLoans NBFC</p>
                    <h2>Receipent of the Payment</h2>
                    <p>Prime Textiles</p>
                    <h2>Contact Information</h2>
                    <p>
                      If you have any questions or need assistance, please
                      contact our customer service at 1-800-123-4567 or email us
                      at info@example.com.
                    </p>
                    <div className="Offer-confirmation">
                      <h2>Offer Confirmation</h2>
                      <p>
                        LiquiLoans has made an offer on your invoice/purchase
                        order, which corresponds to the finance request
                        submitted by the seller. Confirmation Number: ABD258
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Buyers1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
   </>
  )
}

export default BuyersDisbursement

const Buyers1 = styled.div`
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
  .panel-header::after {
   
    margin-top: 5px;
    margin-right: 5px;
}

.panel {
    background-color: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 10px;
}
.panel-header {
    background-color: #ccc;
    padding: 10px;
    cursor: pointer;
}
.panel-body {
    padding: 10px;
    display: none;
}
.panel-content {
    margin-bottom: 5px;
    cursor: pointer;
    margin-top: 5px;
}
.panel-content:last-child {
    margin-bottom: 0;
}
.panel-header.active {
    background-color: #007BFF;
    color: #fff;
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

  .content {
    display: flex;
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
`;