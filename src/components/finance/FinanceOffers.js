import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceOffers() {
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
            className="btn1"
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
            className="btn"
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

        <div id="Offers" className="tabcontent">
          <div className="main-content">
            <h3> Finance Request</h3>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Request ID</th>
                    <td>123456</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td> 20/06/2023 </td>
                  </tr>
                  <tr>
                    <th> Requested Amount</th>
                    <td> INR 11,00,000</td>
                  </tr>
                  <tr>
                    <th> Status</th>
                    <td> In Progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3> Invoice Details</h3>
          <div className="record-details">
            <table>
              <tbody>
                <tr>
                  <th>Subgroup Id</th>
                  <th>Seller GST</th>
                  <th>Buyer name</th>
                  <th>Buyer GST</th>
                  <th>Trade Amount</th>
                  <th>Invoice ID</th>
                </tr>
                <tr>
                  <td>Subgroup 1</td>
                  <td>GST123</td>
                  <td>Buyer 1</td>
                  <td>GST456</td>
                  <td>INR 5,00,000</td>
                  <td>INV001</td>
                </tr>
                <tr>
                  <td>Subgroup 2</td>
                  <td>GST123</td>
                  <td>Buyer 2</td>
                  <td>GST012</td>
                  <td>INR 6,00,000</td>
                  <td>INV002</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="make-offer">
            <h3>Make an offer</h3>
            <form>
              <input type="checkbox" defaultValue="amount1" />
              <label htmlFor="amounty1"> SubGroup 1: INR 5,00,000</label> &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input type="checkbox" defaultValue="amount2" />
              <label htmlFor="amounty2"> SubGroup 2: INR 6,00,000</label>
            </form>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter amount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Margin">Margin:</label>
              <input
                type="number"
                id="Margin"
                name="Margin"
                step="25%"
                placeholder="Enter Margin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Interest Rate:</label>
              <input
                type="number"
                id="interest"
                name="interest"
                step="0.01"
                placeholder="Enter interest rate"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="term">Term (in days):</label>
              <input
                type="number"
                id="term"
                name="term"
                placeholder="Enter term"
                required
              />
            </div>
          </div>
          <div className="offer-section">
            <h3>Invoives allocated for placed offer</h3>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Subgroup ID</th>
                    <th>Seller GST</th>
                    <th>Buyer Name</th>
                    <th>Buyer GST</th>
                    <th>Trade Amount</th>
                    <th>Invoice ID</th>
                  </tr>
                  <tr>
                    <td>Subgrop 1</td>
                    <td>GST124</td>
                    <td>Buyer 1</td>
                    <td>GST456</td>
                    <td>INR 5,00,000</td>
                    <td>INV001</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn">Next</button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      </Finance1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceOffers;

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

  .content {
    display: flex;
    margin-top: 20px;
    padding: 20px;
  }

  .table-container {
    margin-top: 20px;
  }
  table {
    width: 90%;
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
  .search-bar {
    display: flex;
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .search-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #dddddd;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
    align-items: center;
  }
  .search-button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 8px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .search-button:hover {
    background-color: #0056b3;
  }
  .popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  .popup .popuptext {
    width: 700px;
    visibility: hidden;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    left: 50%;
    margin-left: -80px;
    overflow-y: auto;
    border-width: 3px;
    border-style: solid;
    border-color: #000;
  }
  .popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  .popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }
  .popup .popuptext .btn {
    visibility: hidden;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .btn-container {
    padding-left: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .offer-details {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
  }
  .offer-details h2 {
    margin-top: 0;
  }
  .offer-details .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .offer-details .details {
    color: #666;
  }
  .make-offer {
    width: 90%;
    height: 20vh;
  }
  .form-group {
    margin-top: 10px;
  }
  #amount {
    margin-left: 46px;
  }
  #Margin {
    margin-left: 52px;
  }
  #interest {
    margin-left: 10px;
  }
  #term {
    margin-left: 0px;
  }
`;
